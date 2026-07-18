// Self-contained canvas confetti burst in the wedding palette.
// Creates its own full-screen canvas, animates, and cleans itself up.
export function fireConfetti(origin) {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const canvas = document.createElement("canvas");
  canvas.style.cssText =
    "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:300;";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  let W, H;
  const resize = () => {
    W = canvas.width = window.innerWidth * dpr;
    H = canvas.height = window.innerHeight * dpr;
  };
  resize();
  window.addEventListener("resize", resize);

  const colors = ["#c98b94", "#9e6470", "#b18e5a", "#e6d3a9", "#d9c08d", "#fffaf7", "#6e4650"];
  const cx = (origin?.x ?? window.innerWidth * 0.5) * dpr;
  const cy = (origin?.y ?? window.innerHeight * 0.42) * dpr;

  const N = 170;
  const parts = [];
  for (let i = 0; i < N; i++) {
    const angle = Math.PI * 2 * Math.random();
    const speed = (6 + Math.random() * 11) * dpr;
    parts.push({
      x: cx + (Math.random() - 0.5) * 60 * dpr,
      y: cy + (Math.random() - 0.5) * 24 * dpr,
      vx: Math.cos(angle) * speed * (0.5 + Math.random()),
      vy: Math.sin(angle) * speed - (5 + Math.random() * 7) * dpr, // bias upward
      g: (0.2 + Math.random() * 0.14) * dpr,
      w: (6 + Math.random() * 7) * dpr,
      h: (9 + Math.random() * 11) * dpr,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.32,
      flip: Math.random() * Math.PI,
      vflip: 0.1 + Math.random() * 0.16,
      color: colors[(Math.random() * colors.length) | 0],
      life: 0,
      max: 130 + Math.random() * 70,
    });
  }

  let raf,
    frame = 0,
    finished = false;

  const cleanup = () => {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(raf);
    canvas.remove();
    window.removeEventListener("resize", resize);
  };
  // Safety net: always tear down, even if rAF is throttled in a hidden tab.
  const safety = setTimeout(cleanup, 9000);

  const tick = () => {
    frame++;
    ctx.clearRect(0, 0, W, H);
    let alive = false;
    for (const p of parts) {
      p.life++;
      if (p.life > p.max) continue;
      p.vy += p.g;
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      p.flip += p.vflip;
      if (p.y < H + 24 * dpr) alive = true;

      const alpha = Math.max(0, 1 - p.life / p.max);
      const squash = Math.abs(Math.cos(p.flip)); // fake 3D spin
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w * squash + 1, p.h);
      ctx.restore();
    }
    if (alive && frame < 420) {
      raf = requestAnimationFrame(tick);
    } else {
      clearTimeout(safety);
      cleanup();
    }
  };
  raf = requestAnimationFrame(tick);
}
