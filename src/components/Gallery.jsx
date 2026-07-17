import { useEffect, useState } from "react";
import { gallery } from "../config";
import Reveal from "./Reveal";
import { ArrowLeft, ArrowRight, Flourish } from "./Icons";

export default function Gallery() {
  const [open, setOpen] = useState(null); // index or null
  const n = gallery.length;

  useEffect(() => {
    if (open === null) return;
    function key(e) {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o + 1) % n);
      if (e.key === "ArrowLeft") setOpen((o) => (o - 1 + n) % n);
    }
    window.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", key);
      document.body.style.overflow = "";
    };
  }, [open, n]);

  return (
    <section className="gallery" id="gallery">
      <Reveal className="gallery-head">
        <p className="section-eyebrow">Moments</p>
        <h2 className="script-title">Us, lately</h2>
        <Flourish className="ink-flourish" />
      </Reveal>

      <div className="masonry">
        {gallery.map((src, i) => (
          <Reveal className="masonry-item" key={src} delay={(i % 3) * 80} as="button" onClick={() => setOpen(i)}>
            <img src={src} alt={`Mojolaoluwa and Chinedu ${i + 1}`} loading="lazy" />
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <button className="lb-close" aria-label="Close">×</button>
          <button
            className="lb-nav lb-prev"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); setOpen((o) => (o - 1 + n) % n); }}
          >
            <ArrowLeft />
          </button>
          <img className="lb-img" src={gallery[open]} alt="" onClick={(e) => e.stopPropagation()} />
          <button
            className="lb-nav lb-next"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); setOpen((o) => (o + 1) % n); }}
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </section>
  );
}
