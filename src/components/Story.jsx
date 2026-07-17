import { useState } from "react";
import { story } from "../config";
import Reveal from "./Reveal";
import { ArrowLeft, ArrowRight, Flourish } from "./Icons";

export default function Story() {
  const [i, setI] = useState(0);
  const n = story.chapters.length;
  const go = (d) => setI((prev) => (prev + d + n) % n);
  const c = story.chapters[i];

  return (
    <section className="story" id="story">
      <Reveal className="story-head">
        <p className="section-eyebrow">{story.heading}</p>
        <h2 className="script-title">{story.subheading}</h2>
        <Flourish className="ink-flourish" />
      </Reveal>

      <Reveal className="story-card" key={i}>
        <div className="story-photo-wrap">
          <img className="story-photo" src={c.photo} alt={c.tag} loading="lazy" />
          <span className="story-stamp">M&amp;C</span>
        </div>
        <div className="story-text">
          <p className="story-tag">{c.tag}</p>
          <p className="story-body">{c.body}</p>
          <p className="story-count">{i + 1} / {n}</p>
        </div>
      </Reveal>

      <div className="story-controls">
        <button className="round-btn" onClick={() => go(-1)} aria-label="Previous chapter">
          <ArrowLeft />
        </button>
        <div className="story-dots">
          {story.chapters.map((_, k) => (
            <button
              key={k}
              className={`dot ${k === i ? "on" : ""}`}
              onClick={() => setI(k)}
              aria-label={`Go to chapter ${k + 1}`}
            />
          ))}
        </div>
        <button className="round-btn" onClick={() => go(1)} aria-label="Next chapter">
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
