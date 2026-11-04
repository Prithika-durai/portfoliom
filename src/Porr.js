import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Experience from "./components/Experience.js";
import Education from "./components/Education.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

export default function Porr() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        {/* Experience, Education and Contact sit side by side on large screens */}
        <div className="trio">
          <Experience />
          <Education />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
