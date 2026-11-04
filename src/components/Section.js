import useInView from "./useInView.js";

/* Shared layout for every block: a section background, the animated girl
   on one side, and the content on the other. */
export default function Section({
  id,
  name, // used for the css class + image file names
  side = "left", // which side the girl stands on
  note, // optional handwritten speech note
  noteClass = "",
  children,
}) {
  const [ref, seen] = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={`block block--${name} girl-${side} ${seen ? "is-visible" : ""}`}
    >
      <div className="stars" aria-hidden="true" />
      <img
        className="girl"
        src={`/images/girl-${name}.png`}
        alt="Prithika presenting"
        loading="lazy"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
      {note && <span className={`note ${noteClass}`}>{note}</span>}
      <div className="content">{children}</div>
    </section>
  );
}
