/**
 * The mark from the church sign, redrawn: a door standing open onto the sky,
 * with footprints walking through it.
 */
export function Mark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="mk-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5d8fc2" />
          <stop offset="0.55" stopColor="#a9cbe8" />
          <stop offset="1" stopColor="#f3f8fc" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="12" fill="#1f2d5c" />
      {/* the doorway, open onto the sky */}
      <rect x="22" y="10" width="26" height="42" fill="url(#mk-sky)" />
      <path d="M27 22c2-3 6-3 8-1 2-2 6-1 6 2 2 0 3 2 2 3H25c-1-2 0-4 2-4z" fill="white" opacity="0.9" />
      {/* the door, swung in on its hinge */}
      <path d="M22 10 L12 15 L12 56 L22 52 Z" fill="#0c1230" />
      <path d="M22 10 L12 15 L12 56 L22 52 Z" fill="none" stroke="#a9cbe8" strokeWidth="0.8" opacity="0.5" />
      <circle cx="14.5" cy="34" r="0.9" fill="#f1dfae" />
      {/* floor and footprints walking in */}
      <path d="M12 56 L22 52 L48 52 L56 56 Z" fill="#131c3d" />
      <g fill="white">
        <ellipse cx="33" cy="55" rx="1.3" ry="0.7" />
        <ellipse cx="37" cy="54" rx="1.1" ry="0.6" />
        <ellipse cx="34" cy="53" rx="0.9" ry="0.45" />
        <ellipse cx="36.5" cy="52.4" rx="0.7" ry="0.35" />
      </g>
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Mark className="h-11 w-11 shrink-0" />
      <span className="leading-none">
        <span className={`display block text-[1.55rem] ${light ? "text-white" : "text-navy"}`}>Open Door</span>
        <span className={`eyebrow mt-1 block !text-[0.62rem] !tracking-[0.24em] ${light ? "text-sky-mid" : "text-navy/60"}`}>
          Church of God · Eaton
        </span>
      </span>
    </span>
  );
}
