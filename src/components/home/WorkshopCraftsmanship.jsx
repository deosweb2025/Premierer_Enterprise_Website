import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Factory, 
  Cpu, 
  Hammer, 
  Eye, 
  ArrowRight, 
  Sparkles, 
  Maximize2,
  Users
} from 'lucide-react';
import { siteData } from '../../data/siteData';
import SectionHeading from '../common/SectionHeading';
import ImageLightbox from '../common/ImageLightbox';

export default function WorkshopCraftsmanship() {
  const [lightboxState, setLightboxState] = useState({ isOpen: false, item: null, index: 0 });

  const workshopImages = [
    {
      id: 10,
      title: "Showroom & Workshop Storefront Entrance",
      category: "Kolkata Facility",
      tag: "Walk-In Studio",
      image: siteData.gallery[9].image, // pic11
      objectPosition: "object-top",
      description: "Street-level entrance of Premiere Enterprise at 2/16, K. Bose Sarani, Kolkata - 700080 with sliding glass frontage and consultation desk.",
      specs: "2/16 K. Bose Sarani • Direct Walk-Ins • Active Fabrication"
    },
    {
      id: 11,
      title: "Glass Cutting Workbench & Float Stock",
      category: "In-House Workshop",
      tag: "Cutting Floor",
      image: siteData.gallery[10].image, // pic12
      description: "Spacious fabrication floor with heavy-duty glass cutting table, float glass slabs, mirror inventory, and fabricated UPVC window frames.",
      specs: "Precision Cutting Table • Float Stock • UPVC Assembly"
    },
    {
      id: 8,
      title: "Precision Edge Grinding & Belt Polishing",
      category: "In-House Machinery",
      tag: "Diamond Wheel",
      image: siteData.gallery[7].image, // pic8
      description: "Our heavy-duty industrial belt polisher and custom glass cutting table in Kolkata, delivering flawless flat polish and bevelled edges.",
      specs: "0.2mm Tolerance • Diamond Wheel Belt • Flat & Bevel Finish"
    },
    {
      id: 12,
      title: "Architectural Textured & Patterned Glass Inventory",
      category: "Raw Inventory",
      tag: "Fluted Stock",
      image: siteData.gallery[11].image, // pic14
      description: "Specialized textured, reeded, and embossed architectural safety glass panels stacked ready for luxury shower enclosures and privacy partitions.",
      specs: "Textured & Fluted Stock • High Privacy Diffusion • In-House Processing"
    }
  ];

  const handleOpenLightbox = (index) => {
    setLightboxState({
      isOpen: true,
      item: workshopImages[index],
      index
    });
  };

  return (
    <section className="py-24 sm:py-28 bg-gradient-to-b from-[#101524] via-[#151c2e] to-[#0f1422] relative overflow-hidden border-t border-white/10">
      {/* Ambient Lighting Accents (Warm Amber Gold & Titanium Sky) */}
      <div className="absolute top-1/3 right-1/4 w-[36rem] h-[36rem] bg-amber-500/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[32rem] h-[32rem] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

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
          badge="Direct In-House Manufacturing"
          title="Inside Our Kolkata"
          gradientTitle="Glass Fabrication Workshop"
          subtitle="Unlike middlemen or resellers, Premiere Enterprise operates an in-house glass processing workshop equipped with heavy-duty cutting tables, belt grinders, and polishing machinery."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Workshop Photos Grid with Card Border Animation & Click to Zoom */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {workshopImages.map((imgItem, idx) => (
              <div
                key={imgItem.id}
                className="group relative rounded-3xl p-[1.5px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(245,158,11,0.22)] cursor-pointer flex flex-col shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
                onClick={() => handleOpenLightbox(idx)}
              >
                {/* Traveling Specular Border Beam Animation */}
                <div 
                  className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,rgba(245,158,11,0.25)_330deg,rgba(251,191,36,0.95)_350deg,transparent_360deg)] animate-border-beam opacity-85 sm:opacity-40 sm:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    animationDelay: `${idx * 1.6}s`
                  }}
                />

                {/* Inner Card Container */}
                <div className="relative rounded-[22px] overflow-hidden bg-gradient-to-br from-[#161e31]/95 via-[#111728]/95 to-[#0d121f]/95 border border-amber-400/25 sm:border-white/10 sm:group-hover:border-amber-400/40 transition-all duration-500 flex flex-col justify-between h-full shadow-xl">
                  
                  {/* Photo Visual Stage */}
                  <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-950">
                    <img
                      src={imgItem.image}
                      alt={imgItem.title}
                      className={`w-full h-full object-cover ${imgItem.objectPosition || 'object-center'} group-hover:scale-108 transition-transform duration-700 ease-out`}
                    />
                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f]/95 via-[#0d121f]/30 to-transparent pointer-events-none" />

                    {/* Top Left Tag Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/40 text-[11px] font-bold text-amber-300 shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{imgItem.tag}</span>
                    </div>

                    {/* Top Right Zoom Trigger */}
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/80 text-white backdrop-blur-md border border-white/20 group-hover:bg-amber-400 group-hover:text-slate-950 group-hover:border-amber-400 transition-all duration-300 shadow-xl">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>

                    {/* Image Caption & Category */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block mb-1">
                        {imgItem.category}
                      </span>
                      <h4 className="text-sm font-bold text-white line-clamp-1 leading-snug group-hover:text-amber-200 transition-colors">
                        {imgItem.title}
                      </h4>
                    </div>
                  </div>

                  {/* Bottom Technical Spec Bar */}
                  <div className="p-3.5 bg-slate-900/80 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-300 text-[11px] truncate pr-2">
                      {imgItem.specs.split('•')[0]}
                    </span>
                    <span className="font-mono text-amber-400 font-bold text-[11px] flex items-center gap-1 shrink-0">
                      <Eye className="w-3.5 h-3.5" />
                      <span>4K Box</span>
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Workshop Capabilities & Direct Advantage */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/35 text-xs font-bold uppercase tracking-wider text-amber-300 mb-4 shadow-sm">
                <Factory className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero Middlemen • 100% Quality Control</span>
              </div>

              {/* Heading with Gold Gradient Serif Accent */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading leading-tight drop-shadow-sm">
                Why In-House Fabrication Sets{' '}
                <span className="font-serif italic bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Premiere Apart
                </span>
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                By investing in high-precision edge-beveling machinery, diamond grinding belts, and computerized scoring tables, we maintain complete end-to-end quality control from raw float sheets to final turnkey installations.
              </p>

              <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                What truly powers our consistent execution is our <span className="text-amber-300 font-bold">highly skilled personnel and robust manpower</span>. With a large in-house team of seasoned glass craftsmen, CNC fabricators, structural glazing specialists, and certified on-site installers, we have the capacity to handle large commercial and luxury residential projects smoothly — delivering with zero bottlenecks, rapid turnarounds, and flawless precision.
              </p>

              {/* 4 Capability Cards with Border Highlights & Jewel Icons */}
              <div className="mt-6 space-y-3.5">
                
                {/* Benefit 1 */}
                <div className="p-4 rounded-2xl glass-panel border border-white/10 border-l-2 border-l-amber-400 bg-slate-900/50 hover:bg-slate-900/80 hover:border-amber-400/30 transition-all duration-300 flex items-start gap-3.5 group/cap">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 group-hover/cap:bg-amber-400 group-hover/cap:text-slate-950 transition-colors shadow-sm">
                    <Cpu className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-bold text-white group-hover/cap:text-amber-200 transition-colors">
                        0.2mm Precision Scoring & Cutting
                      </h5>
                      <span className="text-[10px] font-mono text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/20">
                        ±0.2mm
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Laser-calibrated manual and CNC scoring for complex geometric angles, chevrons, circles, and irregular arches.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="p-4 rounded-2xl glass-panel border border-white/10 border-l-2 border-l-amber-400 bg-slate-900/50 hover:bg-slate-900/80 hover:border-amber-400/30 transition-all duration-300 flex items-start gap-3.5 group/cap">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 group-hover/cap:bg-amber-400 group-hover/cap:text-slate-950 transition-colors shadow-sm">
                    <Hammer className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-bold text-white group-hover/cap:text-amber-200 transition-colors">
                        Diamond-Wheel Belt Bevelling
                      </h5>
                      <span className="text-[10px] font-mono text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/20">
                        12mm–25mm
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Heavy-duty abrasive belt machines produce sparkling, uniform 12mm–25mm bevels on mirrors and architectural glass partitions.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="p-4 rounded-2xl glass-panel border border-white/10 border-l-2 border-l-amber-400 bg-slate-900/50 hover:bg-slate-900/80 hover:border-amber-400/30 transition-all duration-300 flex items-start gap-3.5 group/cap">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 group-hover/cap:bg-amber-400 group-hover/cap:text-slate-950 transition-colors shadow-sm">
                    <ShieldCheck className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-bold text-white group-hover/cap:text-amber-200 transition-colors">
                        Certified Safety Toughening
                      </h5>
                      <span className="text-[10px] font-mono text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/20">
                        IS 2553
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Heat-treated safety glass compliance assuring extreme mechanical strength and structural peace of mind.
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="p-4 rounded-2xl glass-panel border border-white/10 border-l-2 border-l-amber-400 bg-slate-900/50 hover:bg-slate-900/80 hover:border-amber-400/30 transition-all duration-300 flex items-start gap-3.5 group/cap">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 group-hover/cap:bg-amber-400 group-hover/cap:text-slate-950 transition-colors shadow-sm">
                    <Users className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-bold text-white group-hover/cap:text-amber-200 transition-colors">
                        Skilled Personnel & Ample Manpower
                      </h5>
                      <span className="text-[10px] font-mono text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/20">
                        Smooth Workflow
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Equipped with experienced glass masters and adequate manpower to execute projects smoothly, reliably, and on-time across Bengal.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-3.5">
              <Link
                to="/about"
                className="px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-xl shadow-amber-500/30 hover:shadow-amber-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Read Full Craftsmanship Heritage</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm glass-panel border border-white/20 text-white hover:border-amber-400/50 hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule Studio Visit</span>
              </Link>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox for Workshop images */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ ...lightboxState, isOpen: false })}
        currentImage={lightboxState.item}
        images={workshopImages}
        currentIndex={lightboxState.index}
        onPrev={() => {
          const nextIdx = (lightboxState.index - 1 + workshopImages.length) % workshopImages.length;
          setLightboxState({ ...lightboxState, index: nextIdx, item: workshopImages[nextIdx] });
        }}
        onNext={() => {
          const nextIdx = (lightboxState.index + 1) % workshopImages.length;
          setLightboxState({ ...lightboxState, index: nextIdx, item: workshopImages[nextIdx] });
        }}
      />
    </section>
  );
}
