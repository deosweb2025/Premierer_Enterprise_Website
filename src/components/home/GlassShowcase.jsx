import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ArrowRight, 
  Eye, 
  Maximize2, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  Factory, 
  Cpu, 
  Award,
  Layers,
  MapPin,
  Clock,
  Grid
} from 'lucide-react';
import { siteImages } from '../../data/siteData';
import SectionHeading from '../common/SectionHeading';
import ImageLightbox from '../common/ImageLightbox';

export default function GlassShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxState, setLightboxState] = useState({ isOpen: false, item: null });

  // 4 Core Brand Pillars for the About Glimpse Section
  const aboutPillars = [
    {
      id: 'heritage',
      tabTitle: 'Kolkata Studio & Heritage',
      tabIcon: Building2,
      tag: '10+ Years Legacy',
      category: 'Showroom & Studio',
      titlePrefix: 'A Decade of Architectural Glass &',
      titleGradient: 'Mirror Mastery in Kolkata',
      eyebrow: 'ESTABLISHED ATELIER • 2/16 K. BOSE SARANI',
      image: siteImages.pic6, // pic6 - Authentic luxury showroom display with full-height mirrors
      shortDesc: 'Founded with an unwavering ethos that "spells quality", Premiere Enterprise is Kolkata\'s premier authority in architectural glass, precision diamond-bevelled mirror walls, and luxury smart LED creations. We welcome architects, interior designers, and discerning homeowners to our walk-in studio and active fabrication facility in North Kolkata.',
      features: [
        {
          title: '10+ Years Specialized Craft',
          desc: 'Over a decade of specialized craft excellence with 500+ landmark residential and commercial installations across West Bengal.'
        },
        {
          title: 'Highly Skilled Personnel & Robust Manpower',
          desc: 'Seasoned glass craftsmen, CNC fabricators, and certified on-site installers ensuring smooth execution with zero bottlenecks.'
        },
        {
          title: 'Authentic Walk-In Consultation Studio',
          desc: 'Visit our studio at 2/16 K. Bose Sarani to inspect tactile glass cutouts, bevel angle samples, and illuminated LED mockups in person.'
        },
        {
          title: 'Registered GSTIN & Certified Raw Stock',
          desc: 'Complete transparency with certified Saint-Gobain float glass, ultra-clear copper-free mirrors, and structural architectural fittings.'
        }
      ],
      spec1: {
        icon: MapPin,
        label: 'Studio Location',
        value: '2/16, K. Bose Sarani, Kolkata - 700080'
      },
      spec2: {
        icon: Award,
        label: 'Heritage Standard',
        value: '10+ Years of Craftsmanship'
      }
    },
    {
      id: 'workshop',
      tabTitle: 'In-House Workshop & Factory',
      tabIcon: Factory,
      tag: 'Zero Middlemen',
      category: 'Direct Manufacturing',
      titlePrefix: 'Precision In-House Cutting, Edge Grinding &',
      titleGradient: 'Diamond Belt Bevelling',
      eyebrow: 'IN-HOUSE FABRICATION • DIRECT FACTORY PRICING',
      image: siteImages.workshop, // pic12 - Active workbench & float inventory
      shortDesc: 'Unlike brokers, online aggregators, or resellers who outsource their fabrication, Premiere Enterprise operates a dedicated in-house glass processing workshop. Equipped with industrial cutting benches, diamond-wheel edge polishers, and custom bevelling machinery, we guarantee millimeter accuracy and direct factory rates.',
      features: [
        {
          title: '±0.2mm Precision Cutting Tolerance',
          desc: 'Laser-calibrated manual and CNC scoring for complex chevron layouts, geometric wall grids, circular arches, and custom cuts.'
        },
        {
          title: 'Industrial Diamond-Wheel Edge Grinding',
          desc: 'Heavy-duty abrasive belt machines produce sparkling, uniform 12mm–25mm bevelled borders and micro-polished flat edges.'
        },
        {
          title: '100% Factory Direct Pricing Advantage',
          desc: 'Eliminating middleman commissions and broker markups, giving you transparent manufacturer rates and direct artisan accountability.'
        }
      ],
      spec1: {
        icon: Cpu,
        label: 'Fabrication Accuracy',
        value: '±0.2mm Precision Scoring & Belt Bevelling'
      },
      spec2: {
        icon: Factory,
        label: 'Manufacturing Advantage',
        value: '100% In-House Production • Zero Middlemen'
      }
    },
    {
      id: 'mirrors',
      tabTitle: 'Signature Bevelled Mirrors',
      tabIcon: Layers,
      tag: 'Artisan Specialty',
      category: 'Signature Creation',
      titlePrefix: 'Handcrafted Diamond & Chevron Bevelled',
      titleGradient: 'Mirror Wall Panelling',
      eyebrow: 'ARCHITECTURAL MIRRORS • SAINT-GOBAIN ULTRACLEAR',
      image: siteImages.pic1, // pic1 - Signature diamond bevelled mirror wall
      shortDesc: 'Our signature mirror walls represent the pinnacle of optical grandeur. Custom-crafted using copper-free and lead-free Saint-Gobain UltraClear mirrors, each segment is hand-cut and diamond-bevelled to visually double interior space, amplify ambient illumination, and introduce geometric elegance.',
      features: [
        {
          title: 'Copper-Free Saint-Gobain UltraClear',
          desc: 'Advanced multi-layer silver backing eliminates black-edge oxidation, cloudiness, and humidity degradation for lifetime clarity.'
        },
        {
          title: 'Bespoke Diamond & Chevron Grid Alignments',
          desc: 'Individually calculated layout grids tailored to millimeter site dimensions, creating flawless focal walls in foyers and living rooms.'
        },
        {
          title: 'Non-Destructive Structural Installation',
          desc: 'High-strength structural neutral mirror adhesive ensures razor-flat alignment with zero surface puncturing or wall damage.'
        }
      ],
      spec1: {
        icon: Layers,
        label: 'Mirror Spec',
        value: '5mm / 6mm Saint-Gobain UltraClear Mirror'
      },
      spec2: {
        icon: ShieldCheck,
        label: 'Durability Standard',
        value: 'Oxidation-Resistant • Lifetime Optical Clarity'
      }
    },
    {
      id: 'smart-led',
      tabTitle: 'Smart LED & Glazing Systems',
      tabIcon: Sparkles,
      tag: 'Modern Innovation',
      category: 'Optoelectronic Glazing',
      titlePrefix: 'Next-Gen Smart Touch LED Backlit Mirrors &',
      titleGradient: 'Toughened Glazing Systems',
      eyebrow: 'INNOVATION • SAFETY GLAZING INFRASTRUCTURE',
      image: siteImages.pic2, // pic2 - Smart LED Mirror with glowing halo
      shortDesc: 'Fusing timeless Kolkata glass artisanship with modern optoelectronic engineering. From feather-touch dimming LED backlit mirrors with defogger heating pads to heavy-duty 10mm/12mm frameless glass partitions and sliding doors, we build high-performance architectural experiences.',
      features: [
        {
          title: 'Capacitive Feather-Touch Smart Dimming',
          desc: 'Integrated digital touch sensors allow seamless brightness control and smooth switching between 3000K warm gold and 6500K daylight white.'
        },
        {
          title: 'Automated Anti-Fog Demister Heating Pad',
          desc: 'Built-in thermal heating elements prevent condensation, maintaining crystal-clear mirror reflections even after steaming hot showers.'
        },
        {
          title: 'IS-Certified Toughened Safety Glass Partitions',
          desc: 'Thermal tempered 10mm/12mm safety glass paired with heavy-duty Grade-304 stainless steel patch fittings for commercial and home spaces.'
        }
      ],
      spec1: {
        icon: Sparkles,
        label: 'Smart Electronics',
        value: 'Dual CCT LED • Touch Dimmer • Demister Pad'
      },
      spec2: {
        icon: ShieldCheck,
        label: 'Safety Standard',
        value: 'IP44 Splashproof • IS Certified Toughened Glass'
      }
    },
    {
      id: 'partitions',
      tabTitle: 'Toughened Partitions',
      tabIcon: Grid,
      tag: 'Acoustic Architecture',
      category: 'Frameless Glass Walls',
      titlePrefix: 'High-Tensile Certified Safety',
      titleGradient: 'Toughened Glass Partitions',
      eyebrow: 'ARCHITECTURAL PARTITIONS • 10MM & 12MM TOUGHENED',
      image: siteImages.toughenedPartitions,
      shortDesc: 'Engineered for contemporary corporate boardrooms, modern offices, and luxury luxury residences across Kolkata. Our frameless toughened glass partitions provide maximum natural daylight transmission paired with high acoustic buffering and zero visual clutter.',
      features: [
        {
          title: '10mm & 12mm IS 2553 Certified Toughened Glass',
          desc: 'High-tensile thermal tempered glass with impact resistance up to five times stronger than standard float glass.'
        },
        {
          title: 'Concealed Floor Spring & Patch Glazing Channels',
          desc: 'Minimalist anodized aluminium and stainless steel profile channels for a clean, uninterrupted floor-to-ceiling visual flow.'
        },
        {
          title: 'Acoustic Noise Dampening & Precision Plumb Alignment',
          desc: 'Integrated transparent silicone acoustic gaskets providing acoustic isolation while preserving aesthetic transparency.'
        }
      ],
      spec1: {
        icon: ShieldCheck,
        label: 'Safety Standard',
        value: '10mm / 12mm IS 2553 Toughened Safety Glass'
      },
      spec2: {
        icon: Grid,
        label: 'Acoustic Profile',
        value: 'Acoustic Gasketed • Concealed Profile Channels'
      }
    },
    {
      id: 'shower-cubicles',
      tabTitle: 'Shower Cubicles',
      tabIcon: ShieldCheck,
      tag: 'Luxury Bathrooms',
      category: 'Frameless Shower Cubicles',
      titlePrefix: 'Custom Designed Luxury High-Clarity',
      titleGradient: 'Frameless Shower Cubicles',
      eyebrow: 'BATHROOM ARCHITECTURE • SS 304 STAINLESS HARDWARE',
      image: siteImages.showerCubicles,
      shortDesc: 'Transform bathrooms into spa-grade private sanctuaries. We custom fabricate 100% frameless walk-in glass shower enclosures and minimalist pivot shower cabins tailored to your bathroom geometry in Kolkata.',
      features: [
        {
          title: 'Crystal Clear & Fluted Designer Glass Options',
          desc: 'Choice of Saint-Gobain UltraClear, frosted privacy bands, or trendy reeded fluted textured glass for modern elegance.'
        },
        {
          title: 'Anti-Calcification Hydrophobic Shield Protection',
          desc: 'Factory nano-coating repels hard water minerals, soap scum, and moisture stains for effortless cleaning and permanent sparkle.'
        },
        {
          title: 'Marine Grade SS 304 Solid Stainless Steel Fittings',
          desc: 'Rust-proof, moisture-sealed hydraulic hinges, reinforcement header bars, magnetic door seals, and designer handles in matte black or brushed gold.'
        }
      ],
      spec1: {
        icon: ShieldCheck,
        label: 'Glass Specification',
        value: '10mm Clear / Fluted Tempered Safety Glass'
      },
      spec2: {
        icon: Award,
        label: 'Hardware Grade',
        value: 'Solid SS 304 Stainless Steel • 100% Rust-Proof'
      }
    },
    {
      id: 'hardware',
      tabTitle: 'Architectural Hardware',
      tabIcon: Cpu,
      tag: 'Engineered Precision',
      category: 'Glazing Hardware & Silicon',
      titlePrefix: 'Heavy-Duty Tested Stainless Steel',
      titleGradient: 'Architectural Hardware Systems',
      eyebrow: 'HARDWARE & STRUCTURAL SILICON • CERTIFIED ENDURANCE',
      image: siteImages.architecturalHardware,
      shortDesc: 'The backbone of enduring glass installations. Premiere Enterprise supplies and installs certified architectural hardware — from heavy-duty hydraulic floor springs and patch fittings to spider connectors and neutral-cure structural glazing silicones.',
      features: [
        {
          title: 'Heavy-Duty Hydraulic Double-Action Floor Springs',
          desc: 'Engineered to support glass door leaves up to 150 kg with dual closing speed control and smooth 90° hold-open functionality.'
        },
        {
          title: 'SS 304 & SS 316 Patch Fittings & Spider Brackets',
          desc: 'Precision CNC-machined architectural fittings tested for 500,000+ cycle fatigue resistance under high wind loads.'
        },
        {
          title: 'Non-Staining Neutral Structural Glazing Silicones',
          desc: 'High-modulus weatherproof sealants and anti-fungal sanitary silicones that never discolor or damage mirror silver backings.'
        }
      ],
      spec1: {
        icon: Cpu,
        label: 'Load Capacity',
        value: 'Up to 150 kg Door Leaf • 500k Cycle Tested'
      },
      spec2: {
        icon: Award,
        label: 'Material Grade',
        value: 'Grade SS 304 / SS 316 Stainless Steel'
      }
    }
  ];

  const activePillar = aboutPillars[activeTab] || aboutPillars[0];

  const handleOpenLightbox = (pillar) => {
    setLightboxState({
      isOpen: true,
      item: {
        id: pillar.id,
        title: `${pillar.titlePrefix} ${pillar.titleGradient}`,
        category: pillar.category,
        image: pillar.image,
        description: pillar.shortDesc,
        specs: `${pillar.spec1.label}: ${pillar.spec1.value} • ${pillar.spec2.label}: ${pillar.spec2.value}`
      }
    });
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-gradient-to-b from-[#090d16] via-[#101726] to-[#0a0e17] relative overflow-hidden">
      {/* Top & Bottom Specular Bevel Hairlines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent shadow-[0_1px_15px_rgba(245,158,11,0.35)]" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      {/* Background Decorative Aura (Warm Champagne Gold & Titanium Sky) */}
      <div className="absolute top-1/4 -left-40 w-[42rem] h-[42rem] bg-amber-500/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-[38rem] h-[38rem] bg-sky-500/8 rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle Architectural Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.45) 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading — Introducing Premiere Enterprise Heritage & Identity */}
        <SectionHeading
          badge="About Premiere Enterprise • 10+ Years Experience"
          title="Masters of Architectural Glass &"
          gradientTitle="10+ Years of Craftsmanship"
          subtitle="From raw float glass scoring to high-precision diamond edge bevelling, Premiere Enterprise has defined luxury architectural glazing and custom mirror installations across Kolkata for over a decade."
        />

        {/* Editorial Story Block: About Premiere Enterprise & Skilled Manpower */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-14 p-6 sm:p-8 rounded-3xl bg-slate-950/70 border border-amber-400/30 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Top Specular Hairline */}
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent shadow-[0_1px_8px_rgba(245,158,11,0.3)]" />
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Eyebrow Ethos Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 font-mono text-[11px] font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Our Craftsmanship & Workforce Ethos</span>
          </div>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            At Premiere Enterprise, glass is not simply an architectural component — it is a canvas of light, reflection, and spatial transformation. With over 10 years of craft excellence in Kolkata, we specialize in glass fabrication, designer LED mirrors, and modern architectural infrastructure.
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            By investing in high-precision edge-beveling machinery, diamond grinding belts, and computerized scoring tables, we maintain complete end-to-end quality control from raw float sheets to final turnkey installations.
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            What truly powers our consistent execution is our <span className="text-amber-300 font-bold">highly skilled personnel and robust manpower</span>. With a large in-house team of seasoned glass craftsmen, CNC fabricators, structural glazing specialists, and certified on-site installers, we have the capacity to handle large commercial and luxury residential projects smoothly — delivering with zero bottlenecks, rapid turnarounds, and flawless precision.
          </p>
        </div>

        {/* Luxury Glass Segmented Tab Bar with Sliding Amber Indicator */}
        <div className="flex items-center justify-center mb-10 sm:mb-14">
          <div className="relative p-2 rounded-2xl bg-gradient-to-b from-[#131b2c]/95 via-[#0d1320]/95 to-[#080c14]/98 border border-amber-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_2px_rgba(255,255,255,0.12)] backdrop-blur-2xl inline-flex max-w-full overflow-x-auto no-scrollbar gap-2">
            
            {/* Top Specular Hairline */}
            <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent pointer-events-none" />

            {aboutPillars.map((pillar, idx) => {
              const isActive = activeTab === idx;
              const TabIcon = pillar.tabIcon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`group relative px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2.5 cursor-pointer z-10 ${
                    isActive
                      ? 'text-slate-950 font-black'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeAboutPill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 shadow-[0_4px_25px_rgba(245,158,11,0.45),inset_0_1px_2px_rgba(255,255,255,0.7)] z-[-1]"
                    />
                  )}

                  {/* Icon Pod */}
                  <div 
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-slate-950/20 text-slate-950 shadow-inner' 
                        : 'bg-amber-500/10 border border-amber-400/25 text-amber-400 group-hover:scale-105 group-hover:border-amber-400/50 group-hover:text-amber-300'
                    }`}
                  >
                    <TabIcon className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>

                  {/* Index Numeral */}
                  <span 
                    className={`font-mono text-[11px] ${
                      isActive ? 'text-slate-950/80 font-black' : 'text-amber-400/80 font-bold'
                    }`}
                  >
                    0{idx + 1}
                  </span>

                  {/* Tab Title */}
                  <span className={isActive ? 'font-black tracking-tight' : 'font-medium'}>
                    {pillar.tabTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pillar Showcase Stage — Architectural Exhibition Card with Border Beam */}
        <div className="relative rounded-3xl p-[1.5px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.7)]">
          
          {/* Animated Liquid Gold Border Beam Tracing Perimeter */}
          <div 
            className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,rgba(245,158,11,0.25)_330deg,rgba(251,191,36,0.95)_350deg,transparent_360deg)] animate-border-beam opacity-85 sm:opacity-50 pointer-events-none"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch rounded-[22.5px] p-6 sm:p-10 lg:p-12 overflow-hidden relative bg-gradient-to-br from-[#162035]/98 via-[#101728]/98 to-[#0a0e19]/98 border border-amber-400/25 sm:border-white/10 shadow-2xl"
            >
              {/* Top Golden Refractive Specular Line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/70 to-transparent shadow-[0_1px_12px_rgba(245,158,11,0.4)] pointer-events-none" />

              {/* Subtle Inner Ambient Glow in Corner */}
              <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-br from-amber-500/12 via-amber-500/5 to-transparent pointer-events-none rounded-3xl blur-3xl" />

              {/* Left Column: Stage Visual (Flex-Grow to Fill Height) & Paired Thumbnails */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-4 h-full">
                
                {/* Main Hero Visual Card — Automatically fills vertical height */}
                <div 
                  className="group relative flex-1 min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden cursor-pointer border border-amber-400/30 sm:border-white/15 hover:border-amber-400/70 shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:shadow-[0_25px_60px_rgba(245,158,11,0.3)] transition-all duration-500 bg-slate-950 flex flex-col justify-end"
                  onClick={() => handleOpenLightbox(activePillar)}
                  title="Click to zoom in 4K high definition"
                >
                  <img
                    src={activePillar.image}
                    alt={activePillar.titlePrefix}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  {/* Cinematic Bottom & Corner Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/95 via-[#080c14]/30 to-transparent pointer-events-none" />

                  {/* Top Left: Tag Badge */}
                  <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-amber-400/50 text-xs font-bold text-amber-300 shadow-xl flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{activePillar.tag}</span>
                  </div>

                  {/* Top Right: Expand Lightbox Button */}
                  <div className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/85 backdrop-blur-md text-white border border-white/20 group-hover:bg-amber-400 group-hover:text-slate-950 group-hover:border-amber-400 transition-all duration-300 shadow-xl">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Image Caption Bar */}
                  <div className="relative z-10 p-4 flex items-center justify-between pointer-events-none">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 bg-slate-950/85 px-3 py-1.5 rounded-lg backdrop-blur-md border border-amber-400/30 shadow-lg">
                      {activePillar.category}
                    </span>
                    <span className="text-xs text-white/95 font-medium flex items-center gap-1.5 bg-slate-950/85 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10 shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>4K Box Preview</span>
                    </span>
                  </div>
                </div>

                {/* Interactive Thumbnail Strip Placed Cleanly Below Main Image */}
                <div className="shrink-0 flex items-center gap-3 pt-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider shrink-0 hidden sm:inline">
                    Explore Pillars:
                  </span>
                  <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1">
                    {aboutPillars.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => setActiveTab(idx)}
                        className={`group relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 shrink-0 cursor-pointer ${
                          activeTab === idx
                            ? 'border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.6)] scale-105 ring-2 ring-amber-400/30'
                            : 'border-white/15 opacity-60 hover:opacity-100 hover:border-amber-400/40'
                        }`}
                        title={p.tabTitle}
                      >
                        <img
                          src={p.image}
                          alt={p.tabTitle}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                        />
                        {activeTab === idx && (
                          <div className="absolute inset-0 bg-amber-400/15 pointer-events-none" />
                        )}
                        <span className="absolute bottom-1 inset-x-1 text-[9px] font-bold text-white text-center truncate drop-shadow-md bg-slate-950/70 rounded">
                          0{idx + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Dossier & Specifications */}
              <div className="lg:col-span-6 flex flex-col justify-between pt-2 lg:pt-0">
                <div>
                  {/* Eyebrow Category */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 font-mono text-[11px] font-bold tracking-widest uppercase mb-4 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
                    <span>{activePillar.eyebrow}</span>
                  </div>

                  {/* Pillar Title with Gold Gradient Serif Accent */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading leading-tight drop-shadow-sm">
                    {activePillar.titlePrefix}{' '}
                    <span 
                      className="font-serif italic bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400 bg-clip-text text-transparent block mt-1"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {activePillar.titleGradient}
                    </span>
                  </h3>

                  {/* Narrative Subtitle */}
                  <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {activePillar.shortDesc}
                  </p>

                  {/* Features Grid with Luxury Gold Checkmarks & Cards */}
                  <div className="mt-6 space-y-2.5">
                    {activePillar.features.map((feature, fIdx) => (
                      <div 
                        key={fIdx} 
                        className="p-3 sm:p-3.5 rounded-xl border border-amber-400/15 sm:border-white/10 bg-slate-950/40 hover:bg-slate-900/60 hover:border-amber-400/40 transition-all duration-300 flex items-start gap-3.5 group/feat shadow-md"
                      >
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-amber-500/20 via-amber-950/40 to-slate-900 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 group-hover/feat:bg-amber-400 group-hover/feat:text-slate-950 transition-colors shadow-sm">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <div>
                          <h5 className="text-xs sm:text-sm font-bold text-white group-hover/feat:text-amber-200 transition-colors leading-snug">
                            {feature.title}
                          </h5>
                          <p className="text-xs text-slate-300 mt-0.5 leading-relaxed font-normal">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Specifications & Actions */}
                <div className="mt-8 pt-6 border-t border-white/15">
                  {/* Engineering Spec Tiles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-950/90 border border-white/10 border-l-4 border-l-amber-400 shadow-inner">
                      <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                        <activePillar.spec1.icon className="w-3.5 h-3.5" />
                        <span className="text-[10px] uppercase font-mono tracking-widest font-semibold">
                          {activePillar.spec1.label}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-white block leading-snug">
                        {activePillar.spec1.value}
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-950/90 border border-white/10 border-l-4 border-l-amber-400 shadow-inner">
                      <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                        <activePillar.spec2.icon className="w-3.5 h-3.5" />
                        <span className="text-[10px] uppercase font-mono tracking-widest font-semibold">
                          {activePillar.spec2.label}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-amber-300 block leading-snug">
                        {activePillar.spec2.value}
                      </span>
                    </div>
                  </div>

                  {/* High-Converting Action CTAs — Directing to /about */}
                  <div className="flex flex-wrap items-center gap-3.5">
                    <Link
                      to="/about"
                      className="px-7 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-[0_8px_30px_rgba(245,158,11,0.35)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Explore Our Full Story & Heritage</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>

                    <Link
                      to="/contact"
                      className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm glass-panel border border-amber-400/30 hover:border-amber-400 hover:bg-amber-500/10 text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Visit Our Kolkata Studio</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Executive Footnote Assurance Strip */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-950/95 border border-amber-400/20 hover:border-amber-400/40 transition-all flex items-center gap-2.5 shadow-md">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs font-semibold text-slate-200">10+ Years Craft Excellence</span>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-950/95 border border-amber-400/20 hover:border-amber-400/40 transition-all flex items-center gap-2.5 shadow-md">
            <Factory className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs font-semibold text-slate-200">Direct In-House Workshop</span>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-950/95 border border-amber-400/20 hover:border-amber-400/40 transition-all flex items-center gap-2.5 shadow-md">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs font-semibold text-slate-200">Saint-Gobain Certified Stocks</span>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-950/95 border border-amber-400/20 hover:border-amber-400/40 transition-all flex items-center gap-2.5 shadow-md">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs font-semibold text-slate-200">Kolkata Walk-In Studio</span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxState.item && (
        <ImageLightbox
          isOpen={lightboxState.isOpen}
          onClose={() => setLightboxState({ isOpen: false, item: null })}
          currentImage={lightboxState.item}
          images={[lightboxState.item]}
          currentIndex={0}
        />
      )}
    </section>
  );
}
