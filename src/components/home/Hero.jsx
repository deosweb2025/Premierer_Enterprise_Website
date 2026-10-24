import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown 
} from 'lucide-react';

// Ultra-HD Master Architectural Glass & Mirror Hero Imagery
import heroMirrors from '../../assets/images/hero-mirrors.jpg';
import heroBevelledWall from '../../assets/images/hero-bevelled-wall.jpg';
import heroArchitecturalGlass from '../../assets/images/hero-architectural-glass.jpg';
import heroMirrorMobileTexture from '../../assets/images/hero-mirror-mobile-texture.jpg';

// Variants for smooth horizontal sliding (right-to-left on next / auto-advance)
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 1,
    zIndex: 1,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 1,
    zIndex: 0,
  }),
};

export default function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const bottomBarRef = useRef(null);

  // Curated Ultra-HD Hero Showcase Slides
  const heroSlides = [
    {
      id: 1,
      image: heroMirrors,
      title: "Smart LED Designer Mirrors",
      subtitle: "Dual CCT (3000K & 6500K) halo backlighting with diamond-bevelled reflections",
    },
    {
      id: 2,
      image: heroBevelledWall,
      title: "Diamond Bevelled Mirror Walls",
      subtitle: "Full-height geometric chevron & diamond mirror wall panelling",
    },
    {
      id: 3,
      image: heroArchitecturalGlass,
      title: "Architectural Glass & Partitions",
      subtitle: "Bespoke fluted glass divider partitions with illuminated geometric bronze wall panels",
    }
  ];

  // [currentSlide, direction]: direction 1 = slide right to left, -1 = slide left to right
  const [[currentSlide, direction], setSlideState] = useState([0, 1]);

  const paginate = useCallback((newDirection) => {
    setSlideState(([prev]) => {
      const next = (prev + newDirection + heroSlides.length) % heroSlides.length;
      return [next, newDirection];
    });
  }, [heroSlides.length]);

  const goToSlide = (targetIndex) => {
    if (targetIndex === currentSlide) return;
    const dir = targetIndex > currentSlide ? 1 : -1;
    setSlideState([targetIndex, dir]);
  };

  // Smooth auto-transition every 2 seconds sliding right-to-left
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 2000);

    return () => clearInterval(timer);
  }, [paginate]);

  // Entrance animation with GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.12, delay: 0.15 }
      ).fromTo(
        bottomBarRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] sm:h-screen sm:min-h-[580px] sm:max-h-[1080px] w-full flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#131929] via-[#0f1422] to-[#0c101a] select-none"
    >
      {/* ========================================================================= */}
      {/* 1A. MOBILE VIEW BACKGROUND: High-End Smoked Mirror Glass Texture          */}
      {/* ========================================================================= */}
      <div className="sm:hidden absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={heroMirrorMobileTexture}
          alt="Mirror Glass Texture"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-125 saturate-110"
        />
        {/* Deep Obsidian & Smoked Champagne Mirror Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080b13]/85 via-[#0b0f1a]/70 to-[#07090e]/95" />
        {/* Ambient Luminous Warm Champagne Light Accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/15 rounded-full blur-[110px]" />
      </div>

      {/* ========================================================================= */}
      {/* 1B. DESKTOP BACKGROUND: Full-Bleed Ultra-HD Background Showcase           */}
      {/* ========================================================================= */}
      <div className="hidden sm:block absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.7 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover object-center select-none"
              draggable="false"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Vignettes — Balanced so the architectural mirrors shine through */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#060912]/80 via-[#0a0e18]/45 to-transparent pointer-events-none" />

        {/* Top Vignette for Transparent Header */}
        <div className="absolute inset-x-0 top-0 h-28 z-20 bg-gradient-to-b from-[#06080e]/75 to-transparent pointer-events-none" />

        {/* Bottom Vignette for Bottom Bar & Next-Section Transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 z-20 bg-gradient-to-t from-[#06080e] via-[#06080e]/75 to-transparent pointer-events-none" />

        {/* Luminous Warm Golden Champagne & Platinum Light Accents */}
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none z-20" />
        <div className="absolute bottom-1/4 right-1/4 w-[24rem] h-[24rem] bg-sky-500/8 rounded-full blur-[150px] pointer-events-none z-20" />
      </div>

      {/* ========================================================================= */}
      {/* 2A. MOBILE VIEW CONTENT: Editorial Mirror Atelier Composition (< sm)      */}
      {/* ========================================================================= */}
      <div className="sm:hidden relative z-30 flex-1 flex flex-col justify-between px-4 pt-20 pb-5 max-w-lg mx-auto w-full">
        
        {/* TOP POSITION: Eyebrow Badge & Big Heading (Above Image Card) */}
        <div className="text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-amber-400/40 text-[10px] font-semibold shadow-md mb-2.5 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="font-bold text-amber-300 tracking-wider">10+ YEARS CRAFT • KOLKATA</span>
            <span className="text-white/30">•</span>
            <span 
              className="italic font-serif text-white/95 font-medium tracking-wide"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              spells quality
            </span>
          </div>

          <h1 className="text-2xl xs:text-[27px] font-black text-white tracking-tight leading-[1.2] font-heading drop-shadow-xl">
            Architectural Glass &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 italic font-serif">
              Luxury Designer
            </span>{' '}
            Mirrors
          </h1>
        </div>

        {/* MIDDLE POSITION: Center Image Card with Liquid Gold Border Animation (Enlarged for Clear Visibility) */}
        <div className="my-3.5 relative rounded-2xl p-[1.5px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {/* Animated Liquid Gold Border Beam Tracing Perimeter */}
          <div 
            className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,rgba(245,158,11,0.25)_330deg,rgba(251,191,36,0.95)_350deg,transparent_360deg)] animate-border-beam opacity-90 pointer-events-none"
          />

          {/* Inner Card Container with Smooth Sliding Slideshow (Enlarged to h-[270px] xs:h-[310px]) */}
          <div className="relative rounded-[15px] overflow-hidden bg-slate-950 border border-amber-400/30 h-[270px] xs:h-[310px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.7 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 w-full h-full will-change-transform"
              >
                <img
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-full object-cover object-center select-none"
                  draggable="false"
                />
              </motion.div>
            </AnimatePresence>

            {/* Refined Card Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d15]/80 via-transparent to-transparent pointer-events-none" />

            {/* Top Floating Badge on Card */}
            <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/40 text-[11px] font-bold text-amber-300 shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{heroSlides[currentSlide].title}</span>
            </div>

            {/* Bottom Slide Info Tag */}
            <div className="absolute bottom-2.5 inset-x-3 z-10 flex items-center justify-between text-[11px] font-mono pointer-events-none">
              <span className="text-amber-300 bg-slate-950/85 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm shadow-md">
                0{currentSlide + 1} / 0{heroSlides.length}
              </span>
              <span className="text-slate-200 bg-slate-950/85 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm shadow-md">
                Kolkata Atelier
              </span>
            </div>
          </div>
        </div>

        {/* LOWER POSITION: Small Font & Action Buttons (Below Image Card) */}
        <div className="flex flex-col items-center text-center">
          {/* Small Descriptive Font */}
          <p className="text-xs text-slate-300 leading-relaxed font-normal max-w-sm drop-shadow-md px-1">
            Master fabricators of bespoke illuminated smart LED mirrors, diamond-cut bevelled wall panels, and structural architectural glazing in Kolkata for over a decade.
          </p>

          {/* Luxury Action Buttons */}
          <div className="mt-3.5 flex items-center justify-center gap-2.5 w-full">
            <Link
              to="/services"
              className="flex-1 max-w-[170px] py-2.5 px-3 rounded-full font-bold text-xs bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/25 active:scale-95 transition-all flex items-center justify-center gap-1.5"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            <Link
              to="/contact"
              className="flex-1 max-w-[170px] py-2.5 px-3 rounded-full font-semibold text-xs bg-slate-950/80 border border-white/20 active:border-amber-400 text-white shadow-md active:scale-95 transition-all flex items-center justify-center backdrop-blur-md"
            >
              <span>Request Quote</span>
            </Link>
          </div>
        </div>

        {/* BOTTOM: Slide Navigation & Minimalist Controls */}
        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs w-full">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 font-mono text-[11px] font-bold">
              0{currentSlide + 1}
            </span>
            <span className="text-xs font-semibold text-white tracking-wide truncate max-w-[180px]">
              {heroSlides[currentSlide].title}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => paginate(-1)}
              className="w-6 h-6 rounded-full text-slate-300 active:text-amber-400 bg-white/5 active:bg-white/15 border border-white/15 flex items-center justify-center cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-3 h-3" />
            </button>

            <div className="flex items-center gap-1 px-0.5">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className="p-0.5 cursor-pointer"
                  aria-label={`Slide ${i + 1}`}
                >
                  <div
                    className={`h-1 rounded-full transition-all duration-300 ${
                      currentSlide === i
                        ? 'w-4 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]'
                        : 'w-1 bg-white/30'
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-6 h-6 rounded-full text-slate-300 active:text-amber-400 bg-white/5 active:bg-white/15 border border-white/15 flex items-center justify-center cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2B. DESKTOP MAIN HERO CONTENT: Preserved Desktop Layout                   */}
      {/* ========================================================================= */}
      <div className="hidden sm:flex relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex-col justify-center pt-24 pb-6">
        
        {/* Main Editorial Narrative */}
        <div ref={contentRef} className="max-w-xl lg:max-w-2xl flex flex-col items-start">
          
          {/* Elegant Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/55 border border-amber-400/30 text-[11px] sm:text-xs font-semibold shadow-md mb-3.5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-bold text-amber-300 tracking-wider">10+ YEARS CRAFT • KOLKATA</span>
            <span className="text-white/30">•</span>
            <span 
              className="italic font-serif text-white/95 font-medium tracking-wide drop-shadow-sm"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              spells quality
            </span>
          </div>

          {/* Refined Architectural Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18] font-heading drop-shadow-lg">
            Architectural Glass &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 italic font-serif">
              Luxury Designer
            </span>{' '}
            Mirrors
          </h1>

          {/* Refined Brand Subtitle (Clean, elegant, non-overpowering) */}
          <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm lg:text-[15px] text-slate-200 leading-relaxed font-normal max-w-lg drop-shadow-md">
            Master fabricators of bespoke illuminated smart LED mirrors, diamond-cut bevelled wall panels, and structural architectural glazing in Kolkata for over a decade.
          </p>

          {/* Sleek, Tailored Luxury Action Buttons */}
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/services"
              className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full font-semibold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-md shadow-amber-500/20 hover:shadow-amber-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full font-semibold text-xs sm:text-sm bg-black/45 hover:bg-black/65 border border-white/25 hover:border-amber-400/60 text-white shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer"
            >
              <span>Request Custom Quote</span>
            </Link>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. DESKTOP BOTTOM MINIMALIST GLASS RIBBON                                 */}
      {/* ========================================================================= */}
      <div
        ref={bottomBarRef}
        className="hidden sm:block relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 pt-2"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs">
          
          {/* Slide Indicator & Craft Tagline */}
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 font-mono text-xs font-bold shadow-sm">
              0{currentSlide + 1}
            </span>
            <div className="text-left overflow-hidden min-h-[38px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-xs sm:text-sm font-semibold text-white tracking-wide block drop-shadow-sm">
                    {heroSlides[currentSlide].title}
                  </span>
                  <span className="text-[10px] sm:text-xs text-amber-400/80 tracking-wider uppercase font-mono font-medium block">
                    Kolkata Bespoke Glass Studio
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Minimalist Slide Controls & Scroll Cue */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Slide Dots & Chevrons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => paginate(-1)}
                className="w-7 h-7 rounded-full text-slate-300 hover:text-amber-400 bg-white/5 hover:bg-white/15 border border-white/15 transition-all flex items-center justify-center cursor-pointer"
                title="Previous Slide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-1 px-1">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className="p-1 cursor-pointer"
                    title={`Slide ${i + 1}`}
                  >
                    <div
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === i
                          ? 'w-5 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]'
                          : 'w-1.5 bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => paginate(1)}
                className="w-7 h-7 rounded-full text-slate-300 hover:text-amber-400 bg-white/5 hover:bg-white/15 border border-white/15 transition-all flex items-center justify-center cursor-pointer"
                title="Next Slide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Smooth Scroll Cue */}
            <a
              href="#showcase"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('showcase');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                }
              }}
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-amber-300 bg-white/5 hover:bg-white/10 border border-white/15 px-3 py-1 rounded-full transition-all text-xs font-semibold group cursor-pointer"
            >
              <span className="tracking-wider uppercase font-mono text-[11px]">Explore</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-amber-400 animate-bounce" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
