// =======================================================================
// PREMIERE ENTERPRISE — spells quality
// Official Client Data Store
// =======================================================================

// Authentic client showroom, workshop, and facility images
import pic1 from '../assets/images/pic1.jpeg';
import pic2 from '../assets/images/pic2.jpeg';
import pic3 from '../assets/images/pic3.jpeg';
import pic4 from '../assets/images/pic4.jpeg';
import pic5 from '../assets/images/pic5.jpeg';
import pic6 from '../assets/images/pic6.jpeg';
import pic7 from '../assets/images/pic7.jpeg';
import pic8 from '../assets/images/pic8.jpeg';
import pic9 from '../assets/images/pic9.jpeg';
import pic10 from '../assets/images/pic10.jpeg';
import pic11 from '../assets/images/pic11.jpeg';
import pic12 from '../assets/images/pic12.jpeg';
import pic14 from '../assets/images/pic14.jpeg';

// Ultra-Luxury Category Showcase Imagery (Toughened Partitions, Shower Cubicles, Architectural Hardware)
import toughenedPartitionsImg from '../assets/images/toughened-partitions-luxury.jpg';
import showerCubiclesImg from '../assets/images/shower-cubicles-luxury.jpg';
import showerEnclosuresImg from '../assets/images/category-shower-enclosures.jpg';
import architecturalHardwareImg from '../assets/images/architectural-hardware-luxury.jpg';

export const siteImages = {
  pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic14,
  toughenedPartitions: toughenedPartitionsImg,
  showerCubicles: showerCubiclesImg,
  showerEnclosures: showerEnclosuresImg,
  architecturalHardware: architecturalHardwareImg,
  storefront: pic11,
  signboard: pic10,
  workshop: pic12,
  texturedGlass: pic14
};

