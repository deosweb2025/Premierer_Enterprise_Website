import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Ruler, 
  Sparkles, 
  SlidersHorizontal, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck2
} from 'lucide-react';
import { siteData } from '../../data/siteData';
import SectionHeading from '../common/SectionHeading';

export default function GlassSpecificationGuide() {
  // Bespoke engineering iconography & metadata for the 4 technical standards
  const specDetails = [
    {
      icon: Ruler,
      category: 'Dimensional Thickness',
      compliance: 'Zero Optical Distortion',
      highlightBadge: 'Float & Toughened'
    },
    {
      icon: Sparkles,
      category: 'Diamond Edge Profile',
      compliance: 'Diamond Belt High Polish',
      highlightBadge: 'Bevelled & Flat Polish'
    },
    {
      icon: SlidersHorizontal,
      category: 'Extruded Sections',
      compliance: 'Multi-Point Weatherproof Seals',
      highlightBadge: 'Domal & Heavy UPVC'
    },
    {
      icon: ShieldCheck,
      category: 'Hardware & Chemical Bonding',
      compliance: 'Grade 304 SS & Neutral Cure',
      highlightBadge: 'Structural Integrity'
    }
  ];

  return (
    <section className="py-24 sm:py-28 bg-gradient-to-b from-[#101524] via-[#141b2c] to-[#0f1422] relative overflow-hidden border-t border-white/10">
      {/* Ambient Lighting Accents (Champagne Gold & Titanium Sky) */}
      <div className="absolute top-1/3 left-1/4 w-[36rem] h-[36rem] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[32rem] h-[32rem] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.4) 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Engineering Benchmark • Quality Assurance"
          title="Architectural Glass & Mirror"
          gradientTitle="Technical Standards"
          subtitle="We adhere to strict engineering benchmarks for glass safety, optical transparency, diamond-wheel edge polishing, and anti-oxidation mirror coatings."
        />

        {/* 4 Technical Standard Cards with Animated Border Beams */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {siteData.specifications.map((spec, idx) => {
            const meta = specDetails[idx] || specDetails[0];
            const IconComponent = meta.icon;

            return (
              <div
                key={idx}
                className="group relative rounded-3xl p-[1.5px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(245,158,11,0.22)] flex flex-col shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
              >
                {/* Traveling Specular Border Beam Animation */}
                <div 
                  className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,rgba(245,158,11,0.25)_330deg,rgba(251,191,36,0.95)_350deg,transparent_360deg)] animate-border-beam opacity-85 sm:opacity-40 sm:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    animationDelay: `${idx * 1.5}s`
                  }}
                />

                {/* Inner Glass Card Container */}
                <div className="relative rounded-[22px] h-full p-6 sm:p-7 bg-gradient-to-br from-[#161e31]/95 via-[#111728]/95 to-[#0d121f]/95 backdrop-blur-2xl border border-amber-400/25 sm:border-white/10 sm:group-hover:border-amber-400/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl">
                  
                  {/* Subtle Inner Ambient Glow in Top-Right Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent pointer-events-none rounded-bl-full opacity-75 sm:opacity-60 sm:group-hover:opacity-100 transition-opacity duration-500" />

                  <div>
                    {/* Top Row: Jewel-Cut Icon + Benchmark Index Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-950/40 to-slate-900 border border-amber-400/40 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] group-hover:text-amber-200 transition-all duration-300">
                        <IconComponent className="w-6 h-6 stroke-[2]" />
                      </div>

                      <span className="font-mono text-[11px] font-bold text-amber-400/90 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-400/25 shadow-sm">
                        STANDARD 0{idx + 1}
                      </span>
                    </div>

                    {/* Category Eyebrow */}
                    <span className="text-[10px] uppercase font-mono text-amber-300 font-bold tracking-widest block mb-1">
                      {meta.category}
                    </span>

                    {/* Standard Title */}
                    <h4 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors duration-300 font-heading leading-snug tracking-tight">
                      {spec.title}
                    </h4>

                    {/* Engineering Specification Range Pill */}
                    <div className="my-3.5 px-3 py-1.5 rounded-lg bg-amber-500/15 border border-amber-400/35 text-xs font-mono font-bold text-amber-300 inline-flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span>{spec.range}</span>
                    </div>

                    {/* Technical Details Description */}
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {spec.details}
                    </p>
                  </div>

                  {/* Bottom Verification Compliance Bar */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="font-medium truncate">{meta.compliance}</span>
                    </div>
                    
                    <span className="text-[10px] font-mono text-amber-400/80 uppercase font-bold shrink-0">
                      IS Benchmark
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Technical Concierge Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel border border-white/15 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
              <FileCheck2 className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h5 className="text-base font-bold text-white">Need Detailed Glass CAD Tolerances or Architect Specification Sheets?</h5>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Our Kolkata technical team provides exact deflection ratings, wind load parameters, and bevel drawings.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="shrink-0 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
          >
            <span>Request Technical Specs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
