import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Section from "./Section.js";
import { projects } from "./Data.js";

/* Screenshot with an automatic placeholder when the image file is missing */
function Shot({ src, title }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="shot shot--placeholder">
        <div className="shot-bar"><i /><i /><i /></div>
        <FaCode />
        <span>{title}</span>
      </div>
    );
  }
  return (
    <div className="shot">
      <img src={src} alt={`${title} screenshot`} loading="lazy" onError={() => setFailed(true)} />
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" name="projects" side="right" note="Real Projects, Real Impact" noteClass="note--projects">
      <div className="projects-text">
        <h2 className="reveal">My Projects</h2>
        <p className="lead reveal" style={{ "--d": "0.1s" }}>
          Here are some of the projects I’ve built. Each one reflects my
          passion for clean code, great design and real-world solutions.
        </p>

        <div className="album">
          {projects.map((p, i) => (
            <article
              className="album-card reveal"
              key={p.title}
              style={{ "--d": `${0.15 + i * 0.1}s` }}
            >
              <span className="album-no">{String(i + 1).padStart(2, "0")}</span>
              <Shot src={p.shot} title={p.title} />
              <div className="album-body">
                <h4>{p.title}</h4>
                <div className="tags">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <p>{p.desc}</p>
                <div className="album-links">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="demo">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
