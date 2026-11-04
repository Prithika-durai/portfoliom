import Section from "./Section.js";
import { profile, traits } from "./Data.js";

export default function About() {
  return (
    <Section id="about" name="about" side="left"  noteClass="note--about">
      <div className="about-text">
        <h2 className="reveal">About Me</h2>
        {profile.about.map((p, i) => (
          <p key={i} className="reveal" style={{ "--d": `${0.15 + i * 0.15}s` }}>
            {p}
          </p>
        ))}

        <div className="stat-row reveal" style={{ "--d": "0.45s" }}>
          {profile.stats.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="trait-row">
          {traits.map((t, i) => (
            <div
              className="trait-card reveal"
              key={t.label}
              style={{ "--d": `${0.55 + i * 0.1}s` }}
            >
              <span className="trait-icon">{t.icon}</span>
              <small>{t.label}</small>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
