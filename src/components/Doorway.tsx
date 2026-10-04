/**
 * The home-page hero: the church's own white double doors (narrow windows,
 * brass lanterns either side) swing open onto the sky from their logo, and
 * footprints walk in. Pure CSS, so it plays without JavaScript; reduced-motion
 * visitors see the doors already open.
 */

function Foot({ x, y, s, flip, delay }: { x: number; y: number; s: number; flip?: boolean; delay: number }) {
  return (
    // The SVG transform sits on the outer group; the CSS animation (which
    // sets `transform` too) runs on the inner one, so they don't clash.
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <g className="step" style={{ animationDelay: `${delay}s`, transformBox: "fill-box", transformOrigin: "center" }}>
        {/* sole + heel */}
        <path d="M0 -10 C4 -10 5 -5 4 0 C3.5 4 2.5 7 0 7 C-2.5 7 -3.5 4 -3.6 0 C-4 -5 -3.5 -10 0 -10Z" />
        <ellipse cx="0.2" cy="11" rx="2.8" ry="3.3" />
      </g>
    </g>
  );
}

function Lantern({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 90" className={className} aria-hidden>
      <defs>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff4cf" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fff4cf" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="46" r="20" fill="url(#glow)" />
      <rect x="18" y="2" width="4" height="12" fill="#8a6422" />
      <path d="M8 18 L32 18 L28 14 L12 14 Z" fill="#b4842f" />
      <path d="M10 18 L30 18 L28 64 L12 64 Z" fill="#fbecc0" stroke="#b4842f" strokeWidth="2.5" />
      <path d="M20 18 L20 64" stroke="#b4842f" strokeWidth="1.5" />
      <path d="M8 64 L32 64 L28 72 L12 72 Z" fill="#b4842f" />
      <circle cx="20" cy="78" r="3" fill="#8a6422" />
    </svg>
  );
}

const steps = [
  { x: 92, y: 238, s: 1.15, flip: false },
  { x: 110, y: 222, s: 1.05, flip: true },
  { x: 96, y: 206, s: 0.95, flip: false },
  { x: 111, y: 192, s: 0.86, flip: true },
  { x: 99, y: 179, s: 0.77, flip: false },
  { x: 110, y: 168, s: 0.68, flip: true },
  { x: 101, y: 158, s: 0.6, flip: false },
  { x: 109, y: 150, s: 0.52, flip: true },
];

export default function Doorway() {
  return (
    <div className="relative mx-auto w-full max-w-[30rem]">
      {/* lanterns */}
      <Lantern className="absolute -left-[13%] top-[26%] w-[11%] drop-shadow" />
      <Lantern className="absolute -right-[13%] top-[26%] w-[11%] drop-shadow" />

      {/* gable + trim, like the porch over their real doors */}
      <div className="relative">
        <svg viewBox="0 0 200 40" className="block w-full" aria-hidden>
          <path d="M-6 40 L100 2 L206 40 Z" fill="#f8f7f2" />
          <path d="M-6 40 L100 2 L206 40" fill="none" stroke="#cfd3cb" strokeWidth="2" />
          <path d="M18 40 L100 11 L182 40 Z" fill="#eef0eb" />
          <path d="M18 40 L100 11 L182 40" fill="none" stroke="#d5d9d1" strokeWidth="1.2" />
        </svg>

        {/* door frame */}
        <div className="relative rounded-b-sm bg-[#f8f7f2] px-[6%] pb-[3%] pt-[4%] shadow-[0_40px_80px_-30px_rgba(12,18,48,0.55)]">
          <div className="relative aspect-[3/4] overflow-hidden bg-navy-ink" style={{ perspective: "1400px" }}>
            {/* what's on the other side: the sky from their logo */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-deep via-sky-mid to-[#f6fafd]" />
            <svg viewBox="0 0 400 300" className="clouds absolute left-0 top-[8%] w-[150%] opacity-90" aria-hidden>
              <g fill="white">
                <path d="M40 120c6-22 34-28 48-14 8-16 36-18 46 2 16-4 28 6 26 20H36c-6 0-2-8 4-8z" opacity="0.95" />
                <path d="M210 70c5-16 26-20 36-10 7-12 28-13 35 2 12-3 21 5 19 15H206c-5 0-1-7 4-7z" opacity="0.8" />
                <path d="M300 150c6-20 30-25 42-12 8-14 32-16 41 2 14-3 25 5 23 18H296c-6 0-2-8 4-8z" opacity="0.9" />
                <path d="M120 200c4-14 22-17 31-9 6-10 23-11 29 1 10-2 18 4 16 12H117c-4 0-1-4 3-4z" opacity="0.7" />
              </g>
            </svg>
            {/* light pouring through */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/80 to-transparent" />
            <div className="absolute left-1/2 top-[38%] h-[70%] w-[90%] -translate-x-1/2 rounded-full bg-[#fff6d8]/50 blur-3xl" />

            {/* footprints walking in */}
            <svg viewBox="0 0 200 266" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMax meet" aria-hidden>
              <g fill="#1f2d5c" opacity="0.55">
                {steps.map((s, i) => (
                  <Foot key={i} {...s} delay={1.9 + i * 0.28} />
                ))}
              </g>
            </svg>

            {/* the two doors */}
            <div className="door-leaf absolute inset-y-0 left-0 w-1/2 border-r border-[#d9dcd4] bg-gradient-to-r from-[#fbfbf8] to-[#eceee8]">
              <DoorPanel side="left" />
            </div>
            <div
              className="door-leaf absolute inset-y-0 right-0 w-1/2 border-l border-[#d9dcd4] bg-gradient-to-l from-[#fbfbf8] to-[#eceee8]"
              style={{ transformOrigin: "right center", animationName: "door-open-r" }}
            >
              <DoorPanel side="right" />
            </div>
          </div>
          {/* threshold, with the light spilling out onto it */}
          <div className="mx-[-4%] mt-[2%] h-2 rounded-sm bg-[#d5d9d1]" />
          <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[80%] -translate-x-1/2 rounded-[50%] bg-[#fff1c4]/70 blur-2xl" />
        </div>
      </div>
      <style>{`@keyframes door-open-r { to { transform: perspective(1400px) rotateY(60deg); } }
      @media (prefers-reduced-motion: reduce) { .door-leaf[style] { transform: perspective(1400px) rotateY(60deg) !important; } }`}</style>
    </div>
  );
}

function DoorPanel({ side }: { side: "left" | "right" }) {
  return (
    <div className="absolute inset-0 p-[12%]">
      {/* the narrow leaded window in each of their doors */}
      <div
        className={`absolute top-[10%] h-[34%] w-[16%] rounded-[2px] border-2 border-[#cfd3cb] bg-gradient-to-b from-sky-mid/70 to-sky/60 ${
          side === "left" ? "right-[18%]" : "left-[18%]"
        }`}
      >
        <div className="absolute inset-[18%] border border-white/70" />
      </div>
      <div className="absolute inset-x-[14%] bottom-[8%] top-[52%] rounded-[2px] border border-[#d9dcd4] shadow-[inset_0_1px_0_white]" />
      <div
        className={`absolute top-[50%] h-[5%] w-[3.5%] rounded-full bg-gradient-to-b from-brass-pale to-brass ${
          side === "left" ? "right-[7%]" : "left-[7%]"
        }`}
      />
    </div>
  );
}
