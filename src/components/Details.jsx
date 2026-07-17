import { events, colours, couple } from "../config";
import Reveal from "./Reveal";
import { Church, Glass, Pin, Flourish } from "./Icons";

const iconFor = { church: Church, glass: Glass };

export default function Details() {
  return (
    <section className="details" id="details">
      <Reveal className="details-head">
        <p className="section-eyebrow">The celebration</p>
        <h2 className="script-title">Where &amp; when</h2>
        <p className="details-date">{couple.dateLong}</p>
        <Flourish className="ink-flourish" />
      </Reveal>

      <div className="event-grid">
        {events.map((e, idx) => {
          const Icon = iconFor[e.icon] || Church;
          return (
            <Reveal className="event-card" key={e.name} delay={idx * 120}>
              <div className="event-icon"><Icon /></div>
              <h3 className="event-name">{e.name}</h3>
              <p className="event-time">{e.time}</p>
              <p className="event-venue">{e.venue}</p>
              <p className="event-address">{e.address}</p>
              <a className="ghost-btn" href={e.map} target="_blank" rel="noreferrer">
                <Pin className="btn-ic" /> View map
              </a>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="colours">
        <p className="colours-label">{colours.label}</p>
        <div className="swatches">
          {colours.swatches.map((s) => (
            <div className="swatch" key={s.name}>
              <span className="swatch-dot" style={{ background: s.hex }} />
              <span className="swatch-name">{s.name}</span>
            </div>
          ))}
        </div>
        <p className="colours-note">{colours.note}</p>
      </Reveal>
    </section>
  );
}
