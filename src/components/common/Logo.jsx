import React from 'react';

export default function Logo({ className = '', size = 'md', showTagline = true, light = true }) {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-base', sub: 'text-[8px]', tag: 'text-[9px]' },
    md: { icon: 'w-10 h-10', text: 'text-xl', sub: 'text-[9px]', tag: 'text-xs' },
    lg: { icon: 'w-14 h-14', text: 'text-2xl sm:text-3xl', sub: 'text-[11px]', tag: 'text-sm' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact Vector Replica of Premiere Enterprise Ascending Glass Logo */}
      <div className={`relative ${currentSize.icon} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_4px_16px_rgba(56,189,248,0.45)]"
        >
          <defs>
            <linearGradient id="logoBar1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="60%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="logoBar2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
            <linearGradient id="logoBar3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="45%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>
            <linearGradient id="logoSwooshGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f0f9ff" />
            </linearGradient>
            <filter id="logoGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 3 Ascending Vertical Architectural Glass Bars */}
          <path d="M24 72 L46 64 L46 104 L24 104 Z" fill="url(#logoBar1)" />
          <path d="M53 44 L75 36 L75 104 L53 104 Z" fill="url(#logoBar2)" />
          <path d="M82 16 L104 8 L104 104 L82 104 Z" fill="url(#logoBar3)" />

          {/* Glowing Ascending Dynamic Swoosh Curve */}
          <path
            d="M14 99 C 45 98, 77 87, 106 48 C 86 76, 50 100, 14 99 Z"
            fill="#38bdf8"
            opacity="0.75"
            filter="url(#logoGlow)"
          />
          <path
            d="M15 99 C 46 98, 77 86.5, 105 49 C 85 75, 51 99.5, 15 99 Z"
            fill="url(#logoSwooshGrad)"
            filter="url(#logoGlow)"
          />
          <path
            d="M17 99 C 47 98.2, 76 87, 104 50 C 84 74.8, 51 99.2, 17 99 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`font-black tracking-[0.14em] uppercase leading-none font-heading ${currentSize.text} ${
            light ? 'text-white' : 'text-slate-900'
          }`}
        >
          Premiere
        </span>
        <span
          className={`font-semibold tracking-[0.28em] uppercase leading-tight font-heading mt-0.5 ${currentSize.sub} ${
            light ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          Enterprise
        </span>
        
        {showTagline && (
          <span
            className={`italic font-serif tracking-normal leading-none mt-0.5 text-rose-500 font-bold ${currentSize.tag}`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            spells quality
          </span>
        )}
      </div>
    </div>
  );
}
