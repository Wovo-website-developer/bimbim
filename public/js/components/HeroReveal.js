export function createHeroReveal(store) {
  const container = document.createElement('div');
  // Asymmetrical organic tech polygon boundary with chamfered cuts (non-straight, organic cyber frame)
  container.className = 'relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto overflow-hidden bg-neutral-950 aspect-square select-none group shadow-2xl transition-all duration-300';
  container.style.clipPath = 'polygon(0% 4%, 5% 0%, 95% 0%, 100% 5%, 100% 93%, 94% 100%, 6% 100%, 0% 95%)';

  // Base Image B (Unmasked) - Positioned underneath
  const imgB = document.createElement('img');
  imgB.src = '/assets/hero-unmasked.jpg';
  imgB.alt = 'WOVO Architecture Unmasked';
  imgB.className = 'absolute inset-0 w-full h-full object-cover object-center pointer-events-none scale-105';

  // Canvas Overlay for Masked Image A with dynamic radial spotlight reveal
  const canvas = document.createElement('canvas');
  canvas.className = 'absolute inset-0 w-full h-full touch-none cursor-crosshair z-10';

  // Tech Badge Overlay
  const hintPill = document.createElement('div');
  hintPill.className = 'absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs text-neutral-200 font-mono flex items-center gap-2 transition-opacity duration-500 opacity-90 shadow-2xl';
  hintPill.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
    <span id="hero-hint-text">${store.t('hero_reveal_hint')}</span>
  `;

  container.appendChild(imgB);
  container.appendChild(canvas);
  container.appendChild(hintPill);

  const imgA = new Image();
  imgA.src = '/assets/hero-masked.jpg';

  let ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;

  // Interaction State Variables
  let isInteracting = false;
  let targetX = -1000;
  let targetY = -1000;
  let currentX = -1000;
  let currentY = -1000;
  let currentRadius = 0;
  let maxRadius = 80; // Reduced spotlight radius for refined tech feel
  let closeTimeout = null;
  let animFrameId = null;
  let isClosing = false;

  function resizeCanvas() {
    const rect = container.getBoundingClientRect();
    width = rect.width;
    height = rect.height;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    draw();
  }

  function draw() {
    if (!width || !height) return;

    ctx.clearRect(0, 0, width, height);
    ctx.save();

    // 1. Draw Image A (Masked Cybernetic Portrait)
    if (imgA.complete && imgA.naturalWidth !== 0) {
      ctx.drawImage(imgA, 0, 0, width, height);
    }

    // 2. Cut out spotlight mask if active
    if (currentRadius > 0.5) {
      ctx.globalCompositeOperation = 'destination-out';

      const gradient = ctx.createRadialGradient(
        currentX, currentY, 0,
        currentX, currentY, currentRadius
      );
      gradient.addColorStop(0, 'rgba(0,0,0,1)');
      gradient.addColorStop(0.8, 'rgba(0,0,0,0.9)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.beginPath();
      ctx.arc(currentX, currentY, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // HUD ring around spotlight
      ctx.globalCompositeOperation = 'source-over';
      ctx.beginPath();
      ctx.arc(currentX, currentY, currentRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.7)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(currentX, currentY, currentRadius + 5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.setLineDash([4, 4]);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);
    }

    ctx.restore();
  }

  function animateLoop() {
    currentX += (targetX - currentX) * 0.25;
    currentY += (targetY - currentY) * 0.25;

    if (isInteracting && !isClosing) {
      currentRadius += (maxRadius - currentRadius) * 0.18;
    } else if (isClosing) {
      currentRadius += (0 - currentRadius) * 0.08;
      if (currentRadius < 0.5) {
        currentRadius = 0;
        isClosing = false;
      }
    }

    draw();
    animFrameId = requestAnimationFrame(animateLoop);
  }

  function handlePointerMove(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    targetX = clientX - rect.left;
    targetY = clientY - rect.top;

    if (!isInteracting) {
      isInteracting = true;
      if (currentRadius === 0) {
        currentX = targetX;
        currentY = targetY;
      }
    }
    isClosing = false;

    if (closeTimeout) clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      startClosingAnimation();
    }, 1000);
  }

  function startClosingAnimation() {
    isInteracting = false;
    isClosing = true;
  }

  // Desktop Mouse Events
  canvas.addEventListener('mousemove', (e) => {
    handlePointerMove(e.clientX, e.clientY);
  });

  canvas.addEventListener('mouseleave', () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      startClosingAnimation();
    }, 1000);
  });

  // Mobile Touch Events (Touch inside box reveals mask, touch outside scrolls page)
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      e.preventDefault();
      const touch = e.touches[0];
      handlePointerMove(touch.clientX, touch.clientY);
    }
  }, { passive: false });

  canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
      e.preventDefault();
      const touch = e.touches[0];
      handlePointerMove(touch.clientX, touch.clientY);
    }
  }, { passive: false });

  canvas.addEventListener('touchend', () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      startClosingAnimation();
    }, 1000);
  });

  imgA.onload = () => draw();
  window.addEventListener('resize', resizeCanvas);

  setTimeout(() => {
    resizeCanvas();
    animateLoop();
  }, 100);

  store.subscribe(() => {
    const textEl = container.querySelector('#hero-hint-text');
    if (textEl) textEl.textContent = store.t('hero_reveal_hint');
  });

  return container;
}
