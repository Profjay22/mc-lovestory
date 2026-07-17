import { useState } from "react";
import { faqs } from "../config";
import Reveal from "./Reveal";
import { Flourish } from "./Icons";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <Reveal className="faq-head">
        <p className="section-eyebrow">Good to know</p>
        <h2 className="script-title">Questions &amp; answers</h2>
        <Flourish className="ink-flourish" />
      </Reveal>

      <div className="faq-list">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal className="faq-item" key={f.q} delay={(i % 4) * 60}>
              <button
                className={`faq-q ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span>{f.q}</span>
                <span className="faq-plus" aria-hidden="true">{isOpen ? "–" : "+"}</span>
              </button>
              <div className={`faq-a ${isOpen ? "open" : ""}`}>
                <p>{f.a}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
