import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scissors, 
  Grid, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Flame, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { siteData } from '../../data/siteData';
import SectionHeading from '../common/SectionHeading';

export default function FeaturedServices() {
  const iconMap = {
    Scissors: Scissors,
    Grid: Grid,
    Layers: Layers,
    Cpu: Cpu,
    CheckCircle: ShieldCheck,
    Flame: Flame
  };

  return (
    <section className="py-24 sm:py-28 bg-gradient-to-b from-[#0f1422] via-[#131929] to-[#101524] relative overflow-hidden border-t border-white/10">
      {/* Ambient Lighting Accents (Champagne Gold & Titanium Sky) */}
      <div className="absolute top-1/3 -right-32 w-[34rem] h-[34rem] bg-amber-500/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[30rem] h-[30rem] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Architectural Dot Matrix Grid Background */}
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
          badge="Precision Engineering • Kolkata Workshop"
          title="End-to-End Precision"
          gradientTitle="Glass Fabrication"
          subtitle="From single-millimeter laser measurements to diamond-wheel edge bevelling and turnkey on-site installation across Kolkata."
        />

        {/* Services Grid with Animated Glass Edge Border Beam */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteData.services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || ShieldCheck;

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl p-[1.5px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(245,158,11,0.22)] flex flex-col shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
              >
                {/* Traveling Specular Border Beam (Simulating Light Refraction through Glass) */}
                <div 
                  className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,rgba(245,158,11,0.25)_330deg,rgba(251,191,36,0.95)_350deg,transparent_360deg)] animate-border-beam opacity-85 sm:opacity-40 sm:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    animationDelay: `${idx * 1.4}s`
                  }}
                />

                {/* Outer Glow Halo */}
                <div className="absolute inset-0 rounded-3xl bg-amber-500/5 sm:bg-amber-500/0 sm:group-hover:bg-amber-500/5 transition-colors duration-500 pointer-events-none" />

                {/* Inner Glass Card Content Container */}
                <div className="relative rounded-[22px] h-full p-6 sm:p-8 bg-gradient-to-br from-[#161e31]/95 via-[#111728]/95 to-[#0d121f]/95 backdrop-blur-2xl border border-amber-400/25 sm:border-white/10 sm:group-hover:border-amber-400/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl">
                  
                  {/* Inner Ambient Glow & Specular Sheen in Card Corner */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent pointer-events-none rounded-bl-full opacity-75 sm:opacity-60 sm:group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div>
                    {/* Top Header: Jewel-Cut Frosted Icon + Index Pill */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-950/40 to-slate-900 border border-amber-400/40 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] group-hover:text-amber-200 transition-all duration-300">
                        <IconComponent className="w-6 h-6 stroke-[2]" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-amber-400/90 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-400/25 shadow-sm">
                          0{idx + 1}
                        </span>
                      </div>
                    </div>

                    {/* Service Title with High-Contrast Typography */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors duration-300 font-heading tracking-tight leading-snug">
                      {service.title}
                    </h3>

                    {/* Service Narrative Description */}
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                      {service.desc}
                    </p>

                    {/* Feature Bullet Points with Luxury Micro-Indicators */}
                    <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                      {service.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 stroke-[2]" />
                          <span className="font-medium">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                    <Link
                      to="/services"
                      className="text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 flex items-center gap-2 group-hover:translate-x-1 transition-all duration-300 cursor-pointer"
                    >
                      <span>View Technical Specs</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    
                    <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                      In-House
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Architectural Concierge Banner */}
        <div className="mt-16 p-6 sm:p-10 rounded-3xl glass-panel border border-amber-500/30 bg-gradient-to-r from-[#161e31] via-[#121827] to-[#161e31] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Specular Top Line */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent pointer-events-none" />
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold font-mono tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>TECHNICAL DRAWINGS & ESTIMATES</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
              Need Custom Edge Bevels or Technical Glass CAD Drawings?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Send your architectural blueprints or interior floor plans for a complimentary fabrication feasibility review and direct manufacturer estimate from our Kolkata studio.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-xl shadow-amber-500/30 hover:shadow-amber-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Request Technical Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:7890000195"
              className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm glass-panel border border-white/20 text-white hover:border-amber-400/50 hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Call +91 78900 00195</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
