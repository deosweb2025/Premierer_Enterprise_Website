import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  gradientTitle,
  subtitle,
  align = 'center', // 'left', 'center', 'right'
  className = ''
}) {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignment[align]} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 bg-amber-950/40 border border-amber-500/30 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)] backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-heading">
        {title}{' '}
        {gradientTitle && (
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent font-serif italic">
            {gradientTitle}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}

      {/* Decorative architectural crystal accent line — Smooth Reveal On Appearance */}
      <motion.div 
        className={`mt-6 flex items-center gap-1.5 select-none pointer-events-none ${
          align === 'center' ? 'justify-center mx-auto' : align === 'right' ? 'justify-end ml-auto' : 'justify-start'
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Tapered Glass Bevel Line — Expands outward from center diamond */}
        <motion.span
          className="w-14 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-amber-400 rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          style={{ originX: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Center Crystal Diamond Jewel — Springs in with a soft warm glow */}
        <motion.div
          className="relative flex items-center justify-center mx-0.5"
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 45, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, type: "spring", stiffness: 280, damping: 20 }}
        >
          {/* Subtle Ambient Halo */}
          <span className="absolute w-6 h-6 rounded-full bg-amber-400/20 blur-[2px] pointer-events-none" />
          
          {/* Solid Golden Crystal Jewel */}
          <span className="w-2.5 h-2.5 bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-500 border border-amber-200/80 rounded-xs shadow-[0_0_10px_#fbbf24]" />
        </motion.div>

        {/* Right Tapered Glass Bevel Line — Expands outward from center diamond */}
        <motion.span
          className="w-14 sm:w-20 h-[2px] bg-gradient-to-l from-transparent via-amber-500 to-amber-400 rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          style={{ originX: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </div>
  );
}
