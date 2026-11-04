import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import Section from "./Section.js";
import { profile } from "./Data.js";

export default function Contact() {
  return (
    <Section id="contact" name="contact" side="right" note="Let’s Connect!" noteClass="note--contact">
      <div className="trio-text">
        <h2 className="reveal">Get In Touch</h2>
        <p className="lead reveal" style={{ "--d": "0.1s" }}>
          I’d love to hear from you! Whether you have a project in mind, a
          question, or just want to say hello — feel free to reach out.
        </p>

        <div className="contact-card reveal" style={{ "--d": "0.25s" }}>
          <a className="contact-row" href={`mailto:${profile.email}`}>
            <span><FaEnvelope /></span>
            <div><b>Email</b><small>{profile.email}</small></div>
          </a>
          <a className="contact-row" href={`tel:+91${profile.phone}`}>
            <span><FaPhoneAlt /></span>
            <div><b>Phone</b><small>{profile.phone}</small></div>
          </a>
          <div className="contact-row">
            <span><FaMapMarkerAlt /></span>
            <div><b>Location</b><small>{profile.location}</small></div>
          </div>

          <p className="follow">Follow Me</p>
          <div className="socials">
            <a href={profile.socials.linkedin} aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href={profile.socials.github} aria-label="GitHub"><FaGithub /></a>
            <a href={profile.socials.instagram} aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </Section>
  );
}
