export function createHeroReveal(store) {
  // Outer Cyber Bezel Frame with Curved Corners
  const frameWrapper = document.createElement('div');
  frameWrapper.className = 'relative w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-2 sm:p-2.5 rounded-[2.5rem] bg-gradient-to-b from-cyan-500/30 via-neutral-900 to-cyan-500/10 border border-cyan-500/40 shadow-2xl shadow-cyan-500/15 select-none transition-all duration-300 group';

  // Cybernetic Corner Accents
  const cornerTL = document.createElement('div');
  cornerTL.className = 'absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl pointer-events-none z-30';
  const cornerTR = document.createElement('div');
  cornerTR.className = 'absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-cyan-400 rounded-tr-xl pointer-events-none z-30';
  const cornerBL = document.createElement('div');
  cornerBL.className = 'absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-cyan-400 rounded-bl-xl pointer-events-none z-30';
  const cornerBR = document.createElement('div');
  cornerBR.className = 'absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-cyan-400 rounded-br-xl pointer-events-none z-30';

  frameWrapper.appendChild(cornerTL);
  frameWrapper.appendChild(cornerTR);
  frameWrapper.appendChild(cornerBL);
  frameWrapper.appendChild(cornerBR);

  // Inner Image Container with Curved Corners
  const container = document.createElement('div');
  container.className = 'relative w-full aspect-square rounded-[2rem] overflow-hidden bg-neutral-950 shadow-inner border border-white/10';

  // Base Image B (Unmasked) - Positioned underneath
  const imgB = document.createElement('img');
  imgB.src = '/assets/hero-unmasked.jpg';
  imgB.alt = 'WOVO Architecture Unmasked';
  imgB.className = 'absolute inset-0 w-full h-full object-cover object-center pointer-events-none';

  // Canvas Overlay for Hexagonal Mask Reveal
  const canvas = document.createElement('canvas');
  canvas.className = 'absolute inset-0 w-full h-full touch-none cursor-crosshair z-10';

  // Tech Badge Overlay
  const hintPill = document.createElement('div');
  hintPill.className = 'absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-cyan-500/40 text-[11px] text-neutral-200 font-mono flex items-center gap-2 shadow-2xl';
  hintPill.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
    <span id="hero-hint-text">${store.t('hero_reveal_hint')}</span>
  `;

  container.appendChild(imgB);
  container.appendChild(canvas);
  container.appendChild(hintPill);
  frameWrapper.appendChild(container);

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
  let maxRadius = 110;
  let closeTimeout = null;
  let animFrameId = null;
  let isClosing = false;

  const HEX_RADIUS = 22;
  const HEX_WIDTH = Math.sqrt(3) * HEX_RADIUS;
  const HEX_HEIGHT = 2 * HEX_RADIUS * 0.75;

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

  function drawHexagonPath(context, x, y, radius) {
    context.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const hx = x + radius * Math.cos(angle);
      const hy = y + radius * Math.sin(angle);
      if (i === 0) context.moveTo(hx, hy);
      else context.lineTo(hx, hy);
    }
    context.closePath();
  }

  function draw() {
    if (!width || !height) return;

    ctx.clearRect(0, 0, width, height);
    ctx.save();

    // 1. Draw Image A (Masked Portrait)
    if (imgA.complete && imgA.naturalWidth !== 0) {
      ctx.drawImage(imgA, 0, 0, width, height);
    }

    // 2. Erase / Reveal using Hexagonal Honeycomb Tiles
    if (currentRadius > 2) {
      const activeHexagons = [];

      // Loop through hexagonal grid
      const cols = Math.ceil(width / HEX_WIDTH) + 2;
      const rows = Math.ceil(height / HEX_HEIGHT) + 2;

      for (let r = -1; r <= rows; r++) {
        for (let c = -1; c <= cols; c++) {
          const xOffset = (r % 2 !== 0) ? HEX_WIDTH / 2 : 0;
          const hx = c * HEX_WIDTH + xOffset;
          const hy = r * HEX_HEIGHT;

          const dx = currentX - hx;
          const dy = currentY - hy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < currentRadius + HEX_RADIUS) {
            const ratio = Math.max(0, 1 - dist / (currentRadius + HEX_RADIUS));
            activeHexagons.push({ hx, hy, ratio, dist });
          }
        }
      }

      // Erase revealed hexagons from Image A
      ctx.globalCompositeOperation = 'destination-out';
      activeHexagons.forEach(hex => {
        const hexSize = HEX_RADIUS * (0.85 + hex.ratio * 0.25);
        ctx.fillStyle = `rgba(0, 0, 0, ${Math.min(1, hex.ratio * 1.5)})`;
        drawHexagonPath(ctx, hex.hx, hex.hy, hexSize);
        ctx.fill();
      });

      // Draw futuristic cyan hexagonal wireframes around revealed tiles
      ctx.globalCompositeOperation = 'source-over';
      activeHexagons.forEach(hex => {
        if (hex.ratio > 0.15) {
          ctx.strokeStyle = `rgba(34, 211, 238, ${Math.min(0.85, hex.ratio * 0.9)})`;
          ctx.lineWidth = 1.2;
          drawHexagonPath(ctx, hex.hx, hex.hy, HEX_RADIUS * 0.95);
          ctx.stroke();
        }
      });
    }

    ctx.restore();
  }

  function animateLoop() {
    currentX += (targetX - currentX) * 0.22;
    currentY += (targetY - currentY) * 0.22;

    if (isInteracting && !isClosing) {
      currentRadius += (maxRadius - currentRadius) * 0.16;
    } else if (isClosing) {
      currentRadius += (0 - currentRadius) * 0.08;
      if (currentRadius < 1) {
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
    }, 1100);
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
    }, 800);
  });

  // Mobile Touch Events
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
    }, 800);
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

  return frameWrapper;
}
