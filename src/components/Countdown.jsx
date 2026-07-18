import { useEffect, useState } from "react";
import { couple } from "../config";
import Reveal from "./Reveal";
import { Flourish } from "./Icons";

function diff(target) {
  const ms = Math.max(0, target - Date.now());
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    done: ms === 0,
  };
}

export default function Countdown({ revealed }) {
  const target = new Date(couple.weddingISO).getTime();
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    if (!revealed) return;
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target, revealed]);

  // Stays hidden until the guest scratches the card to reveal the date.
  if (!revealed) return null;

  const units = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <section className="countdown count-enter" id="countdown" aria-label="Countdown to the wedding">
      <Reveal className="count-wrap">
        <p className="section-eyebrow">Counting down to forever</p>
        <Flourish className="ink-flourish" />
        {t.done ? (
          <h2 className="count-married">Today we say “I do”. 🤍</h2>
        ) : (
          <div className="count-grid">
            {units.map((u) => (
              <div className="count-cell" key={u.label}>
                <span className="count-num">{String(u.value).padStart(2, "0")}</span>
                <span className="count-lbl">{u.label}</span>
              </div>
            ))}
          </div>
        )}
        <p className="count-date">{couple.dateLong}</p>
      </Reveal>
    </section>
  );
}
