/*
  Faithful Touch Cleanings — Logo
  ------------------------------------------------------------------
  NOTE FOR OWNER/DEVELOPER:
  This is a faithful vector recreation of the supplied logo so the demo
  renders crisply at every size without distortion or recoloring.

  To use the original image file instead:
  1. Save the supplied logo as `public/logo.png` (transparent background ideal)
  2. Set `USE_IMAGE_LOGO = true` below.

  Colors sampled from the supplied logo:
  - Deep forest green: #0E3B2E
  - Leaf green: #14543F / #1A6B4A
  - Gold / wood: #B78A2E → #8F6A3B
  - Cream: #FDFBF6
*/

const USE_IMAGE_LOGO = false;
const IMAGE_LOGO_SRC = "/logo.png";

function LogoMark({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 168" className={className} role="img" aria-label="Faithful Touch Cleanings monogram" aria-hidden="false">
      <defs>
        <linearGradient id="ft-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D9B45B" />
          <stop offset="45%" stopColor="#B78A2E" />
          <stop offset="100%" stopColor="#7A5A1E" />
        </linearGradient>
        <linearGradient id="ft-gold-soft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8C86A" />
          <stop offset="100%" stopColor="#9A7524" />
        </linearGradient>
        <linearGradient id="ft-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A6B4A" />
          <stop offset="100%" stopColor="#0B2F24" />
        </linearGradient>
        <linearGradient id="ft-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2A8B5E" />
          <stop offset="55%" stopColor="#14543F" />
          <stop offset="100%" stopColor="#0B2F24" />
        </linearGradient>
      </defs>

      {/* Large F — deep forest green */}
      <text
        x="72"
        y="118"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontWeight="700"
        fontSize="128"
        fill="#0B2F24"
        letterSpacing="-4"
      >
        F
      </text>
      {/* F top bar highlight */}
      <rect x="46" y="18" width="62" height="7" rx="3.5" fill="#0B2F24" />

      {/* House roof — gold */}
      <path
        d="M62 74 L112 34 L164 74"
        fill="none"
        stroke="url(#ft-gold)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70 74 L112 42 L154 74"
        fill="none"
        stroke="#F2E3B8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      {/* Roof eave caps */}
      <circle cx="62" cy="74" r="4.5" fill="url(#ft-gold)" />
      <circle cx="164" cy="74" r="4.5" fill="url(#ft-gold)" />

      {/* Window panes */}
      <g transform="translate(128 46)">
        <rect x="0" y="0" width="18" height="18" rx="2" fill="url(#ft-gold)" opacity="0.95" />
        <rect x="2.5" y="2.5" width="13" height="13" fill="#FDFBF6" />
        <rect x="8" y="2.5" width="2" height="13" fill="url(#ft-gold)" />
        <rect x="2.5" y="8" width="13" height="2" fill="url(#ft-gold)" />
      </g>

      {/* Large T — gold, inside house */}
      <text
        x="112"
        y="128"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontWeight="700"
        fontSize="96"
        fill="url(#ft-gold)"
        letterSpacing="-2"
      >
        T
      </text>

      {/* Leaves — botanical green */}
      <g>
        <path
          d="M8 108 C 28 84, 62 74, 82 82 C 66 96, 34 110, 8 108 Z"
          fill="url(#ft-leaf)"
          stroke="#0B2F24"
          strokeWidth="1.5"
        />
        <path d="M14 104 C 34 96, 58 88, 78 84" fill="none" stroke="#BFE3CB" strokeWidth="1.6" opacity="0.8" strokeLinecap="round" />
        <path
          d="M52 148 C 56 122, 76 102, 100 98 C 98 122, 80 142, 52 148 Z"
          fill="url(#ft-leaf)"
          stroke="#0B2F24"
          strokeWidth="1.5"
        />
        <path d="M58 142 C 68 128, 82 114, 96 104" fill="none" stroke="#BFE3CB" strokeWidth="1.6" opacity="0.8" strokeLinecap="round" />
      </g>

      {/* Sparkles — gold */}
      <g fill="url(#ft-gold-soft)">
        <path d="M180 22 c 1.2 6.5 3.2 8.5 9.7 9.7 c -6.5 1.2 -8.5 3.2 -9.7 9.7 c -1.2 -6.5 -3.2 -8.5 -9.7 -9.7 c 6.5 -1.2 8.5 -3.2 9.7 -9.7 Z" />
        <path d="M186 74 c 1.8 9.8 4.8 12.8 14.6 14.6 c -9.8 1.8 -12.8 4.8 -14.6 14.6 c -1.8 -9.8 -4.8 -12.8 -14.6 -14.6 c 9.8 -1.8 12.8 -4.8 14.6 -14.6 Z" opacity="0.95" />
        <circle cx="170" cy="52" r="2.4" opacity="0.9" />
      </g>
    </svg>
  );
}

