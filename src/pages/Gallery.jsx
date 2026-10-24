import React, { useState } from 'react';
import { 
  Maximize2, 
  ArrowRight
} from 'lucide-react';
import { siteData } from '../data/siteData';
import PageHeader from '../components/common/PageHeader';
import ImageLightbox from '../components/common/ImageLightbox';
import HomeCTA from '../components/home/HomeCTA';
import headerGallery from '../assets/images/header-gallery.jpg';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxState, setLightboxState] = useState({ isOpen: false, item: null, index: 0 });

  const categories = ['All', 'Mirror', 'Mirror Wall Panels', 'Glass', 'Toughened Glass Partitions', 'Shower Cubicles', 'Architectural Hardware', 'Glass Doors', 'Workshop'];

  const filteredItems = activeCategory === 'All'
    ? siteData.gallery
    : siteData.gallery.filter(item => item.category === activeCategory);

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
    <div className="bg-gradient-to-b from-[#131929] via-[#0f1422] to-[#0c101a] text-slate-100 min-h-screen">
      {/* 1. Page Header with Luxury Glass & Mirror Showroom Background */}
      <PageHeader
        badge="Craftsmanship Portfolio"
        title="Authentic Architectural"
        gradientTitle="Glass & Mirror Gallery"
        description="Browse our real Kolkata showroom displays, workshop machinery, and completed architectural glass installations. Click any image to open in high-definition box view."
        breadcrumbs={[{ name: "Gallery" }]}
        image={headerGallery}
      />

      {/* 2. Gallery Showcase Grid */}
      <section className="py-20 border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 mb-12 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25 border-amber-400'
                    : 'glass-panel text-slate-400 hover:text-white border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of All Real Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative rounded-3xl p-[1.5px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(245,158,11,0.22)] cursor-pointer flex flex-col shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
              >
                {/* Traveling Specular Border Beam Animation */}
                <div 
                  className="absolute -inset-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,rgba(245,158,11,0.25)_330deg,rgba(251,191,36,0.95)_350deg,transparent_360deg)] animate-border-beam opacity-85 sm:opacity-40 sm:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    animationDelay: `${idx * 1.2}s`
                  }}
                />

                {/* Inner Card Container */}
                <div className="relative rounded-[22px] overflow-hidden bg-slate-950 border border-amber-400/25 sm:border-white/10 sm:group-hover:border-amber-400/40 transition-all duration-500 flex flex-col justify-between h-full shadow-xl">
                  <div>
                    {/* Image Container with Zoom Prompt */}
                    <div className="relative h-72 sm:h-80 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} group-hover:scale-108 transition-transform duration-700 ease-out`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                      {/* Category Pill */}
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/30 text-[11px] font-bold text-amber-300">
                        {item.category}
                      </div>

                      {/* Box View Action Icon */}
                      <div className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white group-hover:bg-amber-400 group-hover:border-amber-400 group-hover:text-slate-950 transition-all duration-300 shadow-lg">
                        <Maximize2 className="w-4 h-4" />
                      </div>

                      {/* Overlay Click Hint */}
                      <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-slate-300">
                        <span className="font-mono text-amber-400 text-[11px] truncate max-w-[200px]">{item.specs}</span>
                        <span className="underline group-hover:text-white transition-colors text-[11px]">Click to expand</span>
                      </div>
                    </div>

                    {/* Caption & Specs */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-heading leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-amber-400">Box Screen View</span>
                    <span className="font-bold text-white group-hover:text-amber-300 flex items-center gap-1">
                      Open Preview <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Closing CTA */}
      <HomeCTA />

      {/* Interactive Box Screen Modal */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ ...lightboxState, isOpen: false })}
        currentImage={lightboxState.item}
        images={filteredItems}
        currentIndex={lightboxState.index}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
