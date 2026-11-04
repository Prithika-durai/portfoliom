import Section from "./Section.js";
import { education } from "./Data.js";

export default function Education() {
  return (
    <Section id="education" name="education" side="right" note="Education Builds Dreams" noteClass="note--education">
      <div className="trio-text">
        <h2 className="reveal">My Education</h2>
        <p className="lead reveal" style={{ "--d": "0.1s" }}>
          My academic journey helped me build a strong foundation in
          technology and problem-solving.
        </p>
        <ul className="timeline">
          {education.map((e, i) => (
            <li className="reveal" key={e.title} style={{ "--d": `${0.2 + i * 0.12}s` }}>
              <span className="tl-icon">{e.icon}</span>
              <div>
                <b>{e.title}</b>
                <em>{e.sub}</em>
                <p>{e.meta}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
