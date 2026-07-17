import { useReveal } from "../useReveal";

// Wrap anything to fade/rise it into view on scroll.
export default function Reveal({ as = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, visible] = useReveal();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
