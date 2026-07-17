// Small line-art icons, drawn to match the gold/ink palette (currentColor).

export function Monogram({ b = "M", g = "C", className = "" }) {
  return (
    <span className={`monogram ${className}`} aria-label={`${b} and ${g}`}>
      <span className="mono-letter">{b}</span>
      <span className="mono-amp">&amp;</span>
      <span className="mono-letter">{g}</span>
    </span>
  );
}

export function Flourish({ className = "" }) {
  return (
    <svg className={`flourish ${className}`} viewBox="0 0 220 24" fill="none" aria-hidden="true">
      <path d="M2 12c40 0 60-8 88-8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M218 12c-40 0-60-8-88-8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M96 12c4-5 10-5 14 0-4 5-10 5-14 0z" stroke="currentColor" strokeWidth="1" />
      <circle cx="110" cy="12" r="2.4" fill="currentColor" />
      <path d="M124 12c-4-5-10-5-14 0" stroke="currentColor" strokeWidth="1" />
      <path d="M2 12c40 0 60 8 88 8M218 12c-40 0-60 8-88 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function Church({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 3v8M20 6h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M24 11l10 8v24H14V19l10-8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M14 21L5 27v16h9M34 21l9 6v16h-9" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M24 26a3 3 0 013 3v14h-6V29a3 3 0 013-3z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="24" cy="19" r="2.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Glass({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M17 6h14l-1.5 12a5.5 5.5 0 01-11 0L17 6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M31 6h14l-1.5 12a5.5 5.5 0 01-11 0" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity="0.55" />
      <path d="M24 29v9M20 42h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M18 11h11" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
    </svg>
  );
}

export function Heart({ className = "", fill = "none" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={fill} aria-hidden="true">
      <path
        d="M12 20s-7-4.35-9.33-8.5C1.1 8.6 2.2 5.5 5.2 5.02 7.2 4.7 9 5.9 12 8.5c3-2.6 4.8-3.8 6.8-3.48 3 .48 4.1 3.58 2.53 6.48C19 15.65 12 20 12 20z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeft({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function ArrowRight({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pin({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function SoundOn({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
export function SoundOff({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M17 9l5 5M22 9l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
