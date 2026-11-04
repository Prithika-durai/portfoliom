import { FaHeart, FaArrowUp } from "react-icons/fa";
import useInView from "./useInView.js";

export default function Footer() {
  const [ref, seen] = useInView(0.4);
  return (
    <footer ref={ref} className={`footer ${seen ? "is-visible" : ""}`}>
      <p className="thanks reveal">
        Thank you for exploring my portfolio! <FaHeart className="heart" />
      </p>
      <a href="#home" className="note note--footer">
        Keep Exploring… <FaArrowUp />
      </a>
    </footer>
  );
}
