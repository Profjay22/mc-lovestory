import { families } from "../config";
import Reveal from "./Reveal";
import { Flourish, Heart } from "./Icons";

export default function Families() {
  return (
    <section className="families" id="families">
      <Reveal className="fam-head">
        <p className="section-eyebrow">Two families, one promise</p>
        <h2 className="script-title">Uniting our families</h2>
        <p className="fam-intro">{families.intro}</p>
      </Reveal>

      <div className="fam-grid">
        <Reveal className="fam-col">
          <h3 className="fam-title">{families.bride.title}</h3>
          {families.bride.lines.map((l) => (
            <p className="fam-line" key={l}>{l}</p>
          ))}
        </Reveal>

        <Reveal className="fam-amp" delay={120}>
          <Heart className="fam-heart" />
          <Flourish className="ink-flourish tiny" />
        </Reveal>

        <Reveal className="fam-col" delay={200}>
          <h3 className="fam-title">{families.groom.title}</h3>
          {families.groom.lines.map((l) => (
            <p className="fam-line" key={l}>{l}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
