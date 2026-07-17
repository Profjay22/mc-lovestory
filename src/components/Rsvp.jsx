import { useState } from "react";
import { rsvp } from "../config";
import Reveal from "./Reveal";
import { Flourish } from "./Icons";

export default function Rsvp() {
  const [form, setForm] = useState({ name: "", attending: "yes", guests: "1", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  function submit(e) {
    e.preventDefault();
    const a = form.attending === "yes" ? "will joyfully attend" : "sadly cannot attend";
    const lines = [
      `Hello! This is my RSVP for Mojolaoluwa & Chinedu's wedding.`,
      `Name: ${form.name || "—"}`,
      `I ${a}.`,
      form.attending === "yes" ? `Number of guests: ${form.guests}` : null,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${rsvp.whatsapp}?text=${text}`, "_blank");
  }

  return (
    <section className="rsvp" id="rsvp">
      <Reveal className="rsvp-card">
        <p className="section-eyebrow">Join us</p>
        <h2 className="script-title">{rsvp.heading}</h2>
        <Flourish className="ink-flourish" />
        <p className="rsvp-note">{rsvp.note}</p>

        <form className="rsvp-form" onSubmit={submit}>
          <label className="field">
            <span>Full name</span>
            <input type="text" value={form.name} onChange={set("name")} placeholder="Your name" required />
          </label>

          <div className="field">
            <span>Will you be attending?</span>
            <div className="choice-row">
              <button
                type="button"
                className={`choice ${form.attending === "yes" ? "on" : ""}`}
                onClick={() => setForm({ ...form, attending: "yes" })}
              >
                Joyfully accept
              </button>
              <button
                type="button"
                className={`choice ${form.attending === "no" ? "on" : ""}`}
                onClick={() => setForm({ ...form, attending: "no" })}
              >
                Regretfully decline
              </button>
            </div>
          </div>

          {form.attending === "yes" && (
            <label className="field">
              <span>Number of guests</span>
              <select value={form.guests} onChange={set("guests")}>
                {[1, 2, 3, 4, 5].map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </label>
          )}

          <label className="field">
            <span>A note for us (optional)</span>
            <textarea value={form.message} onChange={set("message")} rows={3} placeholder="Say something sweet…" />
          </label>

          <button className="solid-btn wide" type="submit">Send RSVP via WhatsApp</button>
        </form>

        <div className="rsvp-contacts">
          <p>Any questions? Reach our coordinators:</p>
          <div className="contact-row">
            {rsvp.contacts.map((c) => (
              <a className="contact-chip" href={`tel:${c.tel}`} key={c.name}>
                <strong>{c.name}</strong>
                <span>{c.phone}</span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
