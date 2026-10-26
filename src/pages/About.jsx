import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Eye,
  Compass,
  Gem,
  ScanLine,
  CheckCircle2,
  Award,
  Users,
  Wrench,
  Clock
} from 'lucide-react';
import { siteData, siteImages } from '../data/siteData';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import ImageLightbox from '../components/common/ImageLightbox';
import HomeCTA from '../components/home/HomeCTA';
import headerAbout from '../assets/images/header-about.jpg';

export default function About() {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [lightboxState, setLightboxState] = useState({ isOpen: false, item: null, index: 0 });

  const aboutShowcaseImages = [
    {
      id: "part-1",
      title: "Frameless Toughened Glass Architectural Partitions",
      category: "Partitions",
      image: siteImages.toughenedPartitions,
      objectPosition: "object-center",
      description: "Ultra-luxury acoustic frameless 10mm/12mm toughened glass divider walls engineered for commercial offices, boardrooms, and modern residences.",
      specs: "10mm–12mm Toughened Safety Glass • Concealed Glazing Channels • Acoustic Seals"
    },
    {
      id: "shower-1",
      title: "Luxury Bespoke Frameless Shower Cubicles",
      category: "Shower Cubicles",
      image: siteImages.showerCubicles,
      objectPosition: "object-center",
      description: "Ultra-luxury 100% frameless walk-in shower enclosures engineered with 10mm crystal-clear toughened safety glass, minimal SS 304 hinges, and hydrophobic nano-shield protection.",
      specs: "10mm Crystal Clear Safety Glass • Minimalist SS 304 Hinges • Nano Hydrophobic Shield"
    },
    {
      id: "shower-2",
      title: "Frameless Walk-In Glass Shower Architecture",
      category: "Shower Enclosure",
      image: siteImages.showerEnclosures,
      objectPosition: "object-center",
      description: "Contemporary curbless frameless shower cabin with zero visual barriers, concealed floor drainage, and premium stainless steel wall clamps.",
      specs: "Frameless Clear Tempered Glass • Zero Threshold Walk-In • SS 304 Clamps"
    },
    {
      id: "hard-1",
      title: "High-Precision Architectural Hardware Systems",
      category: "Hardware",
      image: siteImages.architecturalHardware,
      objectPosition: "object-center",
      description: "Grade SS 304 patch fittings, heavy-duty hydraulic floor springs, spider brackets, glass door handles, and structural glazing silicones displayed in our showroom.",
      specs: "Grade SS 304 / SS 316 Stainless Steel • Hydraulic Floor Springs • 500k Cycle Tested"
    },
    {
      id: 10,
      title: "Premiere Enterprise Showroom & Workshop Storefront",
      category: "Kolkata Facility",
      image: siteData.company.storefrontImage, // pic11
      objectPosition: "object-top", // Ensures the full signboard banner is completely visible
      description: "Street-level entrance of Premiere Enterprise at 2/16, K. Bose Sarani, Kolkata - 700080, featuring sliding glass frontage and walk-in consultation desk.",
      specs: "2/16, K. Bose Sarani, Kolkata - 700080 • Direct Walk-Ins Welcome"
    },
    {
      id: 11,
      title: "In-House Glass Cutting & Fabrication Floor",
      category: "Fabrication Unit",
      image: siteData.company.workshopImage, // pic12
      objectPosition: "object-center",
      description: "Our active Kolkata fabrication facility equipped with heavy-duty glass cutting table, float glass slabs, mirror inventory, and UPVC assemblies.",
      specs: "Precision Workbench • Float Glass Stocks • In-House Fabrication"
    },
    {
      id: 6,
      title: "Premiere Enterprise Showroom Display",
      category: "Showroom",
      image: siteData.gallery[5].image, // pic6
      objectPosition: "object-center",
      description: "Our dedicated showroom showcasing full-height LED backlit mirrors, diamond bevelled mirror partition walls, and bespoke artistic mirrors in Kolkata.",
      specs: "Floor-to-Ceiling Mirrors • Dual CCT LED Touch • Custom Bevelled Panelling"
    },
    {
      id: 13,
      title: "Official Facility Signage & Registered GSTIN",
      category: "Facility Signage",
      image: siteData.company.signboardImage, // pic10
      objectPosition: "object-center",
      description: "Official facility signboard verifying our comprehensive service scope across architectural glass, mirrors, partitions, UPVC, aluminium, and epoxy.",
      specs: "Verified GSTIN: 19AJFPP0751P1ZO • spells quality • 10+ Years Craft"
    }
  ];

  const handleOpenLightbox = (index) => {
    setLightboxState({ isOpen: true, item: aboutShowcaseImages[index], index });
  };

  const engineeringStandards = [
    {
      step: "01",
      tag: "TOLERANCE ±0.5MM",
      title: "Architectural Precision",
      subtitle: "High-Tensile Toughened & Sliding Systems",
      description: "Precision-engineered toughened glass partitions, frameless acoustic shower cubicles, heavy-gauge aluminium sliding systems, and UPVC architectural infrastructure built to exacting millimetric tolerances.",
      icon: Compass,
      highlights: [
        "10mm–12mm Toughened Safety Glass",
        "Heavy-Duty Concealed Glazing Hardware",
        "Acoustic Plumb Sealing & Alignment"
      ]
    },
    {
      step: "02",
      tag: "12MM–25MM BEVELS",
      title: "Diamond Bevel Symmetry",
      subtitle: "Prismatic Light Refraction Geometry",
      description: "Multi-stage diamond-wheel edge beveling hand-inspected under high-lumen optical lamps. Guarantees razor-sharp perimeter reflections and seamless interlocking symmetry for statement mirror walls.",
      icon: Gem,
      highlights: [
        "Micro-Polished Bevel Edge Angles",
        "Zero Corner Chipping or Micro-Haze",
        "Prismatic Multi-Angle Light Reflection"
      ]
    },
    {
      step: "03",
      tag: "SAINT-GOBAIN PRIME",
      title: "5mm Ultra-HD Clarity Glass",
      subtitle: "Copper-Free Anti-Oxidation Silvering",
      description: "Direct atelier sourcing of prime Saint-Gobain and ModiGuard float glass. Multi-layer copper-free silvering eliminates distortion and shields backing from humid Kolkata climate degradation.",
      icon: ShieldCheck,
      highlights: [
        "True Color Fidelity & 99.2% Reflection",
        "Anti-Tarnish Humidity & Steam Barrier",
        "Zero Green-Edge Distortion Floating"
      ]
    },
    {
      step: "04",
      tag: "3D LASER SURVEY",
      title: "Digital Laser Site Survey",
      subtitle: "Zero-Gap Masonry Plumb Mapping",
      description: "Digital laser distance and 3D angle surveying across masonry plumb lines prior to cutting float slabs, ensuring zero-gap architectural flush fitting even against uneven heritage walls.",
      icon: ScanLine,
      highlights: [
        "Digital Laser Plumb & Level Survey",
        "Zero On-Site Cutting Discrepancies",
        "100% Factory-Door Execution Guarantee"
      ]
    }
  ];

  const currentShowcase = aboutShowcaseImages[selectedImageIdx];

  return (
    <div className="bg-gradient-to-b from-[#131929] via-[#0f1422] to-[#0c101a] text-slate-100 min-h-screen">
      {/* 1. Cinematic Page Header with Bespoke Architectural Atelier Background */}
      <PageHeader
        badge="About Premiere Enterprise"
        title="Masters of Architectural Glass &"
        gradientTitle="Bespoke Mirrors"
        description="Built with over a decade of perfection and craftsmanship, Premiere Enterprise delivers specialized architectural glass, smart LED mirrors, bevelled wall panels, and structural infrastructure across Kolkata."
        breadcrumbs={[{ name: "About Us" }]}
        image={headerAbout}
      />

      {/* 2. Story & Identity Section */}
      <section className="py-20 border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Visual Showcase with Box Screen Click & Thumbnails */}
            <div className="lg:col-span-6 relative flex flex-col gap-4">
              <div
                className="relative rounded-2xl overflow-hidden glass-panel border border-amber-500/30 shadow-2xl cursor-pointer group"
                onClick={() => handleOpenLightbox(selectedImageIdx)}
                title="Click to view in high definition lightbox"
              >
                <img
                  src={currentShowcase.image}
                  alt={currentShowcase.title}
                  className={`w-full h-[430px] sm:h-[490px] lg:h-[520px] object-cover ${currentShowcase.objectPosition || 'object-top'} group-hover:scale-102 transition-transform duration-700`}
                />
                {/* Vignette focused on bottom card so the top banner remains crystal clear */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent pointer-events-none" />

                {/* Bottom Card: Caption & Details (No top badges blocking the banner) */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/10 shadow-2xl">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-[11px] font-bold text-amber-300">
                      {currentShowcase.category}
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium flex items-center gap-1.5 group-hover:text-amber-300 transition-colors">
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>View Full Image</span>
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug">{currentShowcase.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {currentShowcase.description}
                  </p>
                  <span className="text-[11px] text-amber-400 font-mono mt-1.5 block truncate">
                    {currentShowcase.specs}
                  </span>
                </div>
              </div>

              {/* Interactive Showcase Thumbnails */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {aboutShowcaseImages.map((thumb, idx) => (
                  <button
                    key={thumb.id}
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`relative rounded-xl overflow-hidden h-20 border-2 transition-all duration-300 cursor-pointer ${
                      selectedImageIdx === idx
                        ? 'border-amber-400 shadow-lg shadow-amber-500/30 scale-102 ring-2 ring-amber-400/30'
                        : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
                    }`}
                  >
                    <img
                      src={thumb.image}
                      alt={thumb.title}
                      className={`w-full h-full object-cover ${thumb.objectPosition || 'object-top'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <span className="absolute bottom-1 inset-x-1 text-[9px] font-bold text-white text-center truncate">
                      {thumb.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold mb-3">
                Our Craftsmanship Ethos
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading leading-tight">
                Dedicated Exclusively to the Art & Science of{' '}
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent font-serif italic">
                  Pure Glass
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                At Premiere Enterprise, glass is not simply an architectural component — it is a canvas of light, reflection, and spatial transformation. With over 10 years of craft excellence in Kolkata, we specialize in glass fabrication, designer LED mirrors, and modern architectural infrastructure.
              </p>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                By investing in high-precision edge-beveling machinery, diamond grinding belts, and computerized scoring tables, we maintain complete end-to-end quality control from raw float sheets to final turnkey installations.
              </p>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                What truly powers our consistent execution is our <span className="text-amber-300 font-semibold">highly skilled personnel and robust manpower</span>. With a large in-house team of seasoned glass craftsmen, CNC fabricators, structural glazing specialists, and certified on-site installers, we have the capacity to handle large commercial and luxury residential projects smoothly — delivering with zero bottlenecks, rapid turnarounds, and flawless precision.
              </p>

              {/* Core Pillars Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl glass-panel border border-white/5 bg-slate-950/60">
                  <ShieldCheck className="w-6 h-6 text-amber-400 mb-2" />
                  <h4 className="text-sm font-bold text-white">Copper-Free HD Mirrors</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Zero oxidation or black-edge degradation, even in humid bathroom environments.
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-panel border border-white/5 bg-slate-950/60">
                  <Cpu className="w-6 h-6 text-yellow-400 mb-2" />
                  <h4 className="text-sm font-bold text-white">Dual LED CCT Technology</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Warm 3000K & Daylight 6500K LEDs with feather-touch dimming and defoggers.
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-panel border border-amber-400/20 bg-slate-950/60">
                  <Users className="w-6 h-6 text-amber-400 mb-2" />
                  <h4 className="text-sm font-bold text-white">Skilled In-House Craftsmen</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Trained technicians handling precision 0.2mm scoring, beveling, and bespoke fabrication.
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-panel border border-amber-400/20 bg-slate-950/60">
                  <Clock className="w-6 h-6 text-yellow-400 mb-2" />
                  <h4 className="text-sm font-bold text-white">Ample Manpower for Smooth Work</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Substantial workforce capacity to manage multiple on-site and workshop projects without delays.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2.5. Skilled Personnel & Manpower Strength Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#0f1422] via-[#131929] to-[#07090e] border-b border-white/5 relative overflow-hidden">
        {/* Ambient lighting orb */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/[0.06] rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Workforce Capacity & Execution Mastery"
            title="Powered by Skilled Artisans &"
            gradientTitle="Ample Manpower"
            subtitle="Equipped with seasoned glass craftsmen, certified on-site technicians, and adequate manpower to execute projects smoothly without delays or bottlenecks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl glass-panel border border-amber-400/20 bg-slate-900/60 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-300 flex items-center justify-center mb-4 shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Master Glass Technicians</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Experienced in-house craftsmen with over a decade of expertise in precision glass cutting, 0.2mm tolerance edge-beveling, and structural fitments.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-amber-400/20 bg-slate-900/60 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-300 flex items-center justify-center mb-4 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Ample Manpower Capacity</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Substantial workforce capacity to manage multiple commercial floor partitions, hotel fitments, and luxury residential orders simultaneously.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-amber-400/20 bg-slate-900/60 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-300 flex items-center justify-center mb-4 shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Smooth, On-Time Delivery</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Streamlined workflow coordination from initial laser site surveys to workshop fabrication and safe transport guarantees zero project delays.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-amber-400/20 bg-slate-900/60 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-300 flex items-center justify-center mb-4 shadow-sm">
                <Wrench className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Turnkey On-Site Fitment</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Certified on-site glazing crews equipped with laser alignment tools and heavy-duty suction lifters ensure millimetric plumb fit and clean finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4 Quality Standards of Premiere Enterprise */}
      <section className="py-24 sm:py-28 bg-[#07090e] relative overflow-hidden border-b border-white/5">
        {/* Ambient Luxury Lighting Refractions */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-amber-500/[0.07] via-yellow-500/[0.04] to-sky-500/[0.05] rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="The Premiere Difference"
            title="Four Non-Negotiable"
            gradientTitle="Engineering Standards"
            subtitle="Every order fabricated in our workshop conforms to rigorous quality and safety benchmarks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {engineeringStandards.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.step}
                  className="group relative rounded-3xl p-[1.5px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(245,158,11,0.18)] flex flex-col shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
                >
                  {/* Traveling Specular Border Beam Animation */}
                  <div 
                    className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,rgba(245,158,11,0.25)_330deg,rgba(251,191,36,0.95)_350deg,transparent_360deg)] animate-border-beam opacity-85 sm:opacity-40 sm:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      animationDelay: `${(parseInt(item.step) - 1) * 1.5}s`
                    }}
                  />

                  {/* Inner Card Container */}
                  <div className="relative rounded-[22px] bg-gradient-to-b from-[#111728]/95 via-[#0d121f]/98 to-[#07090e]/98 backdrop-blur-2xl p-6 sm:p-7 flex flex-col justify-between flex-1 overflow-hidden border border-amber-400/25 sm:border-white/10 sm:group-hover:border-amber-400/40">
                    
                    {/* Top Specular Glass Reflection Line */}
                    <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                    {/* Subtle Inner Glow */}
                    <div className="absolute -top-16 -right-16 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                    {/* Giant Architectural Watermark Step Number */}
                    <span className="absolute top-4 right-5 text-6xl sm:text-7xl font-black font-heading text-white/[0.04] group-hover:text-amber-400/[0.12] transition-colors duration-500 select-none pointer-events-none">
                      {item.step}
                    </span>

                    {/* Card Top: Icon Pod & Step Badge */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-3 mb-6">
                        {/* Glowing Glass Icon Pod */}
                        <div className="w-12 h-12 rounded-2xl p-2.5 bg-gradient-to-br from-amber-500/20 to-amber-950/40 border border-amber-400/35 shadow-[0_0_20px_rgba(245,158,11,0.15)] group-hover:border-amber-300 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-amber-300 group-hover:text-amber-200 transition-colors" />
                        </div>

                        {/* Engineering Spec Chip */}
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500/10 border border-amber-400/25 text-amber-300/90 shadow-sm">
                          {item.tag}
                        </span>
                      </div>

                      {/* Heading & Subtitle */}
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading tracking-tight group-hover:text-amber-200 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-400/80 mt-1">
                        {item.subtitle}
                      </p>

                      {/* Narrative */}
                      <p className="text-xs text-slate-300 mt-3.5 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Card Bottom: Highlights Checklist */}
                    <div className="relative z-10 mt-6 pt-5 border-t border-white/10 space-y-2">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="leading-tight font-medium text-slate-200/90">{highlight}</span>
                        </div>
                      ))}

                      {/* Certified Benchmark Footnote */}
                      <div className="pt-3 flex items-center justify-between text-[11px] text-amber-400/70 font-mono">
                        <span className="flex items-center gap-1">
                          <Award className="w-3 h-3 text-amber-400" />
                          <span>Premiere Benchmark</span>
                        </span>
                        <span className="text-slate-500 group-hover:text-amber-300 transition-colors">Standard #{item.step}</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Closing CTA */}
      <HomeCTA />

      {/* Lightbox for About page preview */}
      {lightboxState.item && (
        <ImageLightbox
          isOpen={lightboxState.isOpen}
          onClose={() => setLightboxState({ isOpen: false, item: null, index: 0 })}
          currentImage={lightboxState.item}
          images={aboutShowcaseImages}
          currentIndex={lightboxState.index}
          onPrev={() => {
            const nextIdx = (lightboxState.index - 1 + aboutShowcaseImages.length) % aboutShowcaseImages.length;
            setLightboxState({ isOpen: true, index: nextIdx, item: aboutShowcaseImages[nextIdx] });
          }}
          onNext={() => {
            const nextIdx = (lightboxState.index + 1) % aboutShowcaseImages.length;
            setLightboxState({ isOpen: true, index: nextIdx, item: aboutShowcaseImages[nextIdx] });
          }}
        />
      )}
    </div>
  );
}
