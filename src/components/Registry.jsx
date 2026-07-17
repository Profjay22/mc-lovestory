import { useState } from "react";
import { registry } from "../config";
import Reveal from "./Reveal";
import { Flourish, Heart } from "./Icons";

export default function Registry() {
  const [copied, setCopied] = useState(false);
  const m = registry.monetary;

  function copyAcct() {
    navigator.clipboard?.writeText(m.account).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <section className="registry" id="registry">
      <Reveal className="registry-head">
        <p className="section-eyebrow">With gratitude</p>
        <h2 className="script-title">{registry.heading}</h2>
        <p className="registry-note">{registry.note}</p>
        <Flourish className="ink-flourish" />
      </Reveal>

      <div className="registry-grid">
        <Reveal className="registry-card">
          <Heart className="registry-heart" />
          <h3 className="registry-card-title">{m.label}</h3>
          <p className="registry-card-note">{m.detail}</p>
          <div className="bank-row"><span>Bank</span><strong>{m.bank}</strong></div>
          <div className="bank-row"><span>Account</span><strong>{m.account}</strong></div>
          <div className="bank-row"><span>Name</span><strong>{m.name}</strong></div>
          <button className="ghost-btn" onClick={copyAcct}>
            {copied ? "Copied ✓" : "Copy account number"}
          </button>
        </Reveal>

        <Reveal className="registry-card" delay={120}>
          <Heart className="registry-heart" />
          <h3 className="registry-card-title">Amazon registry</h3>
          <p className="registry-card-note">
            Prefer to send a gift? Our Amazon wishlist has a few lovely things.
          </p>
          <a className="solid-btn" href={registry.amazon} target="_blank" rel="noreferrer">
            View our registry
          </a>
        </Reveal>
      </div>
    </section>
  );
}
