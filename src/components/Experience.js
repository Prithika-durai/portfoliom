import Section from "./Section.js";
import { experience } from "./Data.js";

export default function Experience() {
  return (
    <Section id="experience" name="experience" side="left" note="My Journey" noteClass="note--experience">
      <div className="trio-text">
        <h2 className="reveal">My Experience</h2>
        <p className="lead reveal" style={{ "--d": "0.1s" }}>
          Hands-on learning and project work that shaped my full stack skills.
        </p>
        <ul className="timeline">
          {experience.map((e, i) => (
            <li className="reveal" key={e.title} style={{ "--d": `${0.2 + i * 0.15}s` }}>
              <span className="tl-icon">{e.icon}</span>
              <div>
                <strong>{e.when}</strong>
                <b>{e.title}</b>
                <p>{e.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
