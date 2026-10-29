import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { siteData } from '../../data/siteData';
import Logo from '../common/Logo';
import footerLuxuryTexture from '../../assets/images/footer-luxury-texture.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#06080e] text-slate-300 pt-16 pb-12 overflow-hidden border-t border-amber-500/25">
      {/* 1. Ultra-Luxury Smoked Obsidian Glass & Champagne Stardust Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={footerLuxuryTexture}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-125 saturate-125 opacity-85 scale-100"
        />
        {/* Soft Vignette Tint — Keeps texture vividly visible while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06080e]/60 via-[#06080e]/30 to-[#040508]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_40%,transparent_20%,rgba(4,5,8,0.75)_95%)]" />
      </div>

      {/* 2. Micro Prismatic Glass Luster (Ultra-subtle, non-repetitive depth) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `radial-gradient(rgba(251, 191, 36, 0.6) 0.75px, transparent 0.75px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* 3. Top Specular Glass Bevel Line with Subtle Golden Refraction */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent z-20 shadow-[0_1px_8px_rgba(245,158,11,0.2)]" />

      {/* 4. Ambient Luxury Illumination Orbs */}
      <div className="absolute -top-16 left-1/3 w-[600px] h-[280px] bg-amber-500/[0.08] rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[280px] bg-sky-500/[0.06] rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Profile with Real Logo */}
          <div className="lg:col-span-2 flex flex-col">
            <Link to="/" className="inline-block mb-4">
              <Logo size="lg" showTagline={true} />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              {siteData.company.description}
            </p>

            <div className="flex items-center gap-2 p-3 rounded-xl glass-panel border border-amber-500/20 max-w-sm text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Certified Quality Glass, Mirror Wall Panels, UPVC & Aluminium Slidings.</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-heading flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteData.navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-amber-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions & Infrastructure (From Client Screenshot - Routed to /services) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-heading flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Solutions Catalog
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Glass & Mirror Panels
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Smart LED Designer Mirrors
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Toughened Glass Partitions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Frameless Glass Doors
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Diamond Bevelled Mirror Walls
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  UPVC Windows & Doors
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Aluminium Sliding Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Architectural Hardware & Silicon
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">
                  Industrial Epoxy Flooring
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-heading flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">{siteData.contact.displayAddress}</span>
                  <a
                    href={siteData.contact.mapShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${siteData.contact.phoneRaw}`}
                  className="text-white hover:text-amber-300 font-bold transition-colors"
                >
                  {siteData.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="hover:text-white transition-colors truncate text-amber-300"
                >
                  {siteData.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{siteData.contact.businessHours.weekdays}</span>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-white/5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Request Project Quotation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Footer Bottom with Mandatory Attribution */}
        <div className="pt-8 flex flex-col items-center justify-center text-center gap-2 text-xs text-slate-400">
          <p>
            © {currentYear} {siteData.company.name}. 2/16, K. Bose Sarani, Kolkata - 700080.
          </p>

          <p className="flex items-center justify-center">
            <span>Designed & Developed by</span>
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
