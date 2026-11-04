import Section from "./Section.js";
import { skillGroups, softSkills } from "./Data.js";

export default function Skills() {
  let n = 0;
  return (
    <Section id="skills" name="skills" side="left" note="Technologies I Use" noteClass="note--skills">
      <div className="skills-text">
        <h2 className="reveal">My Skills</h2>
        <p className="lead reveal" style={{ "--d": "0.1s" }}>
          I work with modern technologies to build fast, responsive and
          scalable web applications.
        </p>

        <div className="skill-groups">
        {skillGroups.map((g) => (
          <div className="skill-group" key={g.title}>
            <h4 className="reveal">{g.title}</h4>
            <div className="skill-grid">
              {g.items.map((s) => (
                <div
                  className="skill-card reveal"
                  key={s.name}
                  style={{ "--d": `${0.15 + 0.07 * n++}s` }}
                >
                  <span className="skill-icon">{s.icon}</span>
                  <small>{s.name}</small>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>

        <div className="skill-group">
          <h4 className="reveal">Soft Skills</h4>
          <div className="chip-row">
            {softSkills.map((s, i) => (
              <span
                className="chip reveal"
                key={s}
                style={{ "--d": `${0.2 + i * 0.06}s` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
