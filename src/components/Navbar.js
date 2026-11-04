import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks, profile } from "./Data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = navLinks.map((l) => l.toLowerCase());
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <span className="logo-badge">{profile.firstName[0]}</span>
        <span>
          {profile.firstName} {profile.lastName}
        </span>
      </a>

      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        {navLinks.map((l) => {
          const id = l.toLowerCase();
          return (
            <a
              key={l}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
