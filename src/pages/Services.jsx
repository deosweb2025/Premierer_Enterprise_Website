import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scissors, 
  Flame, 
  Palette, 
  Grid, 
  Compass, 
  CheckCircle,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  Award,
  Sparkles,
  ShieldCheck,
  Layers,
  Cpu
} from 'lucide-react';
import { siteData } from '../data/siteData';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import HomeCTA from '../components/home/HomeCTA';
import headerServices from '../assets/images/header-services.jpg';

export default function Services() {
  const iconMap = {
    Scissors: Scissors,
    Grid: Grid,
    ShieldCheck: ShieldCheck,
    Layers: Layers,
    Cpu: Cpu,
    CheckCircle: CheckCircle,
    Flame: Flame,
    Palette: Palette,
    Compass: Compass,
    Sparkles: Sparkles
  };

  const workflowSteps = [
    {
      step: "01",
      icon: Compass,
      title: "Design Consultation & Elevation Review",
      desc: "We analyze your interior elevations, mirror drawings, or glass partition blueprints to recommend optimal thicknesses and edge treatments.",
      milestone: "Architectural CAD Elevation"
    },
    {
      step: "02",
      icon: Maximize2,
      title: "Laser Precision On-Site Measurement",
      desc: "Our senior technicians visit your project site in Kolkata with digital laser meters to survey walls, plumb lines, and cutout clearances.",
      milestone: "Digital Laser ±0.2mm Survey"
    },
    {
      step: "03",
      icon: Scissors,
      title: "In-House Precision Cutting & Bevelling",
      desc: "Float sheets are processed on our cutting table and belt grinding machines to achieve razor-sharp 12mm–25mm diamond bevels.",
      milestone: "Diamond Belt Edge Bevel"
    },
    {
      step: "04",
      icon: Flame,
      title: "Toughening & Thermal Quality Audit",
      desc: "Glass panels pass through horizontal tempering furnaces to reach certified impact resistance compliant with IS 2553 standards.",
      milestone: "IS 2553 Thermal Impact Audit"
    },
    {
      step: "05",
      icon: Award,
      title: "White-Glove Turnkey Installation",
      desc: "Certified fitters arrive with heavy suction equipment, structural anti-fungal silicones, and concealed hardware for a flawless finish.",
      milestone: "Turnkey Suction Fitment"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#131929] via-[#0f1422] to-[#0c101a] text-slate-100 min-h-screen">
      {/* 1. Page Header with Architectural Glass Atelier Background */}
      <PageHeader
        badge="Precision Engineering"
        title="Comprehensive Architectural"
        gradientTitle="Glass Fabrication Services"
        description="From single-millimeter laser measurements to diamond-wheel edge bevelling and turnkey structural installations, discover our specialized glass services in Kolkata."
        breadcrumbs={[{ name: "Services" }]}
        image={headerServices}
      />

      {/* 2. Detailed Services Grid */}
      <section className="py-20 border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Full Fabrication Scope"
            title="Industrial Capabilities With"
            gradientTitle="Artisan Craftsmanship"
            subtitle="Explore how our in-house glass processing workshop handles your residential, commercial, and architectural glass requirements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.services.map((service, idx) => {
              const IconComponent = iconMap[service.icon] || CheckCircle;

              return (
                <div
                  key={service.id}
                  className="group relative rounded-3xl p-[1.5px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(245,158,11,0.22)] flex flex-col shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
                >
                  {/* Traveling Specular Border Beam Animation */}
                  <div 
                    className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,rgba(245,158,11,0.25)_330deg,rgba(251,191,36,0.95)_350deg,transparent_360deg)] animate-border-beam opacity-85 sm:opacity-40 sm:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      animationDelay: `${idx * 1.3}s`
                    }}
                  />

                  {/* Inner Glass Card Content Container */}
                  <div className="relative rounded-[22px] h-full p-6 sm:p-8 bg-gradient-to-br from-[#161e31]/95 via-[#111728]/95 to-[#0d121f]/95 backdrop-blur-2xl border border-amber-400/25 sm:border-white/10 sm:group-hover:border-amber-400/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-amber-950/50 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400 group-hover:text-amber-300 transition-all duration-300 shadow-md">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-bold text-amber-400/90 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-400/25 shadow-sm">
                          SERVICE 0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-heading">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                        {service.desc}
                      </p>

                      <div className="mt-6 pt-5 border-t border-white/5 space-y-2.5">
                        {service.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-white/10">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Inquire This Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Fabrication Workflow Timeline */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#090d16] via-[#101726] to-[#0a0e17] relative overflow-hidden">
        {/* Top & Bottom Specular Bevel Hairline Dividers */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent shadow-[0_1px_15px_rgba(245,158,11,0.35)]" />
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

        {/* Ambient Atmospheric Lighting Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-64 bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-500/8 rounded-full blur-[140px] pointer-events-none" />

        {/* Subtle Architectural Dot Matrix Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.45) 1px, transparent 1px)`,
            backgroundSize: '36px 36px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Process Excellence • Kolkata Atelier"
            title="From Raw Float Sheet to"
            gradientTitle="Flawless Installation"
            subtitle="Our disciplined 5-step fabrication workflow guarantees zero site fitment errors, millimeter precision, and immaculate optical clarity."
          />

          <div className="relative mt-12 sm:mt-16">
            {/* Desktop Horizontal Architectural Flow Spine */}
            <div className="hidden lg:block absolute top-[45px] inset-x-[10%] h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
              {workflowSteps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={idx}
                    className="group relative rounded-3xl p-[1.5px] overflow-hidden transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_25px_60px_rgba(245,158,11,0.25)] flex flex-col shadow-[0_15px_45px_rgba(0,0,0,0.6)]"
                  >
                    {/* Traveling Specular Liquid-Gold Border Beam */}
                    <div 
                      className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,rgba(245,158,11,0.25)_330deg,rgba(251,191,36,0.95)_350deg,transparent_360deg)] animate-border-beam opacity-85 sm:opacity-45 sm:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        animationDelay: `${idx * 1.2}s`
                      }}
                    />

                    {/* Subtle Amber Halo Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors duration-500 pointer-events-none" />

                    {/* Inner Obsidian Glass Card Body */}
                    <div className="relative rounded-[22.5px] h-full p-5 sm:p-6 bg-gradient-to-br from-[#162035]/95 via-[#101728]/98 to-[#0a0e19]/98 backdrop-blur-2xl border border-amber-400/25 sm:border-white/10 group-hover:border-amber-400/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl">
                      
                      {/* Decorative Corner Refraction Flare */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-500/15 via-amber-400/5 to-transparent rounded-full blur-xl pointer-events-none group-hover:from-amber-400/25 transition-all duration-500" />

                      {/* Watermark Index Numeral in Top Right */}
                      <span className="absolute -top-2 right-2 text-6xl sm:text-7xl font-black font-heading text-white/[0.035] group-hover:text-amber-400/[0.08] transition-colors duration-500 select-none pointer-events-none">
                        {step.step}
                      </span>

                      {/* Specular Diagonal Sheen on Hover */}
                      <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />

                      <div className="relative z-10">
                        {/* Top Header Row: Jewel-Cut Icon Pod + Phase Pill */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-950/40 to-slate-900 border border-amber-400/40 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2),inset_0_1px_2px_rgba(255,255,255,0.15)] flex items-center justify-center group-hover:scale-110 group-hover:border-amber-300 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.45)] group-hover:text-amber-200 transition-all duration-300">
                            <StepIcon className="w-5 h-5 stroke-[2.2]" />
                          </div>

                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-500/5 border border-amber-400/30 text-amber-300 shadow-sm group-hover:border-amber-400/60 transition-all whitespace-nowrap">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_6px_rgba(245,158,11,0.8)] shrink-0" />
                            Phase 0{idx + 1}
                          </span>
                        </div>

                        {/* Step Numeral */}
                        <div className="text-2xl sm:text-3xl font-black font-heading text-white flex items-baseline gap-0.5 drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]">
                          <span>{step.step}</span>
                          <span className="text-amber-400 text-lg font-mono">.</span>
                        </div>

                        {/* Step Title */}
                        <h4 className="text-sm sm:text-base font-bold font-heading text-white mt-2 group-hover:text-amber-300 transition-colors tracking-tight leading-snug">
                          {step.title}
                        </h4>

                        {/* Step Description */}
                        <p className="text-xs text-slate-300/90 mt-2 leading-relaxed font-normal">
                          {step.desc}
                        </p>
                      </div>

                      {/* Bottom Engineering Milestone Footer */}
                      <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono relative z-10">
                        <span className="flex items-center gap-1.5 text-amber-300/90 font-medium whitespace-nowrap text-[10.5px]">
                          <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                          {step.milestone}
                        </span>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Architectural Trust Anchor Ribbon */}
          <div className="mt-12 sm:mt-16 pt-6 border-t border-amber-400/20 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-10 text-xs sm:text-sm font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              <span>Zero Site Fitment Tolerances</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              <span>In-House Diamond Bevelling</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              <span>Turnkey On-Site Installation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              <span>10+ Years Kolkata Craft</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Closing CTA */}
      <HomeCTA />
    </div>
  );
}
