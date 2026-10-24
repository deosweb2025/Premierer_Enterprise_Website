import React from 'react';
import { PhoneCall } from 'lucide-react';
import { siteData } from '../../data/siteData';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function FloatingCallButton() {
  const phoneClean = siteData.contact.phone.replace(/[^0-9+]/g, '');
  const whatsappClean = siteData.contact.whatsapp.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    siteData.contact.whatsappDefaultMessage
  )}`;

  return (
    <aside
      aria-label="Instant Contact Options"
      className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none select-none"
    >
      {/* 1. Sleek Icon-Only WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="pointer-events-auto group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-emerald-600 via-[#25D366] to-emerald-400 text-white shadow-lg shadow-emerald-500/35 hover:shadow-xl hover:shadow-emerald-400/50 hover:scale-110 active:scale-95 transition-all duration-300 border border-emerald-200/50 hover:border-white/90 overflow-hidden"
      >
        {/* Specular Glass Sheen Sweep on Hover */}
        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />

        {/* Ambient Top Glass Reflection */}
        <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent pointer-events-none rounded-t-full" />

        {/* Crisp WhatsApp Icon */}
        <WhatsAppIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-white drop-shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10" />

        {/* Active Online Pulse Dot */}
        <span className="absolute top-1.5 right-1.5 flex h-2 w-2 z-20">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-200 border border-emerald-700" />
        </span>

        {/* Optional Desktop Hover Tooltip (Zero text inside button) */}
        <span className="hidden sm:block absolute right-full mr-3 px-2.5 py-1 rounded-md bg-slate-900/95 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide whitespace-nowrap shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none">
          WhatsApp
        </span>
      </a>

      {/* 2. Sleek Icon-Only Direct Phone Call Button */}
      <a
        href={`tel:${phoneClean}`}
        aria-label="Call Premiere Enterprise"
        title="Call 78900 00195"
        className="pointer-events-auto group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/35 hover:shadow-xl hover:shadow-amber-400/50 hover:scale-110 active:scale-95 transition-all duration-300 border border-amber-200/70 hover:border-white/90 overflow-hidden"
      >
        {/* Specular Glass Sheen Sweep on Hover */}
        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />

        {/* Ambient Top Glass Reflection */}
        <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent pointer-events-none rounded-t-full" />

        {/* Subtle Sonar Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-amber-400/30 animate-ping opacity-40 pointer-events-none" />

        {/* Crisp Phone Icon */}
        <PhoneCall className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-slate-950 stroke-[2.2] group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300 relative z-10" />

        {/* Optional Desktop Hover Tooltip (Zero text inside button) */}
        <span className="hidden sm:block absolute right-full mr-3 px-2.5 py-1 rounded-md bg-slate-900/95 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide whitespace-nowrap shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none">
          Call Now
        </span>
      </a>
    </aside>
  );
}
