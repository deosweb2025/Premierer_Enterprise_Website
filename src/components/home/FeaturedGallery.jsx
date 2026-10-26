import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  ArrowRight, 
  Maximize2, 
  Sparkles 
} from 'lucide-react';
import { siteData } from '../../data/siteData';
import SectionHeading from '../common/SectionHeading';
import ImageLightbox from '../common/ImageLightbox';

export default function FeaturedGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxState, setLightboxState] = useState({ isOpen: false, item: null, index: 0 });

  const filterCategories = [
    { label: 'All Showcases', key: 'All' },
    { label: 'Toughened Partitions', key: 'Toughened Glass Partitions' },
    { label: 'Shower Cubicles', key: 'Shower Cubicles' },
    { label: 'Hardware', key: 'Architectural Hardware' },
    { label: 'Smart LED Mirrors', key: 'Mirror' },
    { label: 'Bevelled Mirror Walls', key: 'Mirror Wall Panels' },
    { label: 'Architectural Glass', key: 'Glass' },
    { label: 'Kolkata Workshop', key: 'Workshop' }
  ];

  // Curated 6 featured installations for the Home page Gallery section
  // (Replaces redundant mirror photos with Luxury Toughened Glass Partitions & Luxury Bespoke Shower Cubicles from Screenshot 2)
  const homeFeaturedGalleryIds = [1, 5, 3, 4, 14, 15];

  const getFilteredItems = () => {
    if (activeCategory === 'All') {
      return homeFeaturedGalleryIds
        .map(id => siteData.gallery.find(item => item.id === id))
        .filter(Boolean);
    }
    return siteData.gallery.filter(item => 
      !item.isVideo && item.category.toLowerCase().includes(activeCategory.toLowerCase())
    );
  };

  const filteredItems = getFilteredItems();

  const handleOpenLightbox = (index) => {
    setLightboxState({
      isOpen: true,
      item: filteredItems[index],
      index
    });
  };

  const handlePrev = () => {
    const nextIdx = (lightboxState.index - 1 + filteredItems.length) % filteredItems.length;
    setLightboxState({
      ...lightboxState,
      index: nextIdx,
      item: filteredItems[nextIdx]
    });
  };

  const handleNext = () => {
    const nextIdx = (lightboxState.index + 1) % filteredItems.length;
    setLightboxState({
      ...lightboxState,
      index: nextIdx,
      item: filteredItems[nextIdx]
    });
  };

  return (
    <section className="py-24 sm:py-28 bg-gradient-to-b from-[#0f1422] via-[#141a2a] to-[#101524] relative overflow-hidden border-t border-white/10">
      {/* Background Lighting Glows (Champagne Amber & Titanium Sky) */}
      <div className="absolute top-1/4 -right-32 w-[34rem] h-[34rem] bg-amber-500/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[32rem] h-[32rem] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Architectural Grid Pattern */}
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
          badge="Real Client Installations • Kolkata"
          title="Curated Architectural"
          gradientTitle="Glass Gallery"
          subtitle="Click on any photograph to inspect in full-screen box view. Every installation displayed represents authentic craftsmanship fabricated by Premiere Enterprise in Kolkata."
        />

        {/* Executive Segmented Glass Filter Bar with Sliding Liquid-Gold Indicator */}
        <div className="flex items-center justify-center mb-12 sm:mb-14">
          <div className="inline-flex p-1.5 rounded-2xl glass-panel border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.45)] max-w-full overflow-x-auto no-scrollbar gap-1.5 bg-slate-950/60 backdrop-blur-xl">
            {filterCategories.map((cat) => {
              const isActive = activeCategory === cat.key;
              const count = cat.key === 'All' 
                ? homeFeaturedGalleryIds.length 
                : siteData.gallery.filter(i => i.category.toLowerCase().includes(cat.key.toLowerCase())).length;

              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer z-10 ${
                    isActive
                      ? 'text-slate-950 font-black shadow-[0_0_20px_rgba(245,158,11,0.35)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeGalleryFilterPill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 z-[-1]"
                    />
                  )}
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md font-bold ${
                    isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-white/10 text-amber-300'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid with Animated Card Border Beams */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence>
            {filteredItems.slice(0, 6).map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-3xl p-[1.5px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(245,158,11,0.22)] cursor-pointer shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
                onClick={() => handleOpenLightbox(idx)}
              >
                {/* Traveling Liquid-Gold Border Beam Animation */}
                <div 
                  className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,rgba(245,158,11,0.25)_330deg,rgba(251,191,36,0.95)_350deg,transparent_360deg)] animate-border-beam opacity-85 sm:opacity-40 sm:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    animationDelay: `${idx * 1.3}s`
                  }}
                />

                {/* Inner Card Container */}
                <div className="relative rounded-[22px] overflow-hidden h-[370px] sm:h-[410px] bg-slate-950 border border-amber-400/25 sm:border-white/10 sm:group-hover:border-amber-400/40 transition-all duration-500 flex flex-col justify-between shadow-xl">
                  
                  {/* Photo Display with Smooth Cinematic Zoom */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover ${item.objectPosition || 'object-center'} group-hover:scale-108 transition-transform duration-700 ease-out`}
                  />
                  
                  {/* Cinematic Bottom & Corner Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d15]/95 via-[#090d15]/30 to-transparent pointer-events-none" />

                  {/* Top Bar: Floating Category Pill & 4K Expand Icon */}
                  <div className="relative z-10 p-4 flex items-center justify-between">
                    <div className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/40 text-[10px] font-bold text-amber-300 shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{item.category}</span>
                    </div>

                    <div className="p-2.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-white group-hover:bg-amber-400 group-hover:border-amber-400 group-hover:text-slate-950 transition-all duration-300 shadow-xl">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Bottom Caption Dossier with Glassmorphic Card */}
                  <div className="relative z-10 m-3 sm:m-3.5 p-3.5 sm:p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-amber-400/25 sm:border-white/10 sm:group-hover:border-amber-400/40 transition-all duration-300 shadow-xl">
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1 leading-snug">
                      {item.title}
                    </h4>
                    
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-amber-300 font-semibold truncate pr-2">
                        {item.specs.split('|')[0]}
                      </span>
                      <span className="text-amber-400 font-bold flex items-center gap-1 shrink-0 group-hover:text-white transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                        <span>4K Box</span>
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Gallery Link Banner */}
        <div className="mt-14 text-center">
          <Link
            to="/gallery"
            className="px-8 py-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-xl shadow-amber-500/30 hover:shadow-amber-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-flex items-center gap-2.5 group cursor-pointer"
          >
            <span>Explore Complete Architectural Portfolio ({siteData.gallery.length} Installations)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ ...lightboxState, isOpen: false })}
        currentImage={lightboxState.item}
        images={filteredItems}
        currentIndex={lightboxState.index}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
