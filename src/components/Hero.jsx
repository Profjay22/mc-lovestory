import { couple } from "../config";
import { Flourish } from "./Icons";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-photo" />
      <div className="hero-veil" />
      <div className="hero-inner">
        <p className="hero-eyebrow">We're getting married</p>
        <Flourish className="hero-flourish" />
        <h1 className="hero-names">
          <span>{couple.bride.short}</span>
          <span className="hero-amp">&amp;</span>
          <span>{couple.groom.short}</span>
        </h1>
        <p className="hero-date">Save the date</p>
        <p className="hero-place">Ibadan, Nigeria</p>
        <p className="hero-hashtag">{couple.hashtag}</p>
      </div>
      <a href="#story" className="scroll-cue" aria-label="Scroll down">
        <span />
      </a>
    </header>
  );
}
