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

  const particles = [];
  const particleCount = 45;

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
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.5 + 1.5,
        alpha: Math.random() * 0.5 + 0.3
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
    if (e.touches.length > 0) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  resize();
  createParticles();

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const isDark = store.theme === 'dark';
    const dotColor = isDark ? '255, 255, 255' : '30, 58, 138';
    const lineColor = isDark ? '59, 130, 246' : '99, 102, 241';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse attraction / interaction
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 140) {
        const force = (140 - dist) / 140;
        p.x -= (dx / dist) * force * 1.5;
        p.y -= (dy / dist) * force * 1.5;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${dotColor}, ${p.alpha * (isDark ? 0.7 : 0.4)})`;
      ctx.fill();

      // Connecting lines between close particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const ldx = p.x - p2.x;
        const ldy = p.y - p2.y;
        const ldist = Math.sqrt(ldx * ldx + ldy * ldy);

        if (ldist < 100) {
          const lalpha = (1 - ldist / 100) * 0.15;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${lineColor}, ${lalpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();

  store.subscribe(() => {
    // Theme subscription triggers redraw naturally
  });
}
