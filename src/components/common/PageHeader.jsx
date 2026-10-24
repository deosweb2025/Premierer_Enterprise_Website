import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from './Container';

export default function PageHeader({
  badge,
  title,
  gradientTitle,
  description,
  breadcrumbs = [],
  image
}) {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden border-b border-white/15 bg-[#0f1422]">
      {/* Cinematic Architectural Background Image */}
      {image && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.12] saturate-[1.15] scale-100"
          />
          {/* Balanced Cinematic Tint Layers — Keeps the photograph richly visible while framing content */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#090d18]/70 via-[#0c101c]/45 to-[#080b14]/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_45%,rgba(10,14,24,0.3)_0%,rgba(8,11,20,0.85)_100%)]" />
          {/* Specular Top Sheen */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
        </div>
      )}

      {/* Background Glass Lighting Effects (Champagne & Titanium Sky) */}
      <div className="absolute top-0 left-1/4 w-[36rem] h-[36rem] bg-amber-500/12 rounded-full blur-[150px] pointer-events-none z-1" />
      <div className="absolute top-10 right-1/4 w-[36rem] h-[36rem] bg-sky-500/8 rounded-full blur-[160px] pointer-events-none z-1" />

      <Container className="relative z-10 text-center">
        {/* Breadcrumbs Navigation */}
        <nav className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs text-slate-300 mb-6 border border-white/15 shadow-lg bg-slate-950/70 backdrop-blur-md" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5 text-amber-400" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-slate-500" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-amber-400 transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-amber-300 font-bold">{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge Eyebrow */}
        {badge && (
          <div className="block mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-mono text-amber-300 bg-amber-950/60 px-3.5 py-1.5 rounded-full border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{badge}</span>
            </span>
          </div>
        )}

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] font-heading drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          {title}{' '}
          {gradientTitle && (
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent italic font-serif drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
              {gradientTitle}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        {description && (
          <p className="mt-6 text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            {description}
          </p>
        )}

        {/* Architectural Accent Line — Smooth Reveal On Appearance */}
        <motion.div 
          className="mt-8 flex items-center justify-center gap-1.5 select-none pointer-events-none mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Tapered Glass Bevel Line — Expands outward from center diamond */}
          <motion.span
            className="w-14 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-amber-400 rounded-full"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            style={{ originX: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Center Crystal Diamond Jewel — Springs in with a soft warm glow */}
          <motion.div
            className="relative flex items-center justify-center mx-0.5"
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 45, opacity: 1 }}
            viewport={{ once: true }}
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
            viewport={{ once: true }}
            style={{ originX: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </Container>
    </div>
  );
}
