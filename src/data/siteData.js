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

export const siteImages = {
  pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic14,
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
    brandStatement: "Architectural Glass, Designer Mirrors & Premium Interior Infrastructure",
    description: "Premiere Enterprise is a trusted leader in architectural glass fabrication, designer smart LED mirrors, diamond-bevelled mirror wall panels, toughened glass partitions, UPVC windows, aluminium slidings, architectural hardware, and industrial epoxy flooring in Kolkata.",
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
      weekdays: "Monday – Saturday: 10:00 AM – 8:30 PM",
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
    { id: "hardware", name: "Architectural Hardware", desc: "Premium Patch Fittings, Floor Springs, Handles & Spider Connectors" },
    { id: "silicon", name: "Silicon", desc: "High-Performance Structural Glazing Silicon & Weatherproof Sealants" },
    { id: "partitions", name: "Toughened Glass Partitions", desc: "Frameless 10mm/12mm Office & Residential Glass Divider Walls" },
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
      image: pic6,
      shortDesc: "Heavy-duty structural safety glass partitions providing clear acoustic separation, modern elegance, and maximum light distribution for office suites and residences.",
      features: [
        "10mm & 12mm High-Grade Toughened Safety Glass",
        "Certified IS 2553 Thermal & Impact Resistance",
        "Clear, Frosted, Fluted, or Acid-Etched Privacy Options",
        "Zero Optical Distortion Float Substrates",
        "Precision Cutouts for Floor Springs and Patch Fittings"
      ],
      suitableFor: "Corporate Offices, Conference Rooms, Luxury Shower Partitions, Balustrades",
      thickness: "10mm, 12mm & 15mm Toughened Glass"
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
      image: pic6,
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
      title: "Toughened Partitions & Glass Doors",
      desc: "Turnkey fabrication and installation of frameless toughened glass partitions, conference room walls, and pivot glass doors.",
      icon: "Grid",
      points: [
        "10mm & 12mm certified safety toughened glass",
        "Concealed patch fittings & hydraulic floor springs",
        "Acoustic sealing and soft-close sliding systems"
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
    }
  ],

  // Real Gallery Items (9 authentic photos)
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
      category: "Toughened Glass Partitions",
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
