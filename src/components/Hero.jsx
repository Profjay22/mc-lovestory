import { couple } from "../config";
import { Flourish } from "./Icons";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-photo" />
      <div className="hero-veil" />

      {/* soft drifting petals */}
      <div className="hero-petals" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className={`petal p${i}`} />
        ))}
      </div>

      <div className="hero-frame">
        <span className="corner tl" aria-hidden="true" />
        <span className="corner tr" aria-hidden="true" />
        <span className="corner bl" aria-hidden="true" />
        <span className="corner br" aria-hidden="true" />

        <div className="hero-inner">
          <p className="hero-top">Together with their families</p>
          <p className="hero-eyebrow">We're getting married</p>

          <h1 className="hero-names">
            <span>{couple.bride.short}</span>
            <span className="hero-amp">&amp;</span>
            <span>{couple.groom.short}</span>
          </h1>

          <div className="hero-meta">
            <span className="hero-rule" />
            <span className="hero-save">Save the date</span>
            <span className="hero-rule" />
          </div>

          <Flourish className="hero-flourish" />
          <p className="hero-place">Ibadan, Nigeria</p>
          <p className="hero-hashtag">{couple.hashtag}</p>
        </div>
      </div>

      <a href="#story" className="scroll-cue" aria-label="Scroll down">
        <span />
      </a>
    </header>
  );
}
