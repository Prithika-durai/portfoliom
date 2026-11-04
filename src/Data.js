import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaLightbulb,
  FaPuzzlePiece,
  FaUsers,
  FaCube,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaSchool,
  FaAward,
  FaLaptopCode,
  FaSeedling,
} from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

/* =====================================================================
   ALL YOUR CONTENT LIVES HERE – edit this file, nothing else needed.
   ===================================================================== */

export const profile = {
  firstName: "Prithika",
  lastName: "D",
  roles: ["Aspiring Full Stack Developer", "Problem Solver", "Fast Learner"],
  intro:
    "I build clean, responsive and user-friendly web applications using HTML, CSS, JavaScript, React, Java and Spring Boot. Let me walk you through my portfolio!",
  about: [
    "I'm Prithika D, an aspiring full stack developer from Panruti, Tamil Nadu. I completed my B.E. in Computer Science & Engineering at IFET College of Engineering with an 8.5 CGPA (Distinction), and earned an Honours Diploma in Computer Applications (HDCA) with an “A” grade.",
    "I love turning ideas into interactive, user-friendly websites, and I'm always eager to learn new technologies and grow into a confident full stack developer.",
  ],
  stats: [
    { value: "8.5", label: "CGPA" },
    { value: "6+", label: "Projects" },
    { value: "Full Stack", label: "Trained" },
  ],
  email: "prithika65@gmail.com",
  phone: "9876545654",
  location: "Panruti, Tamil Nadu",
  socials: {
    linkedin: "#", // <- paste your LinkedIn URL
    github: "#", // <- paste your GitHub profile URL
    instagram: "#", // <- paste your Instagram URL
  },
};

export const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];

export const traits = [
  { icon: <FaLightbulb />, label: "Creative Thinker" },
  { icon: <FaPuzzlePiece />, label: "Problem Solver" },
  { icon: <FaUsers />, label: "Team Player" },
  { icon: <FaCube />, label: "Always Learning" },
];

export const skillGroups = [
  {
    title: "Front End",
    items: [
      { name: "HTML", icon: <FaHtml5 color="#ff7a45" /> },
      { name: "CSS", icon: <FaCss3Alt color="#4aa8ff" /> },
      { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
      { name: "React", icon: <FaReact color="#61dafb" /> },
    ],
  },
  {
    title: "Back End",
    items: [
      { name: "Java", icon: <FaJava color="#f89820" /> },
      { name: "Spring Boot", icon: <SiSpringboot color="#6db33f" /> },
    ],
  },
  {
    title: "Server Side",
    items: [{ name: "SQL", icon: <FaDatabase color="#7dd3fc" /> }],
  },
  {
    title: "Tools",
    items: [
      { name: "VS Code", icon: <VscVscode color="#3b9cff" /> },
      { name: "Git", icon: <FaGitAlt color="#f05032" /> },
      { name: "GitHub", icon: <FaGithub color="#e5e7eb" /> },
    ],
  },
];

export const softSkills = [
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Time Management",
  "Adaptability",
  "Quick Learner",
  "Attention to Detail",
  "Logical Thinking",
];

/* Put your screenshots in /public/images/projects/ with the file names below.
   Until then a neat placeholder card is shown automatically. */
export const projects = [
  {
    title: "Password Generator",
    tech: ["REACT", "CSS"],
    desc: "A password generator that creates strong and secure random passwords using different combinations of letters, numbers, and special characters.",
    shot: "/images/projects/paass.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Color Themer",
    tech: ["REACT", "CSS"],
    desc: "A user-friendly application that allows users to switch between different color themes to customize the website's appearance.",
    shot: "/images/projects/themech.png",
    github: "#",
    demo: "#",
  },
  {
    title: "SIMPLE CALCULATOR",
    tech: ["REACT","CSS"],
    desc: "A basic calculator that performs mathematical operations such as addition, subtraction, multiplication, and division with a simple interface.",
    shot: "/images/projects/SIMPLECALCI.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Notes Taker",
    tech: ["REACT","CSS"],
    desc: "A simple notes application that allows users to create, edit, delete, and manage their notes easily. It helps users organize and save important information.",
    shot: "/images/projects/notes.png",
    github: "#",
    demo: "#", 
  },
  {
    title: "Expense Tracker",
    tech: ["REACT","CSS"],
    desc: "Add income and expenses and watch your balance update instantly, built with React state.",
    shot: "/images/projects/expense-tracker.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Quiz Game",
    tech: [ "REACT","CSS"],
    desc: "An interactive multiple-choice quiz with score tracking and instant answer feedback.",
    shot: "/images/projects/quiz-game.png",
    github: "#",
    demo: "#",
  },
];

/* No job history is claimed here – edit with real roles/dates when you have them. */
export const experience = [
  {
    icon: <FaLaptopCode />,
    when: "Full Stack Development Course",
    title: "Hands-on Training",
    desc: "Learned front end (HTML, CSS, JavaScript, React), back end (Java, Spring Boot) and SQL by building real applications.",
  },
  {
    icon: <FaCode />,
    when: "Academic & Personal Projects",
    title: "Project Developer",
    desc: "Designed and built 6 projects, from a Netflix-style login page to React apps like an Expense Tracker and a Quiz Game.",
  },
  {
    icon: <FaSeedling />,
    when: "Currently",
    title: "Open to Fresher / Internship Roles",
    desc: "Looking for an opportunity to start my career as a Full Stack Developer and grow with a great team.",
  },
];

export const education = [
  {
    icon: <FaGraduationCap />,
    title: "B.E. – Computer Science & Engineering",
    sub: "IFET College of Engineering",
    meta: "8.5 CGPA · Distinction",
  },
  {
    icon: <FaAward />,
    title: "HDCA – Honours Diploma in Computer Applications",
    sub: "Completed with “A” Grade",
    meta: "Computer Applications",
  },
  {
    icon: <FaBriefcase />,
    title: "Full Stack Development Course",
    sub: "Front End · Back End · SQL",
    meta: "Gained practical knowledge and skills",
  },
  {
    icon: <FaSchool />,
    title: "Schooling",
    sub: "John Dewey Matric. Hr. Sec. School, Panruti",
    meta: "Completed with good scores",
  },
];
