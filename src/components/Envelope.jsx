import { useState } from "react";
import { couple } from "../config";
import { Flourish } from "./Icons";

// Full-screen intro. Tapping the wax seal "opens" the invitation,
// fades the overlay away, and signals the app to start the music.
export default function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);

  function open() {
    if (opening) return;
    setOpening(true);
    onOpen?.();
    // Remove from the DOM after the animation completes.
    setTimeout(() => setGone(true), 1500);
  }

  if (gone) return null;

  return (
    <div className={`envelope-overlay ${opening ? "is-opening" : ""}`} role="dialog" aria-label="Open the invitation">
      <div className="envelope-scene">
        <div className="env-flap-back" />
        <div className="env-body">
          <div className="env-card">
            <p className="env-eyebrow">Together with their families</p>
            <Flourish className="env-flourish" />
            <h1 className="env-names">
              {couple.bride.short}
              <span className="env-amp">&amp;</span>
              {couple.groom.short}
            </h1>
            <p className="env-invite">request the pleasure of your company</p>
            <p className="env-date">{couple.dateShort}</p>
          </div>
        </div>

        <div className="env-flap-front" />
        <div className="env-flap-left" />
        <div className="env-flap-right" />

        <button className="wax-seal" onClick={open} aria-label="Tap to open the invitation">
          <span className="wax-mono">
            {couple.initials.bride}<span className="wax-amp">&amp;</span>{couple.initials.groom}
          </span>
        </button>
      </div>

      <p className="env-hint">{opening ? "Opening…" : "tap the seal to open"}</p>
    </div>
  );
}
