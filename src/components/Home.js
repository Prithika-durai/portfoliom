import { FaArrowRight } from "react-icons/fa";
import Section from "./Section.js";
import { profile } from "./Data.js";

export default function Home() {
  return (
    <Section id="home" name="hero" side="left" note="Let’s Explore Together" noteClass="note--hero">
      <div className="hero-text">
        <h3 className="reveal" style={{ "--d": "0.1s" }}>Hi, I’m</h3>
        <h1 className="reveal" style={{ "--d": "0.25s" }}>
          {profile.firstName} <span className="accent">{profile.lastName}</span>
        </h1>
        <p className="roles reveal" style={{ "--d": "0.4s" }}>
          {profile.roles.join("  |  ")}
        </p>
        <p className="lead reveal" style={{ "--d": "0.55s" }}>{profile.intro}</p>
        <div className="btn-row reveal" style={{ "--d": "0.7s" }}>
          <a href="#projects" className="btn btn-outline">
            Explore My Work <FaArrowRight />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Contact Me
          </a>
        </div>
      </div>
    </Section>
  );
}
