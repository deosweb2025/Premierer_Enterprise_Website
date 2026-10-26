import React from 'react';

/**
 * Enhanced Logo Component for Premiere Enterprise
 * Exact vector replica of the 3 ascending glass panels with angled top cuts,
 * 3D architectural bevel facet on the tallest bar, and the illuminated white light swoosh arc.
 */
export default function Logo({
  className = '',
  size = 'md',
  showTagline = true,
  light = true,
  iconOnly = false,
  animated = false
}) {
  const sizeMap = {
    xs: { icon: 'w-6 h-6', text: 'text-sm', sub: 'text-[7px]', tag: 'text-[8px]', gap: 'gap-2' },
    sm: { icon: 'w-8 h-8', text: 'text-base', sub: 'text-[8px]', tag: 'text-[9px]', gap: 'gap-2.5' },
    md: { icon: 'w-10 h-10', text: 'text-xl', sub: 'text-[9px]', tag: 'text-xs', gap: 'gap-3' },
    lg: { icon: 'w-14 h-14', text: 'text-2xl sm:text-3xl', sub: 'text-[11px]', tag: 'text-sm', gap: 'gap-3.5' },
    xl: { icon: 'w-20 h-20', text: 'text-3xl sm:text-4xl', sub: 'text-xs sm:text-sm', tag: 'text-base', gap: 'gap-4' },
    splash: { icon: 'w-28 h-28 sm:w-36 sm:h-36', text: 'text-4xl sm:text-5xl', sub: 'text-sm sm:text-base', tag: 'text-lg sm:text-xl', gap: 'gap-5' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center ${currentSize.gap} select-none ${className}`}>
      {/* Exact Vector Replica of Premiere Enterprise Ascending Glass Logo */}
      <div className={`relative ${currentSize.icon} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_4px_20px_rgba(56,189,248,0.45)] overflow-visible"
        >
          <defs>
            {/* Bar 1 (Left - Shortest) Gradient: Deep cobalt to vibrant blue */}
            <linearGradient id="premLogoBar1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="40%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>

            {/* Bar 2 (Middle) Gradient */}
            <linearGradient id="premLogoBar2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>

            {/* Bar 3 Main Body (Cobalt Blue) */}
            <linearGradient id="premLogoBar3Main" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="60%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>

            {/* Bar 3 Specular Right Facet (Lighter Sky Blue Architectural Reflection) */}
            <linearGradient id="premLogoBar3Facet" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="35%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>

            {/* Top Cut Bevel Highlights */}
            <linearGradient id="premTopBevel" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.3" />
            </linearGradient>

            {/* Swoosh Light Glow Filter */}
            <filter id="premSwooshGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Specular White Shimmer Gradient for Swoosh */}
            <linearGradient id="premSwooshGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.6" />
              <stop offset="30%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </linearGradient>
          </defs>

          {/* ========================================================== */}
          {/* 3 ASCENDING ARCHITECTURAL GLASS BARS (Flat Base Y=102)     */}
          {/* ========================================================== */}

          {/* Bar 1 (Left - Shortest): X=26..46, Height=28..34, Angle Top */}
          <g>
            <path
              d="M 26 74 L 46 68 L 46 102 L 26 102 Z"
              fill="url(#premLogoBar1)"
            />
            {/* Top edge cut reflection */}
            <line
              x1="26"
              y1="74"
              x2="46"
              y2="68"
              stroke="url(#premTopBevel)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>

          {/* Bar 2 (Middle): X=52..72, Height=56..62, Angle Top */}
          <g>
            <path
              d="M 52 46 L 72 40 L 72 102 L 52 102 Z"
              fill="url(#premLogoBar2)"
            />
            {/* Top edge cut reflection */}
            <line
              x1="52"
              y1="46"
              x2="72"
              y2="40"
              stroke="url(#premTopBevel)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>

          {/* Bar 3 (Tallest - Right): X=78..102, Split 3D Glass Facet */}
          <g>
            {/* Left Portion of Bar 3 (Main cobalt glass) */}
            <path
              d="M 78 18 L 90 14.4 L 90 102 L 78 102 Z"
              fill="url(#premLogoBar3Main)"
            />
            {/* Right Specular Facet of Bar 3 (Distinct Sky-Blue 3D Architectural Bevel) */}
            <path
              d="M 90 14.4 L 102 10.8 L 102 102 L 90 102 Z"
              fill="url(#premLogoBar3Facet)"
            />
            {/* Top edge cut reflection */}
            <line
              x1="78"
              y1="18"
              x2="102"
              y2="10.8"
              stroke="url(#premTopBevel)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            {/* Specular right border highlight */}
            <line
              x1="102"
              y1="10.8"
              x2="102"
              y2="102"
              stroke="#bae6fd"
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />
          </g>

          {/* ========================================================== */}
          {/* LUMINOUS WHITE & ELECTRIC CYAN SWOOSH ARC (MATCHING LOGO)  */}
          {/* Starts near Bar 1's right edge (X=42), arcs up across Bar 2 & 3 */}
          {/* ========================================================== */}

          {/* Ambient Electric Cyan Glow Aura */}
          <path
            d="M 40 86 C 54 85, 72 75.5, 96 48.5 C 73 72.5, 55 83, 40 86 Z"
            fill="#38bdf8"
            opacity="0.85"
            filter="url(#premSwooshGlow)"
          />

          {/* Bright White Radiant Light Beam */}
          <path
            d="M 41 85.5 C 54.5 84.8, 72 75.8, 95 49 C 73.2 72.2, 55.5 82.8, 41 85.5 Z"
            fill="url(#premSwooshGrad)"
            filter="url(#premSwooshGlow)"
            opacity="0.95"
          />

          {/* Razor-Sharp Pure White Core Arc */}
          <path
            d="M 42 85 C 55 84.5, 72 76, 94 49.5 C 73.5 72, 56 82.5, 42 85 Z"
            fill="#ffffff"
          />

          {/* Center Specular Diamond Flare on the Arc (Sparkle Point) */}
          <circle
            cx="69"
            cy="75"
            r="1.8"
            fill="#ffffff"
            filter="url(#premSwooshGlow)"
          />
          <circle cx="69" cy="75" r="0.9" fill="#ffffff" />
        </svg>

        {/* Optional animated sweep aura if animated prop is passed */}
        {animated && (
          <div className="absolute inset-0 pointer-events-none rounded-full bg-gradient-to-tr from-sky-400/20 via-transparent to-blue-500/20 blur-md animate-pulse" />
        )}
      </div>

      {/* Brand Typography */}
      {!iconOnly && (
        <div className="flex flex-col">
          <span
            className={`font-black tracking-[0.16em] uppercase leading-none font-heading ${currentSize.text} ${
              light ? 'text-white' : 'text-slate-900'
            }`}
          >
            Premiere
          </span>
          <span
            className={`font-bold tracking-[0.32em] uppercase leading-tight font-heading mt-0.5 ${currentSize.sub} ${
              light ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            Enterprise
          </span>

          {showTagline && (
            <span
              className={`italic font-serif tracking-normal leading-none mt-1 text-rose-500 font-bold ${currentSize.tag}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              spells quality
            </span>
          )}
        </div>
      )}
    </div>
  );
}
