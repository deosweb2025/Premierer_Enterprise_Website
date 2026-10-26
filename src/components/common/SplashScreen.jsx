import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

/**
 * Luxury Splash Screen / Intro Loader
 * When visitors first open or click the website link:
 * 1. The enhanced illuminated Premiere Enterprise logo appears with a radiant glow.
 * 2. Light shimmers across the glass pillars and white swoosh arc.
 * 3. The brand typography and "spells quality" tagline reveal smoothly.
 * 4. Automatically fades out with a smooth cinematic dissolution to reveal the website.
 */
import { cinematicAudio } from '../../utils/cinematicAudio';

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Pre-initialize audio element in the background
    cinematicAudio.init();

    // Smooth progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 75);

    // Automatic fade out timer (approx 1.9s - 2.1s)
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  const handleSkipOrClick = () => {
    cinematicAudio.play().catch(() => {});
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'blur(10px)',
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
      }}
      onClick={handleSkipOrClick}
      onMouseMove={() => cinematicAudio.play()}
      onPointerMove={() => cinematicAudio.play()}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#06080e] text-white overflow-hidden select-none cursor-pointer"
    >
      {/* Background Architectural Ambient Glass Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Core Radial Blue Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-tr from-blue-600/20 via-sky-500/15 to-transparent blur-3xl animate-pulse" />
        
        {/* Subtle Specular Glass Sheen Rays */}
        <div className="absolute top-0 left-1/4 w-96 h-full bg-gradient-to-b from-sky-400/5 via-transparent to-transparent rotate-12 blur-2xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-full bg-gradient-to-t from-blue-600/5 via-transparent to-transparent -rotate-12 blur-2xl" />

        {/* Architectural Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      {/* Main Logo Intro Container */}
      <div className="relative z-10 flex flex-col items-center px-4">
        
        {/* Animated Ascending Glass Logo Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6"
        >
          {/* Ambient Halo Behind the Icon */}
          <div className="absolute -inset-6 rounded-full bg-sky-400/20 blur-xl animate-pulse pointer-events-none" />

          {/* Scaled High-Fidelity Vector Logo */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
            <svg
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_8px_32px_rgba(56,189,248,0.55)] overflow-visible"
            >
              <defs>
                <linearGradient id="splashBar1" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="40%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>

                <linearGradient id="splashBar2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1d4ed8" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>

                <linearGradient id="splashBar3Main" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1d4ed8" />
                  <stop offset="60%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>

                <linearGradient id="splashBar3Facet" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="35%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#7dd3fc" />
                </linearGradient>

                <linearGradient id="splashTopBevel" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.4" />
                </linearGradient>

                <filter id="splashSwooshGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur1" />
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <linearGradient id="splashSwooshGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.6" />
                  <stop offset="30%" stopColor="#ffffff" />
                  <stop offset="70%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#e0f2fe" />
                </linearGradient>
              </defs>

              {/* 3 Ascending Architectural Glass Bars */}
              <motion.g
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                <path d="M 26 74 L 46 68 L 46 102 L 26 102 Z" fill="url(#splashBar1)" />
                <line x1="26" y1="74" x2="46" y2="68" stroke="url(#splashTopBevel)" strokeWidth="1.4" strokeLinecap="round" />
              </motion.g>

              <motion.g
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
                <path d="M 52 46 L 72 40 L 72 102 L 52 102 Z" fill="url(#splashBar2)" />
                <line x1="52" y1="46" x2="72" y2="40" stroke="url(#splashTopBevel)" strokeWidth="1.4" strokeLinecap="round" />
              </motion.g>

              <motion.g
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              >
                <path d="M 78 18 L 90 14.4 L 90 102 L 78 102 Z" fill="url(#splashBar3Main)" />
                <path d="M 90 14.4 L 102 10.8 L 102 102 L 90 102 Z" fill="url(#splashBar3Facet)" />
                <line x1="78" y1="18" x2="102" y2="10.8" stroke="url(#splashTopBevel)" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="102" y1="10.8" x2="102" y2="102" stroke="#bae6fd" strokeWidth="1" strokeOpacity="0.5" />
              </motion.g>

              {/* Illuminated White Light Arc Swoosh with Dramatic Reveal */}
              <motion.g
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              >
                <path
                  d="M 40 86 C 54 85, 72 75.5, 96 48.5 C 73 72.5, 55 83, 40 86 Z"
                  fill="#38bdf8"
                  opacity="0.9"
                  filter="url(#splashSwooshGlow)"
                />
                <path
                  d="M 41 85.5 C 54.5 84.8, 72 75.8, 95 49 C 73.2 72.2, 55.5 82.8, 41 85.5 Z"
                  fill="url(#splashSwooshGrad)"
                  filter="url(#splashSwooshGlow)"
                />
                <path
                  d="M 42 85 C 55 84.5, 72 76, 94 49.5 C 73.5 72, 56 82.5, 42 85 Z"
                  fill="#ffffff"
                />

                {/* Sparkling Flare Point */}
                <circle cx="69" cy="75" r="2.4" fill="#ffffff" filter="url(#splashSwooshGlow)" />
                <circle cx="69" cy="75" r="1.2" fill="#ffffff" />
              </motion.g>
            </svg>
          </div>
        </motion.div>

        {/* Brand Name Typography */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.24em] font-heading text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)]">
            Premiere
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-bold tracking-[0.45em] uppercase text-sky-200/90 font-heading mt-1.5">
            Enterprise
          </p>
        </motion.div>

        {/* "spells quality" Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.65, ease: 'easeOut' }}
          className="mt-3"
        >
          <span
            className="text-lg sm:text-xl md:text-2xl italic font-serif font-bold text-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.45)]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            spells quality
          </span>
        </motion.div>

        {/* Architectural Hairline Progress Line */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '180px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 relative h-[2px] bg-white/10 rounded-full overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-blue-500 via-sky-400 to-amber-300 rounded-full shadow-[0_0_8px_#38bdf8]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </motion.div>

        {/* Luxury Enter Website Button (Registers User Activation for Instant Audio) */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={(e) => {
            e.stopPropagation();
            handleSkipOrClick();
          }}
          className="mt-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer"
        >
          <span>Enter Website</span>
          <span className="flex items-end gap-0.5 h-3 pb-0.5">
            <span className="w-0.5 h-2 bg-slate-950 rounded-full animate-bounce" style={{ animationDuration: '0.6s' }} />
            <span className="w-0.5 h-3 bg-slate-950 rounded-full animate-bounce" style={{ animationDuration: '0.8s', animationDelay: '0.15s' }} />
            <span className="w-0.5 h-1.5 bg-slate-950 rounded-full animate-bounce" style={{ animationDuration: '0.5s', animationDelay: '0.3s' }} />
          </span>
        </motion.button>

        {/* Subtle Glass Tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-3 text-[10px] tracking-[0.25em] uppercase text-slate-400 font-medium"
        >
          Click anywhere to enter with ambient sound
        </motion.p>
      </div>
    </motion.div>
  );
}
