import React, { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle2, Factory, ShieldCheck, Sparkles } from 'lucide-react';

/**
 * High-performance smooth counter hook
 */
function useCountUp(endValue, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic: 1 - (1 - progress)^3
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [endValue, duration, trigger]);

  return count;
}

export default function StatsCounter() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated counters
  const countYears = useCountUp(10, 1600, isVisible);
  const countCustomers = useCountUp(500, 2000, isVisible);
  const countQuality = useCountUp(95, 1600, isVisible);

  const stats = [
    {
      id: 1,
      index: "01",
      icon: Award,
      displayNumber: (
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl sm:text-4xl lg:text-[44px] font-black font-heading text-white tracking-tight drop-shadow-[0_2px_15px_rgba(255,255,255,0.18)]">
            {countYears}
          </span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 font-heading">
            +
          </span>
          <span
            className="text-xl sm:text-2xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 ml-1"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Years
          </span>
        </div>
      ),
      label: "Kolkata Craft Heritage",
      sublabel: "Bespoke glass fabrication & precision cutting mastery across Kolkata",
      highlight: "10+ Years Craft",
      footnote: "10+ Years Atelier"
    },
    {
      id: 2,
      index: "02",
      icon: CheckCircle2,
      displayNumber: (
        <div className="flex items-baseline gap-1">
          <span className="text-3xl sm:text-4xl lg:text-[44px] font-black font-heading text-white tracking-tight drop-shadow-[0_2px_15px_rgba(255,255,255,0.18)]">
            {countCustomers.toLocaleString()}
          </span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 font-heading">
            +
          </span>
        </div>
      ),
      label: "Satisfied Customers",
      sublabel: "Residences, commercial suites & luxury architectures across Bengal",
      highlight: "500+ Customers",
      footnote: "500+ Happy Clients"
    },
    {
      id: 3,
      index: "03",
      icon: Factory,
      displayNumber: (
        <div className="flex items-baseline">
          <span className="text-2xl sm:text-3xl lg:text-[38px] font-black font-heading text-white tracking-tight whitespace-nowrap drop-shadow-[0_2px_15px_rgba(255,255,255,0.18)]">
            In-House
          </span>
        </div>
      ),
      label: "Direct Fabrication",
      sublabel: "Heavy-duty CNC cutting & diamond-wheel edge polish workshop",
      highlight: "Zero Middlemen",
      footnote: "Factory Direct"
    },
    {
      id: 4,
      index: "04",
      icon: ShieldCheck,
      displayNumber: (
        <div className="flex items-baseline gap-1">
          <span className="text-3xl sm:text-4xl lg:text-[44px] font-black font-heading text-white tracking-tight drop-shadow-[0_2px_15px_rgba(255,255,255,0.18)]">
            {countQuality}
          </span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 font-heading">
            %
          </span>
        </div>
      ),
      label: "Quality Verification",
      sublabel: "Thermal safety, copper-free HD float & Saint-Gobain raw stock",
      highlight: "95% Quality Score",
      footnote: "ISI Float Standard"
    }
  ];

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#090d16] via-[#101726] to-[#0a0e17] overflow-hidden"
    >
      {/* Top & Bottom Specular Bevel Hairline Dividers */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent shadow-[0_1px_15px_rgba(245,158,11,0.4)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/35 to-transparent" />

      {/* Ambient Lighting Orbs (Warm Amber & Polished Cyan Refractions) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[34rem] h-56 bg-amber-500/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[30rem] h-48 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Architectural Dot Matrix Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.45) 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Regal Architectural Eyebrow Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-[#182136] to-amber-500/15 border border-amber-400/40 shadow-[0_0_25px_rgba(245,158,11,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm uppercase font-mono tracking-[0.2em] text-amber-200 font-bold drop-shadow-[0_1px_6px_rgba(245,158,11,0.3)]">
              Verified Excellence • Kolkata's Trusted Glass Fabricator
            </span>
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse shrink-0" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-4 tracking-tight font-heading">
            Over a Decade of{' '}
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 italic"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Unrivaled Glass Mastery
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2.5 font-normal leading-relaxed max-w-2xl mx-auto">
            Direct North Kolkata workshop fabrication, certified float raw stock, and turnkey architectural installations delivered with millimeter precision.
          </p>
        </div>

        {/* 4 Stats Cards with Continuous Liquid-Gold Border Beam Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative rounded-3xl p-[1.5px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(245,158,11,0.26)] flex flex-col shadow-[0_15px_45px_rgba(0,0,0,0.6)]"
              >
                {/* Traveling Specular Liquid-Gold Border Beam */}
                <div 
                  className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,rgba(245,158,11,0.25)_330deg,rgba(251,191,36,0.95)_350deg,transparent_360deg)] animate-border-beam opacity-85 sm:opacity-45 sm:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    animationDelay: `${idx * 1.3}s`
                  }}
                />

                {/* Subtle Amber Halo Glow */}
                <div className="absolute inset-0 rounded-3xl bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors duration-500 pointer-events-none" />

                {/* Inner Obsidian Glass Card Body */}
                <div className="relative rounded-[22.5px] h-full p-6 sm:p-7 bg-gradient-to-br from-[#162035]/95 via-[#101728]/98 to-[#0a0e19]/98 backdrop-blur-2xl border border-amber-400/25 sm:border-white/10 group-hover:border-amber-400/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl">
                  
                  {/* Decorative Corner Refraction Flare */}
                  <div className="absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br from-amber-500/15 via-amber-400/5 to-transparent rounded-full blur-xl pointer-events-none group-hover:from-amber-400/25 transition-all duration-500" />

                  {/* Watermark Index Number in Top Right */}
                  <span className="absolute -top-3 right-3 text-6xl sm:text-7xl font-black font-heading text-white/[0.035] group-hover:text-amber-400/[0.08] transition-colors duration-500 select-none pointer-events-none">
                    {stat.index}
                  </span>

                  {/* Specular Diagonal Sheen on Hover */}
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />

                  <div>
                    {/* Top Row: Jewel-Cut Obsidian/Amber Icon Pod + Hallmark Badge */}
                    <div className="flex items-center justify-between mb-5 relative z-10">
                      <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-950/40 to-slate-900 border border-amber-400/40 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2),inset_0_1px_2px_rgba(255,255,255,0.15)] flex items-center justify-center group-hover:scale-110 group-hover:border-amber-300 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.45)] group-hover:text-amber-200 transition-all duration-300">
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-500/5 border border-amber-400/30 text-amber-300 shadow-sm group-hover:border-amber-400/60 transition-all whitespace-nowrap shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_6px_rgba(245,158,11,0.8)] shrink-0" />
                        {stat.highlight}
                      </span>
                    </div>

                    {/* Numeric Counter Display */}
                    <div className="min-h-[50px] flex items-center relative z-10">
                      {stat.displayNumber}
                    </div>

                    {/* Metric Label */}
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white mt-2 group-hover:text-amber-300 transition-colors tracking-tight relative z-10">
                      {stat.label}
                    </h3>

                    {/* Description Subtitle */}
                    <p className="text-xs sm:text-sm text-slate-300/90 mt-2 leading-relaxed font-normal relative z-10">
                      {stat.sublabel}
                    </p>
                  </div>

                  {/* Bottom Certified Verification Hallmark Footer */}
                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono relative z-10">
                    <span className="flex items-center gap-1.5 text-amber-300/90 font-medium whitespace-nowrap">
                      <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                      {stat.footnote}
                    </span>
                    <span className="text-amber-400/80 uppercase tracking-wider font-semibold text-[10px] px-2 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/20 whitespace-nowrap shrink-0">
                      VERIFIED
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Architectural Trust Anchor Bar */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-amber-400/20 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-10 text-xs sm:text-sm font-medium text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            <span>Saint-Gobain & Modiguard Certified Float</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            <span>Diamond-Wheel Bevel & Flat Polish</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            <span>Direct North Kolkata Workshop Facility</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            <span>Studio Walk-In: 2/16 K. Bose Sarani</span>
          </div>
        </div>

      </div>
    </section>
  );
}