export function LogoWordmark({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  const green = light ? "#FDFBF6" : "#0B2F24";
  return (
    <span className="flex flex-col leading-none">
      <span className={`flex items-baseline gap-1.5 ${compact ? "" : ""}`}>
        <span
          className={`${compact ? "text-[22px]" : "text-[26px]"} font-bold tracking-tight`}
          style={{ fontFamily: "Fraunces, Georgia, serif", color: green }}
        >
          Faithful
        </span>
        <span
          className={`${compact ? "text-[24px]" : "text-[30px]"} -ml-1`}
          style={{ fontFamily: '"Pinyon Script", cursive', color: "#B78A2E" }}
        >
          Touch
        </span>
      </span>
      <span className="mt-1 flex items-center gap-2">
        <span className="h-px w-6" style={{ background: light ? "#E2C078" : "#B78A2E" }} />
        <span
          className="text-[10px] font-bold tracking-[0.42em]"
          style={{ color: light ? "#EED9A8" : "#5C3F22" }}
        >
          CLEANING
        </span>
        <span className="h-px w-6" style={{ background: light ? "#E2C078" : "#B78A2E" }} />
      </span>
      {!compact && (
        <span
          className="mt-1 text-[8.5px] font-semibold tracking-[0.24em]"
          style={{ color: light ? "#D3B897" : "#5C6861" }}
        >
          CLEAN SPACES&nbsp;&nbsp;BRIGHTER DAYS
        </span>
      )}
    </span>
  );
}

export default function Logo({
  variant = "horizontal",
  light = false,
  className = "",
}: {
  variant?: "horizontal" | "stacked" | "mark";
  light?: boolean;
  className?: string;
}) {
  if (USE_IMAGE_LOGO) {
    return (
      <img
        src={IMAGE_LOGO_SRC}
        alt="Faithful Touch Cleanings — Clean Spaces, Brighter Days"
        className={`object-contain ${variant === "stacked" ? "h-28 w-auto" : "h-14 w-auto"} ${className}`}
      />
    );
  }

  if (variant === "mark") {
    return <LogoMark className={`h-12 w-12 ${className}`} />;
  }

  if (variant === "stacked") {
    return (
      <span className={`flex flex-col items-center text-center ${className}`}>
        <LogoMark className="h-24 w-24" />
        <span className="mt-1 flex items-baseline gap-2">
          <span className="text-[34px] font-bold tracking-tight" style={{ fontFamily: "Fraunces, Georgia, serif", color: light ? "#FDFBF6" : "#0B2F24" }}>
            Faithful
          </span>
          <span className="text-[40px] -ml-1" style={{ fontFamily: '"Pinyon Script", cursive', color: "#CFA14A" }}>
            Touch
          </span>
        </span>
        <span className="mt-2 flex items-center gap-3">
          <span className="h-px w-10" style={{ background: "#B78A2E" }} />
          <span className="text-[12px] font-bold tracking-[0.5em] pl-2" style={{ color: light ? "#EED9A8" : "#5C3F22" }}>
            CLEANING
          </span>
          <span className="h-px w-10" style={{ background: "#B78A2E" }} />
        </span>
        <span className="mt-2 text-[10px] font-semibold tracking-[0.3em]" style={{ color: light ? "#D3B897" : "#5C6861" }}>
          CLEAN SPACES&nbsp;&nbsp;BRIGHTER DAYS
        </span>
      </span>
    );
  }

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-[52px] w-[52px] shrink-0" />
      <LogoWordmark light={light} />
    </span>
  );
}
