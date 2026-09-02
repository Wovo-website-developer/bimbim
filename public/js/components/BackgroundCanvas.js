export function initBackgroundCanvas(store) {
  let canvas = document.getElementById('bg-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    canvas.className = 'fixed inset-0 pointer-events-none z-0 w-full h-full';
    document.body.insertBefore(canvas, document.body.firstChild);
  }

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;

  const CODE_TOKENS = [
    '<dev>', '<div>', '</div>', '<h1>', '</>', '{ }', '<main>',
    'const', 'async', '=>', 'WOVO', '0101', 'git', 'npm',
    'return', 'px', 'rem', '[]', 'CSS', 'HTML', 'function()',
    '<header>', 'let', 'import', '#id', '.class'
  ];

  const particles = [];
  const tokenCount = 45;

  let mouseX = -1000;
  let mouseY = -1000;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function createParticles() {
    particles.length = 0;
    for (let i = 0; i < tokenCount; i++) {
      particles.push({
        text: CODE_TOKENS[Math.floor(Math.random() * CODE_TOKENS.length)],
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.floor(Math.random() * 4) + 11, // 11px to 14px
        alpha: Math.random() * 0.35 + 0.15,
        glow: 0
      });
    }
  }

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length > 0) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  window.addEventListener('mouseleave', () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  resize();
  createParticles();

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const isDark = store.theme === 'dark';

    ctx.font = '500 12px "JetBrains Mono", monospace';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -60) p.x = width + 50;
      if (p.x > width + 60) p.x = -50;
      if (p.y < -30) p.y = height + 20;
      if (p.y > height + 30) p.y = -20;

      // Mouse Proximity & Dispersion
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 160) {
        const force = (160 - dist) / 160;
        p.x -= (dx / dist) * force * 2.2;
        p.y -= (dy / dist) * force * 2.2;
        p.glow = Math.min(1, p.glow + 0.1);
      } else {
        p.glow = Math.max(0, p.glow - 0.02);
      }

      ctx.font = `600 ${p.size}px "JetBrains Mono", monospace`;

      if (isDark) {
        // Dark theme: Glowing white / cyan code symbols on black background
        if (p.glow > 0.05) {
          ctx.shadowColor = 'rgba(34, 211, 238, 0.9)';
          ctx.shadowBlur = 12 * p.glow;
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, p.alpha + p.glow * 0.7)})`;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        }
      } else {
        // Light theme: Glowing dark slate / cyan code symbols on white background
        if (p.glow > 0.05) {
          ctx.shadowColor = 'rgba(6, 182, 212, 0.6)';
          ctx.shadowBlur = 10 * p.glow;
          ctx.fillStyle = `rgba(15, 23, 42, ${Math.min(1, p.alpha + p.glow * 0.6)})`;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(15, 23, 42, ${p.alpha * 0.6})`;
        }
      }

      ctx.fillText(p.text, p.x, p.y);
    }

    ctx.shadowBlur = 0;
    requestAnimationFrame(draw);
  }

  draw();
}
