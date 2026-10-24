import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Phone, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Award,
  Ruler,
  Factory,
  ChevronRight
} from 'lucide-react';
import { siteData } from '../../data/siteData';
import WhatsAppIcon from '../common/WhatsAppIcon';
import heroMirrors from '../../assets/images/hero-mirrors.jpg';

export default function HomeCTA() {
  const phoneClean = siteData.contact.phone.replace(/[^0-9+]/g, '');
  const whatsappClean = siteData.contact.whatsapp.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    siteData.contact.whatsappDefaultMessage
  )}`;

  return (
    <section className="py-20 sm:py-28 bg-[#07090e] relative overflow-hidden border-t border-amber-500/20">
      {/* 1. Architectural Ambient Background Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/[0.08] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-sky-500/[0.06] rounded-full blur-[150px] pointer-events-none" />

      {/* 2. Top Specular Glass Bevel Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Luxury Architectural Atelier Concierge Pavilion */}
        <div className="relative rounded-3xl p-[1.5px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
          
          {/* Animated Liquid Gold Border Beam Tracing Perimeter */}
          <div 
            className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,rgba(245,158,11,0.25)_330deg,rgba(251,191,36,0.95)_350deg,transparent_360deg)] animate-border-beam opacity-85 sm:opacity-50 pointer-events-none"
          />

          {/* Inner Card Container */}
          <div className="relative rounded-[22px] bg-gradient-to-br from-[#0e1320]/95 via-[#0a0d16]/98 to-[#06080e]/98 backdrop-blur-2xl p-6 sm:p-12 lg:p-14 overflow-hidden border border-amber-400/25 sm:border-white/10">
            
            {/* Soft Ambient Refraction across the card */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Grid Layout: Editorial Split Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column (7 cols): Typography, Narrative & Luxury Action Suite */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                
                {/* Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-xs font-semibold text-amber-300 w-fit mb-6 tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>PREMIERE ATELIER • BESPOKE ARCHITECTURAL COMMISSION</span>
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-heading">
                  Ready to Commission Bespoke{' '}
                  <span className="font-serif italic bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent block mt-1">
                    Glass & Designer Mirrors?
                  </span>
                </h2>

                {/* Compelling Value Narrative */}
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                  Connect directly with our master fabricators for custom dimensions, on-site laser measurements, and direct factory-door quotations in Kolkata.
                </p>

                {/* Luxury Action Suite */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  {/* Primary CTA Button */}
                  <Link
                    to="/contact"
                    className="px-8 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Request Custom Glass Quotation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  {/* WhatsApp Luxury Concierge Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 rounded-xl text-sm font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-emerald-400 shrink-0" />
                    <span>WhatsApp Atelier</span>
                  </a>

                  {/* Direct Phone Call Button */}
                  <a
                    href={`tel:${phoneClean}`}
                    title={`Call ${siteData.contact.phoneDisplay}`}
                    className="px-6 py-4 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 hover:border-amber-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Call Now</span>
                  </a>
                </div>

                {/* 3 Reassurance Value Chips (Refined, architectural format) */}
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Factory className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-medium">Direct Factory Rates</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Ruler className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-medium">Free On-Site Laser Survey</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-medium">100% Certified Glass</span>
                  </div>
                </div>

                {/* Studio Location & Timing Note */}
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{siteData.contact.address}</span>
                  </span>
                  <span className="hidden sm:inline text-slate-600">•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Mon–Sat: 10:00 AM – 8:30 PM</span>
                  </span>
                </div>

              </div>

              {/* Right Column (5 cols): Visual Architectural Glass Showcase Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl group">
                  {/* Real Masterpiece Visual */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                    <img 
                      src={heroMirrors} 
                      alt="Premiere Enterprise Designer Smart LED Mirrors & Bevelled Wall" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Floating Luxury Glass Atelier Badge Overlay */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/40 text-[11px] font-bold text-amber-300 shadow-lg flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>Showroom & Workshop</span>
                  </div>

                  {/* Bottom Glass Caption */}
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#07090e] via-[#07090e]/90 to-transparent">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Master Craftsmanship</p>
                        <p className="text-sm font-semibold text-white mt-0.5">Smart LED Mirrors & Diamond Bevels</p>
                      </div>
                      <Link 
                        to="/gallery" 
                        className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-amber-200 transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
                      >
                        <span>View Work</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
