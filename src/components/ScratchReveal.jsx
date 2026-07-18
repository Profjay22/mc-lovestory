import { useEffect, useRef, useState } from "react";
import { couple } from "../config";
import { fireConfetti } from "../confetti";
import Reveal from "./Reveal";
import { Flourish } from "./Icons";

// A foil "scratch-to-reveal" card, like the one in the reel.
// The date sits underneath; a champagne-gold coating on a <canvas> is
// erased as the guest drags across it. Past ~55% cleared, it fades away,
// a confetti burst fires, and the countdown below is unlocked.
export default function ScratchReveal({ onReveal }) {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const drawing = useRef(false);
  const lastPt = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [started, setStarted] = useState(false);

  // Paint the coating onto the canvas (also on resize).
  function paintCoating() {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const rect = wrap.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const g = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    g.addColorStop(0, "#e6d3a9");
    g.addColorStop(0.45, "#cbaa6a");
    g.addColorStop(0.55, "#d9c08d");
    g.addColorStop(1, "#b18e5a");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // subtle shimmer streaks
    ctx.globalAlpha = 0.18;
    ctx.strokeStyle = "#fff7e6";
    ctx.lineWidth = 2;
    for (let i = -rect.height; i < rect.width; i += 26) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + rect.height, rect.height);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // prompt text
    ctx.fillStyle = "rgba(90,60,40,0.85)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "600 13px Montserrat, sans-serif";
    ctx.fillText("✨  S C R A T C H   T O   R E V E A L  ✨", rect.width / 2, rect.height / 2 - 12);
    ctx.font = "italic 22px 'Cormorant Garamond', serif";
    ctx.fillText("our special day", rect.width / 2, rect.height / 2 + 16);
  }

  useEffect(() => {
    // Respect reduced motion: just show the date.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }
    paintCoating();
    const onResize = () => { if (!revealed) paintCoating(); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When the card reveals: unlock the countdown, celebrate, and glide down.
  useEffect(() => {
    if (!revealed) return;
    onReveal?.();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const box = wrapRef.current?.getBoundingClientRect();
    fireConfetti(box ? { x: box.left + box.width / 2, y: box.top + box.height / 2 } : undefined);
    const t = setTimeout(() => {
      document.querySelector("#countdown")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revealed]);

  function pointFromEvent(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    const src = e.touches ? e.touches[0] : e;
    return { x: src.clientX - rect.left, y: src.clientY - rect.top };
  }

  function scratchAt(p) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.globalCompositeOperation = "destination-out";
    const r = 26;
    // draw a line from the last point so fast drags stay continuous
    if (lastPt.current) {
      ctx.lineWidth = r * 2;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(lastPt.current.x, lastPt.current.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    lastPt.current = p;
  }

  function clearedPercent() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;
    const step = 40; // sample sparsely for speed
    const data = ctx.getImageData(0, 0, width, height).data;
    let clear = 0, total = 0;
    for (let i = 3; i < data.length; i += 4 * step) {
      total++;
      if (data[i] === 0) clear++;
    }
    return total ? clear / total : 0;
  }

  function start(e) {
    if (revealed) return;
    drawing.current = true;
    setStarted(true);
    lastPt.current = null;
    scratchAt(pointFromEvent(e));
  }
  function move(e) {
    if (!drawing.current || revealed) return;
    e.preventDefault();
    scratchAt(pointFromEvent(e));
  }
  function end() {
    if (!drawing.current) return;
    drawing.current = false;
    lastPt.current = null;
    if (clearedPercent() > 0.55) setRevealed(true);
  }

  return (
    <section className="scratch" aria-label="Scratch to reveal the wedding date">
      <div className="scratch-bg" />
      <div className="scratch-overlay" />

      <div className="scratch-content">
        <Reveal className="scratch-head">
          <p className="section-eyebrow light">A little surprise</p>
          <h2 className="script-title light">Scratch to reveal</h2>
          <Flourish className="ink-flourish light" />
        </Reveal>

        <Reveal className={`scratch-card ${revealed ? "revealed" : ""}`}>
          <span className="scratch-frame" aria-hidden="true" />
          <div className="scratch-under" ref={wrapRef}>
            <span className="scratch-mono">M &amp; C</span>
            <p className="scratch-label">We're saying "I do" on</p>
            <p className="scratch-date">{couple.dateShort}</p>
            <p className="scratch-day">{couple.dateLong.split(",")[0]}</p>
            <p className="scratch-city">Ibadan, Nigeria</p>
          </div>
          <canvas
            ref={canvasRef}
            className="scratch-canvas"
            onMouseDown={start}
            onMouseMove={move}
            onMouseUp={end}
            onMouseLeave={end}
            onTouchStart={start}
            onTouchMove={move}
            onTouchEnd={end}
          />
        </Reveal>

        {!revealed && (
          <p className={`scratch-hint ${started ? "faded" : ""}`}>
            {started ? "keep going…" : "drag across the gold to reveal the date"}
          </p>
        )}
      </div>
    </section>
  );
}
