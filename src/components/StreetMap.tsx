import { church } from "@/lib/site";

/**
 * A hand-drawn map of the blocks around the church: South Franklin between
 * Wadsworth and Israel, just south of Main Street (US-35). Drawn rather
 * than embedded so it always renders and never tracks visitors.
 */
export default function StreetMap({ className = "" }: { className?: string }) {
  return (
    <a
      href={church.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden rounded-[1.5rem] bg-[#eef0ea] ring-1 ring-navy/10 ${className}`}
      aria-label={`Open directions to ${church.street}, ${church.city} in Google Maps`}
    >
      <svg viewBox="0 0 600 420" className="block h-auto w-full" role="img" aria-hidden>
        {/* blocks */}
        <g fill="#e2e5dd">
          <rect x="0" y="0" width="600" height="420" fill="#eef0ea" />
          {[
            [20, 20, 200, 70], [270, 20, 150, 70], [470, 20, 120, 70],
            [20, 135, 200, 95], [270, 135, 150, 95], [470, 135, 120, 95],
            [20, 275, 200, 125], [270, 275, 150, 125], [470, 275, 120, 125],
          ].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="6" />
          ))}
        </g>
        {/* park to the east */}
        <rect x="470" y="135" width="120" height="265" rx="10" fill="#d6e4cc" />
        {/* streets */}
        <g stroke="white" strokeLinecap="round">
          <path d="M0 112 H600" strokeWidth="22" stroke="#f6e7bd" />
          <path d="M0 252 H600" strokeWidth="14" />
          <path d="M0 412 H600" strokeWidth="14" />
          <path d="M245 0 V420" strokeWidth="18" />
          <path d="M445 0 V420" strokeWidth="12" />
        </g>
        <g fontFamily="var(--font-figtree), sans-serif" fontWeight="700" fill="#1f2d5c" fillOpacity="0.55" fontSize="13" letterSpacing="1.5">
          <text x="30" y="117">E. MAIN ST · US-35</text>
          <text x="30" y="257">WADSWORTH ST</text>
          <text x="30" y="408">ISRAEL ST</text>
          <text x="250" y="70" transform="rotate(90 250 70)">S. FRANKLIN ST</text>
          <text x="450" y="30" transform="rotate(90 450 30)">VINE ST</text>
        </g>
        {/* the church */}
        <g transform="translate(220 330)">
          <circle r="34" fill="#1f2d5c" opacity="0.12" className="origin-center transition-transform duration-500 group-hover:scale-125" />
          <path d="M0 -26 C-13 -26 -20 -16 -20 -7 C-20 6 0 22 0 22 C0 22 20 6 20 -7 C20 -16 13 -26 0 -26Z" fill="#1f2d5c" />
          <rect x="-6" y="-17" width="12" height="16" fill="#d7e8f5" />
          <path d="M-6 -17 L-9 -15 L-9 1 L-6 -1Z" fill="#f1dfae" />
        </g>
        <g transform="translate(262 316)">
          <rect width="150" height="44" rx="10" fill="white" />
          <text x="14" y="19" fontFamily="var(--font-dmserif), serif" fontSize="16" fill="#1f2d5c">Open Door</text>
          <text x="14" y="35" fontFamily="var(--font-figtree), sans-serif" fontSize="11" fontWeight="600" fill="#1a2038" fillOpacity="0.6">
            215 S. Franklin St.
          </text>
        </g>
        {/* north arrow */}
        <g transform="translate(560 60)" fill="#1f2d5c" fillOpacity="0.6">
          <path d="M0 -18 L7 6 L0 1 L-7 6Z" />
          <text y="22" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="var(--font-figtree), sans-serif">N</text>
        </g>
      </svg>
      <span className="absolute bottom-4 right-4 rounded-full bg-navy px-4 py-2 text-sm font-bold text-white shadow-lg transition group-hover:bg-navy-deep">
        Get directions →
      </span>
    </a>
  );
}