export const siteData = {
  company: {
    name: "Premiere Enterprise",
    shortName: "Premiere Enterprise",
    tagline: "spells quality",
    description: "Premiere Enterprise is a trusted leader in architectural glass fabrication, designer smart LED mirrors, diamond-bevelled mirror wall panels, toughened glass partitions, UPVC windows, aluminium slidings, architectural hardware, and industrial epoxy flooring in Kolkata. Powered by seasoned glass craftsmen and ample skilled manpower, we ensure smooth turnkey execution with zero delays.",
    workforceCapacity: "Skilled Personnel & Ample Manpower for Smooth Turnkey Execution",
    founded: "2014",
    experienceYears: "10+ Years Craft",
    completedProjects: "500+",
    happyClients: "500+",
    badge: "spells quality • 10+ Years Craft",
    storefrontImage: pic11,
    signboardImage: pic10,
    workshopImage: pic12,
    texturedStockImage: pic14
  },

  // Official Verified Client Contact Details from Business Card
  contact: {
    phone: "+91 78900 00195",
    phoneRaw: "7890000195",
    phoneDisplay: "+91 78900 00195",
    phoneSecondaryDisplay: "7890000195",
    whatsapp: "+917890000195",
    whatsappDisplay: "+91 78900 00195",
    whatsappDefaultMessage: "Hello Premiere Enterprise, I would like to inquire about your glass, mirror, and architectural solutions.",
    email: "premiereent1967@gmail.com",
    address: "2/16, K. Bose Sarani, Kolkata - 700080",
    displayAddress: "2/16, K. Bose Sarani, Kolkata - 700080",
    mapShareUrl: "https://maps.app.goo.gl/zQmSGq1HAnFEPS5j8",
    // Embed map centered on exact K. Bose Sarani coordinates (22.6247202, 88.4185505)
    googleMapsEmbed: "https://maps.google.com/maps?q=22.6247202,88.4185505&t=&z=16&ie=UTF8&iwloc=&output=embed",
    businessHours: {
      weekdays: "Monday – Saturday: 10:00 AM – 7:00 PM",
      sunday: "Sunday: Open / By Appointment",
      emergency: "On-Site Measurements Across Kolkata & West Bengal"
    }
  },

  navigation: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ],

  // Core Service Offerings from Business Card & Product Details List
  // GLASS | MIRROR | ARCHITECTURAL HARDWARE | SILICON | TOUGHENED GLASS PARTITIONS | GLASS DOORS | MIRROR WALL PANELS | UPVC | ALUMINIUM SLIDINGS | EPOXY FLOORING
  coreCapabilities: [
    { id: "glass", name: "Glass", desc: "Toughened, Fluted, Tinted & Laminated Architectural Glass" },
    { id: "mirror", name: "Mirror", desc: "Designer Smart LED Backlit, Copper-Free HD Vanity & Decorative Mirrors" },
    { id: "partitions", name: "Toughened Glass Partitions", desc: "Frameless 10mm/12mm Office & Residential Glass Divider Walls" },
    { id: "shower-cubicles", name: "Shower Cubicles", desc: "Luxury Frameless & Fluted Glass Walk-In Shower Enclosures" },
    { id: "hardware", name: "Architectural Hardware", desc: "Premium Patch Fittings, Floor Springs, Handles & Spider Connectors" },
    { id: "silicon", name: "Silicon", desc: "High-Performance Structural Glazing Silicon & Weatherproof Sealants" },
    { id: "doors", name: "Glass Doors", desc: "Frameless Pivot, Sliding, Sensor & Patch-Fitting Glass Doors" },
    { id: "mirror-panels", name: "Mirror Wall Panels", desc: "Custom Diamond Bevelled & Geometric Chevron Mirror Accent Walls" },
    { id: "upvc", name: "UPVC", desc: "Soundproof, High-Durability UPVC Window & Door Systems" },
    { id: "aluminium", name: "Aluminium Slidings", desc: "Heavy-Duty Slim Profile Aluminium Sliding Windows & Sliders" },
    { id: "epoxy", name: "Epoxy Flooring", desc: "Seamless Industrial, Commercial & High-Gloss Metallic Epoxy Flooring" }
  ],

  hero: {
    badge: "Premiere Enterprise — spells quality",
    titleLine1: "Architectural",
    titleGradient: "Glass, Mirrors",
    titleLine2: "& Infrastructure Solutions",
    description: "Kolkata's premier specialists in custom architectural glass, smart LED mirrors, diamond-bevelled mirror wall panels, toughened partitions, UPVC, aluminium sliding systems, and epoxy flooring.",
    primaryCta: { text: "Explore Our Services", link: "/services" },
    secondaryCta: { text: "Get Instant Quote", link: "/contact" },
    stats: [
      { label: "Years of Craftsmanship", value: "10+" },
      { label: "Completed Projects", value: "500+" },
      { label: "Verified Quality Guarantee", value: "95%" },
      { label: "Kolkata & Metro Service", value: "Full WB" }
    ]
  },

  // Products aligned with real client card:
  products: [
    {
      id: "mirror-wall-panels",
      title: "Mirror Wall Panels (Diamond Bevelled)",
      category: "Mirror Wall Panels",
      tag: "Client Favorite",
      image: pic5,
      shortDesc: "Bespoke diamond and chevron bevelled mirror wall panelling designed to maximize natural light, amplify spatial grandeur, and add regal luxury to living rooms and lobbies.",
      features: [
        "12mm to 25mm Precision Diamond Perimeter Bevels",
        "Clear Silver, Bronze Tint & Grey Tinted Mirror Options",
        "Moisture-Sealed Anti-Oxidation Mirror Backing",
        "Laser-Aligned Custom Chevron & Diamond Grid Assembly",
        "High-Adhesion Concealed Joint Technology"
      ],
      suitableFor: "Luxury Living Rooms, Dining Feature Walls, Foyers, Hotel Lobbies, Boutiques",
      thickness: "5mm - 6mm Heavy Bevelled Float Mirror"
    },
    {
      id: "designer-smart-mirrors",
      title: "Designer Smart LED Mirrors",
      category: "Mirror",
      tag: "Best Seller",
      image: pic1,
      shortDesc: "Next-generation illuminated mirrors featuring warm golden and icy daylight dual CCT LEDs, capacitive feather-touch dimmer switches, and integrated defogger heating pads.",
      features: [
        "Warm Gold (3000K) & Cool Daylight (6500K) LED Profiles",
        "Capacitive Touch Dimmer & Memory Sensor",
        "Built-in Anti-Fog Demister Heating Film",
        "Organic Pebble, Capsule, Arch, Wave & Round Profiles",
        "5mm Copper-Free High Definition Float Mirror"
      ],
      suitableFor: "Luxury Bathrooms, Master Powder Rooms, Vanities, Boutiques, Dressing Rooms",
      thickness: "5mm Copper-Free Mirror"
    },
    {
      id: "toughened-glass-partitions",
      title: "Toughened Glass Partitions",
      category: "Toughened Glass Partitions",
      tag: "Architectural Grade",
      image: toughenedPartitionsImg,
      shortDesc: "Heavy-duty structural safety glass partitions providing clear acoustic separation, modern elegance, and maximum light distribution for office suites and residences.",
      features: [
        "10mm & 12mm High-Grade Toughened Safety Glass",
        "Certified IS 2553 Thermal & Impact Resistance",
        "Clear, Frosted, Fluted, or Acid-Etched Privacy Options",
        "Zero Optical Distortion Float Substrates",
        "Precision Cutouts for Floor Springs and Patch Fittings"
      ],
      suitableFor: "Corporate Offices, Conference Rooms, Luxury Living Dividers, Penthouse Suites",
      thickness: "10mm, 12mm & 15mm Toughened Glass"
    },
    {
      id: "shower-cubicles",
      title: "Bespoke Glass Shower Cubicles",
      category: "Shower Cubicles",
      tag: "Luxury Wet Rooms",
      image: showerCubiclesImg,
      shortDesc: "Custom-built frameless and fluted glass shower enclosures engineered with anti-calcification nano-coating and Grade SS 304 anti-corrosion hardware.",
      features: [
        "10mm & 12mm High-Clarity Toughened Safety Glass",
        "Clear, Fluted Reeded & Frosted Privacy Glass Finishes",
        "Heavy-Duty SS 304 Hinges, Wall Connectors & Stabilizer Bars",
        "Magnetic Water-Tight Door Seals & Slim Threshold Profiles",
        "Permanent Nano Hydrophobic Anti-Limescale Coating"
      ],
      suitableFor: "Master Bathrooms, Luxury En-suites, Penthouse Bathrooms, Five-Star Hotels",
      thickness: "10mm & 12mm Toughened Safety Glass"
    },
    {
      id: "glass-doors",
      title: "Frameless Glass Doors",
      category: "Glass Doors",
      tag: "Modern Entrance",
      image: pic4,
      shortDesc: "Sleek frameless toughened glass pivot and sliding doors engineered with heavy-duty architectural patch fittings and hydraulic floor springs for smooth, silent operation.",
      features: [
        "10mm & 12mm Impact-Resistant Toughened Glass",
        "Heavy-Duty SS 304 Architectural Patch Fittings & Handles",
        "Double-Action Hydraulic Floor Springs with Hold-Open",
        "Smooth Sliding Roller Systems & Soft-Close Dampers",
        "Locking Patch Fittings & Security Cylinders"
      ],
      suitableFor: "Commercial Entrances, Showrooms, Conference Rooms, Master En-suites",
      thickness: "10mm & 12mm Safety Glass"
    },
    {
      id: "digital-printed-glass",
      title: "Digital Printed Glass & Art Murals",
      category: "Glass",
      tag: "Custom Artwork",
      image: pic3,
      shortDesc: "High-definition UV direct-to-glass multi-layer printing cured with thermal technology for sacred spiritual murals, feature backsplashes, and custom artistic decor.",
      features: [
        "1440 DPI Multi-Layer UV Ceramic Inks Cured on Glass",
        "Fade-Proof, Scratch-Resistant & Heat-Resistant Surface",
        "Optional Translucent Backlighting Treatment",
        "Custom Devotional, Landscape, & Abstract Artworks",
        "Effortless Cleaning & Permanent Color Fastness"
      ],
      suitableFor: "Mandir Walls, Reception Lobbies, Kitchen Backsplashes, Feature Wall Art",
      thickness: "6mm, 8mm & 10mm Toughened Glass"
    },
    {
      id: "ambient-glow-mirrors",
      title: "Ambient Glow & Pattern Etched Mirrors",
      category: "Mirror",
      tag: "Signature Decor",
      image: pic2,
      shortDesc: "Decorative designer mirrors featuring delicate perimeter laser frostings, crystal borders, and radiant aura lighting tailored for vanity luxury.",
      features: [
        "Laser-Frosted Intricate Ornamental & Geometric Borders",
        "Edge-Emitting High Brightness LED Ribbons",
        "IP65 Moisture & Water Resistant Electrical Components",
        "Crystal Bevelled Frame Details",
        "Custom Dimensional Fabrication for Double Vanities"
      ],
      suitableFor: "Master Bathrooms, Powder Rooms, Entry Foyers, Luxury Salons",
      thickness: "5mm HD Float Mirror"
    },
    {
      id: "upvc-windows-doors",
      title: "UPVC Windows & Door Systems",
      category: "UPVC",
      tag: "Energy Efficient",
      image: pic8,
      shortDesc: "High-performance UPVC casement and sliding systems engineered for maximum sound insulation, thermal efficiency, dust resistance, and monsoon proofing.",
      features: [
        "Multi-Chambered Lead-Free High-Impact UPVC Profiles",
        "Galvanized Steel Core Reinforcement",
        "Acoustic Double-Glazing & Single-Glazing Compatibility",
        "Multi-Point High-Security Locking Hardware",
        "Termite-Proof, Weather-Resistant & Zero Maintenance"
      ],
      suitableFor: "Modern Residences, Apartments, Commercial Buildings, Villas",
      thickness: "Custom Glazing Channels for 5mm to 24mm DGU"
    },
    {
      id: "aluminium-slidings",
      title: "Aluminium Sliding Systems",
      category: "Aluminium Slidings",
      tag: "Heavy Duty",
      image: pic9,
      shortDesc: "Slimline premium aluminium sliding doors and Domal section sliding windows engineered for panoramic views, ultra-smooth glide, and extreme wind load resistance.",
      features: [
        "Precision Extruded Architectural Aluminium Alloy",
        "Domal Section & Slim-Profile Minimalist Interlocks",
        "Heavy-Duty Stainless Steel Precision Bearing Rollers",
        "Anodized, Powder-Coated & PVDF Finish Options",
        "Smooth Track Transition with Water Drainage Channels"
      ],
      suitableFor: "Balconies, Living Room Patios, Terraces, Commercial Facades",
      thickness: "Heavy-Gauge Architectural Aluminium Profiles"
    },
    {
      id: "architectural-hardware-silicon",
      title: "Architectural Hardware & Silicon Solutions",
      category: "Architectural Hardware",
      tag: "Essential Infrastructure",
      image: architecturalHardwareImg,
      shortDesc: "Top-tier structural glazing silicones, anti-fungal sanitary sealants, and stainless steel hardware engineered for enduring structural integrity.",
      features: [
        "SS 304 & SS 316 Grade Patch Fittings & Hinges",
        "Neutral Cure High-Modulus Structural Glazing Silicon",
        "Non-Staining, Anti-Fungal Mirror Mounting Silicon",
        "Spider Glass Fittings, Glass Brackets & Floor Springs",
        "Certified Weight & Fatigue Tested Hardware"
      ],
      suitableFor: "Structural Glazing, Shower Enclosures, Frameless Partitions, Mirrors",
      thickness: "Universal Fitting Standards"
    },
    {
      id: "epoxy-flooring",
      title: "Industrial & Decorative Epoxy Flooring",
      category: "Epoxy Flooring",
      tag: "Seamless Surface",
      image: pic7,
      shortDesc: "Seamless, joint-free, high-gloss epoxy flooring providing extreme chemical resistance, dust-free hygiene, and stunning modern aesthetics.",
      features: [
        "100% Solid Heavy-Duty Self-Levelling Epoxy Resin",
        "High Abrasion, Chemical & Heavy Impact Resistance",
        "Mirror-Finish Gloss or Non-Slip Textured Finishes",
        "Seamless Monolithic Surface for Zero Dust Accumulation",
        "Custom Metallic, Solid Color & Flake Floor Designs"
      ],
      suitableFor: "Commercial Showrooms, Industrial Plants, Garages, Hospitals, Modern Studios",
      thickness: "2mm to 4mm High-Build Epoxy Coating"
    },
    {
      id: "textured-patterned-glass",
      title: "Textured & Patterned Architectural Glass",
      category: "Glass",
      tag: "Designer Inventory",
      image: pic14,
      shortDesc: "Specialized textured, fluted, and embossed architectural safety glass providing balanced ambient light transmission with refined acoustic and visual privacy.",
      features: [
        "Reeded, Fluted, Moru & Embossed Architectural Textures",
        "High Light Transmittance with Soft Privacy Diffusion",
        "Fully Compatible with Toughening & CNC Edge Polishing",
        "Zero Distortions with Uniform Surface Patterning",
        "Custom Sizing for Modern Bathrooms, Partitions & Cabinets"
      ],
      suitableFor: "Shower Cubicles, Modern Office Partitions, Kitchen Cabinets, Feature Wall Glazing",
      thickness: "5mm, 8mm & 10mm Textured Float Glass"
    }
  ],

  // Services tailored to business card & list
  services: [
    {
      id: "custom-glass-cutting",
      title: "Glass & Mirror Fabrication",
      desc: "Precision CNC cutting, diamond-wheel edge bevelling, flat polishing, and organic shaping for mirrors and glass panels.",
      icon: "Scissors",
      points: [
        "12mm to 25mm diamond perimeter bevels on mirrors",
        "Flat polished, pencil, and ogee edge grinding",
        "CNC circular, teardrop, and irregular arch profiling"
      ]
    },
    {
      id: "toughened-partitions-doors",
      title: "Toughened Glass Partitions",
      desc: "Turnkey fabrication and installation of frameless toughened glass partitions, conference room dividers, and acoustic glass walls.",
      icon: "Grid",
      points: [
        "10mm & 12mm certified safety toughened glass",
        "Concealed patch fittings & hydraulic floor springs",
        "Acoustic sealing and soft-close sliding systems"
      ]
    },
    {
      id: "shower-cubicles-enclosures",
      title: "Bespoke Shower Cubicles",
      desc: "Architectural frameless and fluted walk-in shower enclosures engineered with anti-calcification nano-shields and SS 304 fittings.",
      icon: "ShieldCheck",
      points: [
        "10mm & 12mm high-clarity safety toughened glass",
        "Clear, frosted, and reeded fluted architectural textures",
        "Grade SS 304 moisture-proof hinges, handles & stabilizer bars"
      ]
    },
    {
      id: "mirror-wall-installation",
      title: "Mirror Wall Panelling",
      desc: "Specialized layout design, fabrication, and installation of diamond-grid and chevron bevelled mirror accent walls.",
      icon: "Layers",
      points: [
        "Laser-measured dimensional layout matching wall dimensions",
        "Anti-oxidation moisture-sealed mirror backing",
        "Bronze, Grey, and Clear Silver mirror compositions"
      ]
    },
    {
      id: "upvc-aluminium-systems",
      title: "UPVC & Aluminium Sliding Solutions",
      desc: "End-to-end design, supply, and installation of weather-proof UPVC windows and heavy-duty aluminium sliding systems.",
      icon: "Cpu",
      points: [
        "Soundproof and energy-efficient UPVC profiles",
        "Slimline Domal section aluminium sliders",
        "Multi-track sliding with anti-lift security hardware"
      ]
    },
    {
      id: "hardware-silicon-supply",
      title: "Architectural Hardware & Silicon",
      desc: "Comprehensive supply of structural glazing silicones, anti-fungal sealants, and grade SS 304 architectural fittings.",
      icon: "CheckCircle",
      points: [
        "Neutral cure structural glazing and weather sealants",
        "Heavy-duty floor springs, spider fittings & patch brackets",
        "Mirror-safe neutral adhesives preventing silver degradation"
      ]
    },
    {
      id: "epoxy-flooring-works",
      title: "Epoxy Flooring Application",
      desc: "Professional surface preparation and high-gloss seamless epoxy application for commercial, industrial, and showroom floors.",
      icon: "Flame",
      points: [
        "Surface mechanical grinding and moisture testing",
        "Self-levelling high-strength epoxy resin coats",
        "UV-stable polyurethane protective topcoats"
      ]
    },
    {
      id: "glass-doors-entrances",
      title: "Frameless Glass Doors & Entrances",
      desc: "Turnkey fabrication and installation of architectural frameless glass pivot doors, sliding entrances, sensor automated doors, and acoustic patch entries.",
      icon: "Compass",
      points: [
        "10mm & 12mm certified safety toughened glass",
        "Heavy-duty double-action hydraulic floor springs & patch locks",
        "Sleek tubular SS 304 pull handles & overhead sliding tracks"
      ]
    },
    {
      id: "smart-led-vanity-mirrors",
      title: "Designer Smart LED Mirrors",
      desc: "Bespoke fabrication of luxury smart LED backlit mirrors with capacitive feather-touch dimming, dual CCT color temperatures, and automated demister pads.",
      icon: "Sparkles",
      points: [
        "Capacitive feather-touch sensors with stepless brightness control",
        "Dual 3000K warm ambient & 6500K crisp daylight LED modes",
        "Built-in heating demister pad preventing steam & condensation"
      ]
    }
  ],

  // Real Gallery Items (Master Project Installations First, Workshop Creation Videos in Dedicated Category)
  gallery: [
    {
      id: 1,
      title: "Designer Illuminated Smart Mirror Wall",
      category: "Mirror",
      image: pic1,
      description: "Showroom display featuring an ensemble of round, arch, wave, teardrop, and square LED smart mirrors with warm golden and icy blue ambient glows.",
      specs: "5mm HD Float Mirror | Warm 3000K & Ice 6500K LEDs | Touch Sensor"
    },
    {
      id: 2,
      title: "Dual-Glow Vanity Mirror Collection",
      category: "Mirror",
      image: pic2,
      description: "High-end decorative wall mirrors with border illumination, frosted motifs, and organic teardrop profiles.",
      specs: "5mm Copper-Free Mirror | Anti-Oxidation Backing | Multi-Tone Backlight"
    },
    {
      id: 3,
      title: "Spiritual Sacred Art Digital Printed Glass Mural",
      category: "Glass",
      image: pic3,
      description: "Direct UV printed glass mural depicting divine transcendental artwork with rich gold tones and glossy glass surface in client reception office.",
      specs: "10mm Toughened Glass | 1440 DPI Multi-Layer UV Ink | Ultra High Gloss"
    },
    {
      id: 4,
      title: "Minimalist Frameless Round Mirrors & Glass Doors",
      category: "Glass Doors",
      image: pic4,
      description: "Contemporary circular wall mirrors installed with acoustic green texture backing for modern interior styling alongside frameless glass entries.",
      specs: "Circular CNC Precision Cut | Polished Edge | Frameless Flush Mount"
    },
    {
      id: 5,
      title: "Grand Diamond Bevelled Mirror Wall Panelling",
      category: "Mirror Wall Panels",
      image: pic5,
      description: "Custom diamond-pattern bevelled mirror wall panel partition reflecting light and creating stunning spatial expansion in showroom.",
      specs: "6mm Heavy Bevelled Float Mirror | 25mm Perimeter Bevel | Diamond Grid"
    },
    {
      id: 6,
      title: "Full-Length Backlit Floor Mirror & Diamond Wall",
      category: "Mirror Wall Panels",
      image: pic6,
      description: "Wide angle showroom perspective showing full-length illuminated vanity mirror alongside diamond grid bevelled wall and architectural partitions.",
      specs: "Floor-to-Ceiling Height | Custom Architectural Bevels | Dual Sensor Touch"
    },
    {
      id: 7,
      title: "Vibrant Devotional Glass Feature Wall Panel",
      category: "Glass",
      image: pic7,
      description: "Close-up detail of high-definition digital glass printing displaying intricate textures, brushstrokes, and spiritual Sanskrit typography.",
      specs: "Tempered Glass Substrate | Fade-Proof Ceramic Inks | Waterproof & Heat Resistant"
    },
    {
      id: 8,
      title: "Glass Cutting & Precision Edge Grinding Workshop",
      category: "Workshop",
      image: pic8,
      description: "Factory workshop showing large-scale float glass sheets, industrial cutting table, and heavy-duty edge polishing belt machinery.",
      specs: "Industrial Glass Fabrication | Belt Edge Polisher | In-House Manufacturing"
    },
    {
      id: 9,
      title: "Architectural Toughened & Float Glass Processing",
      category: "Workshop",
      image: pic9,
      description: "High-grade float glass slabs stacked ready for precision CNC waterjet cutting, bevelling, and tempering inside our Kolkata facility.",
      specs: "8mm to 19mm Float Glass Stock | Raw Material Processing | Custom Orders"
    },
    {
      id: 10,
      title: "Showroom & Fabrication Workshop Storefront",
      category: "Workshop",
      image: pic11,
      objectPosition: "object-top",
      description: "Street-level entrance of our official facility at 2/16, K. Bose Sarani, Kolkata, showcasing our sliding glass frontage, consultation desk, and glass stock bays.",
      specs: "2/16 K. Bose Sarani, Kolkata - 700080 | Direct Walk-Ins Welcome | In-House Facility"
    },
    {
      id: 11,
      title: "Precision Glass Cutting Workbench & Float Inventory",
      category: "Workshop",
      image: pic12,
      description: "Our active Kolkata fabrication floor featuring custom heavy-duty glass cutting table, mirror inventory, and fabricated UPVC window frames.",
      specs: "Heavy-Duty Cutting Table | Float Glass Slabs | UPVC Assemblies"
    },
    {
      id: 12,
      title: "Architectural Textured & Patterned Glass Slabs",
      category: "Glass",
      image: pic14,
      description: "Specialized textured, fluted, and embossed architectural safety glass panels stacked ready for luxury shower enclosures and privacy partitions.",
      specs: "Textured & Fluted Float Stock | High Privacy Diffusion | Custom Bevelled Stock"
    },
    {
      id: 13,
      title: "Official Premiere Enterprise Signage & GSTIN Verification",
      category: "Workshop",
      image: pic10,
      description: "Official exterior facility signboard highlighting verified service scope (Glass, Mirrors, Partitions, UPVC, Aluminium, Epoxy) and active GSTIN registration.",
      specs: "Verified GSTIN: 19AJFPP0751P1ZO | 10+ Years Craft | spells quality"
    },
    {
      id: 14,
      title: "Frameless Toughened Glass Partitions",
      category: "Toughened Glass Partitions",
      image: toughenedPartitionsImg,
      description: "Ultra-luxury acoustic frameless toughened glass partition walls engineered with floor-to-ceiling safety glass, minimal profile channels, and concealed pivot fittings.",
      specs: "10mm / 12mm Toughened Safety Glass | Concealed Pivot Hardware | Acoustic Seals"
    },
    {
      id: 15,
      title: "Luxury Bespoke Frameless Shower Cubicles",
      category: "Shower Cubicles",
      image: showerCubiclesImg,
      description: "Designer master bathroom walk-in shower enclosure featuring 10mm crystal clear and fluted toughened glass with matte black SS 304 architectural fittings.",
      specs: "10mm Crystal Clear & Fluted Glass | Matte Black SS 304 Hardware | Hydrophobic Nano-Coating"
    },
    {
      id: 16,
      title: "High-Precision Architectural Hardware Systems",
      category: "Architectural Hardware",
      image: architecturalHardwareImg,
      description: "Heavy-duty SS 304 and matte black architectural patch fittings, hydraulic floor springs, precision glass hinges, and spider connectors for glass installations.",
      specs: "Grade SS 304 & SS 316 Hardware | Heavy-Duty Hydraulic Floor Springs | Certified Load-Bearing"
    },
    {
      id: 17,
      title: "Designer Fluted Glass Shower Enclosure",
      category: "Shower Cubicles",
      image: showerEnclosuresImg,
      description: "Contemporary luxury walk-in shower cabin crafted with vertical fluted privacy glass, matte black architectural hardware, and precision water seals.",
      specs: "10mm Reeded Fluted Safety Glass | Matte Black SS 304 Fittings | Hydrophobic Nano-Shield"
    },
    {
      id: "video-1",
      title: "In-House Glass Cutting & Scoring Craftsmanship",
      category: "Workshop Videos",
      video: "/videos/videos1.mp4",
      image: "/videos/videos1.mp4",
      isVideo: true,
      description: "Live workshop footage of raw float glass cutting, precision scoring tables, and manual handling by seasoned glass craftsmen in Kolkata.",
      specs: "Workshop Video 1 • 0.2mm Precision Scoring • In-House Fabrication"
    },
    {
      id: "video-2",
      title: "Diamond Belt Edge-Bevelling & Grinding In Action",
      category: "Workshop Videos",
      video: "/videos/videos2.mp4",
      image: "/videos/videos2.mp4",
      isVideo: true,
      description: "Industrial heavy-duty diamond grinding belts in action, polishing and creating brilliant 12mm–25mm bevelled edges on custom glass and mirrors.",
      specs: "Workshop Video 2 • Diamond Belt Machine • Mirror Edge Bevelling"
    },
    {
      id: "video-3",
      title: "Architectural Mirror & LED Assembly Creation",
      category: "Workshop Videos",
      video: "/videos/videos3.mp4",
      image: "/videos/videos3.mp4",
      isVideo: true,
      description: "Complete fabrication and electrical integration of luxury illuminated smart LED mirrors and structural glass assemblies inside our Kolkata facility.",
      specs: "Workshop Video 3 • Bespoke Mirror Assembly • Certified Craftsmanship"
    }
  ],

  testimonials: [
    {
      id: 1,
      quote: "Premiere Enterprise truly spells quality. The diamond bevelled mirror wall and toughened partitions installed at our commercial project in Kolkata exceeded all architectural expectations.",
      author: "Rajesh S.",
      role: "Luxury Interior Architect, Kolkata",
      rating: 5,
      project: "Diamond Bevelled Mirror Wall & Partitions"
    },
    {
      id: 2,
      quote: "We ordered custom organic wave smart LED mirrors for our master bathrooms along with aluminium sliding systems. Exceptional precision, flawless edge polish, and quick installation.",
      author: "Ananya M.",
      role: "Homeowner, Kolkata",
      rating: 5,
      project: "Smart LED Mirrors & Aluminium Slidings"
    },
    {
      id: 3,
      quote: "Their digital printed glass art and architectural hardware fittings are top-tier. Dealing directly with Premiere Enterprise at K. Bose Sarani saved us both time and reseller markups.",
      author: "Sourav B.",
      role: "Commercial Developer, Kolkata",
      rating: 5,
      project: "Digital Glass Mural & Glass Doors"
    }
  ],

  faqs: [
    {
      question: "Where is Premiere Enterprise located in Kolkata?",
      answer: "Premiere Enterprise is located at 2/16, K. Bose Sarani, Kolkata - 700080. You can visit our showroom and fabrication workshop or locate us on Google Maps (https://maps.app.goo.gl/zQmSGq1HAnFEPS5j8)."
    },
    {
      question: "What products and infrastructure solutions do you provide?",
      answer: "As printed on our official catalog, we provide: Glass (Toughened, Fluted, Laminated), Mirrors (Smart LED, Frameless, Bevelled), Architectural Hardware, Structural Glazing Silicon, Toughened Glass Partitions, Frameless Glass Doors, Mirror Wall Panels, UPVC Window Systems, Aluminium Slidings, and Industrial Epoxy Flooring."
    },
    {
      question: "How can I contact Premiere Enterprise for a quotation or site measurement?",
      answer: "You can reach us directly via telephone at 7890000195 (+91 78900 00195), email us at premiereent1967@gmail.com, or click the WhatsApp floating button on our website for an instant quote."
    },
    {
      question: "Do you supply architectural hardware and structural silicon?",
      answer: "Yes! We stock and supply high-grade SS 304 patch fittings, floor springs, spider brackets, shower hinges, and premium structural glazing and mirror-safe silicones for commercial and residential contractors."
    },
    {
      question: "Do you provide on-site laser measurements in Kolkata?",
      answer: "Yes, our senior technical team visits your site to perform digital laser measurements for out-of-plumb walls, ensuring zero-error fabrication before glass cutting, bevelling, and installation."
    }
  ],

  specifications: [
    {
      title: "Available Glass & Mirror Thicknesses",
      range: "4mm to 19mm",
      details: "4mm & 5mm for Designer Mirrors; 8mm, 10mm & 12mm for Partitions & Doors; 15mm & 19mm for Structural Glazing."
    },
    {
      title: "Mirror Wall & Edge Finishes",
      range: "12mm to 25mm Diamond Bevels",
      details: "Precision diamond-wheel bevels, high-gloss flat polished edges, and rounded pencil edges for tabletops and partitions."
    },
    {
      title: "UPVC & Aluminium Slidings",
      range: "Heavy-Gauge Architectural Sections",
      details: "Lead-free multi-chambered UPVC profiles and heavy-duty Domal aluminium sliding sections with weather seals."
    },
    {
      title: "Hardware & Silicon Standards",
      range: "SS 304 Grade & Structural Silicon",
      details: "Corrosion-resistant stainless steel patch fittings and neutral cure structural silicon for enduring safety."
    }
  ]
};
