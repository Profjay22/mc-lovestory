import { couple, credits } from "../config";
import { Monogram, Flourish } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <Monogram b={couple.initials.bride} g={couple.initials.groom} className="footer-mono" />
      <h3 className="footer-names">
        {couple.bride.short} &amp; {couple.groom.short}
      </h3>
      <Flourish className="footer-flourish" />
      <p className="footer-date">{couple.dateLong} · Ibadan</p>
      <p className="footer-hashtag">{couple.hashtag}</p>
      <p className="footer-strict">Strictly by invitation</p>
      <p className="footer-credit">
        Photography by {credits.photographer} · Made with love 🤍
      </p>
    </footer>
  );
}
