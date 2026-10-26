import React, { useState } from 'react';
import { 
  Maximize2, 
  ArrowRight,
  Play,
  Video,
  Layers,
  Sparkles
} from 'lucide-react';
import { siteData } from '../data/siteData';
import PageHeader from '../components/common/PageHeader';
import ImageLightbox from '../components/common/ImageLightbox';
import HomeCTA from '../components/home/HomeCTA';
import headerGallery from '../assets/images/header-gallery.jpg';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxState, setLightboxState] = useState({ isOpen: false, item: null, index: 0 });

  const categories = [
    { 
      id: 'All', 
      label: 'All Media', 
      badge: `${siteData.gallery.length} Media`, 
      isAll: true 
    },
    { 
      id: 'Mirror', 
      label: 'Smart LED Mirrors', 
      badge: `${siteData.gallery.filter(i => i.category === 'Mirror').length}` 
    },
    { 
      id: 'Mirror Wall Panels', 
      label: 'Bevelled Mirror Walls', 
      badge: `${siteData.gallery.filter(i => i.category === 'Mirror Wall Panels').length}` 
    },
    { 
      id: 'Toughened Glass Partitions', 
      label: 'Toughened Partitions', 
      badge: `${siteData.gallery.filter(i => i.category === 'Toughened Glass Partitions').length}` 
    },
    { 
      id: 'Shower Cubicles', 
      label: 'Shower Cubicles', 
      badge: `${siteData.gallery.filter(i => i.category === 'Shower Cubicles').length}` 
    },
    { 
      id: 'Glass Doors', 
      label: 'Glass Doors', 
      badge: `${siteData.gallery.filter(i => i.category === 'Glass Doors').length}` 
    },
    { 
      id: 'Glass', 
      label: 'Architectural Glass', 
      badge: `${siteData.gallery.filter(i => i.category === 'Glass').length}` 
    },
    { 
      id: 'Architectural Hardware', 
      label: 'Hardware', 
      badge: `${siteData.gallery.filter(i => i.category === 'Architectural Hardware').length}` 
    },
    { 
      id: 'Workshop', 
      label: 'Facility Photos', 
      badge: `${siteData.gallery.filter(i => i.category === 'Workshop' && !i.isVideo).length}` 
    },
    { 
      id: 'Workshop Videos', 
      label: 'Workshop Videos', 
      badge: '3 Videos', 
      isVideo: true 
    }
  ];

  const filteredItems = activeCategory === 'All'
    ? siteData.gallery
    : activeCategory === 'Workshop Videos'
      ? siteData.gallery.filter(item => item.isVideo || item.category === 'Workshop Videos')
      : activeCategory === 'Workshop'
        ? siteData.gallery.filter(item => item.category === 'Workshop' && !item.isVideo)
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
        description="Browse our real Kolkata showroom displays, live workshop creation videos, precision machinery, and completed architectural glass installations. Click any card to open in high-definition box view."
        breadcrumbs={[{ name: "Gallery" }]}
        image={headerGallery}
      />

      {/* 2. Gallery Showcase Grid */}
      <section className="py-20 border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Category Filter Pills - Clean wrapping on desktop/tablet, safe start-scrolling on mobile */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto sm:overflow-visible flex-nowrap sm:flex-wrap gap-2 sm:gap-2.5 pb-3 sm:pb-0 mb-8 no-scrollbar w-full px-2 sm:px-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black shadow-lg shadow-amber-500/30 border-amber-300 scale-[1.02]'
                      : cat.isVideo
                        ? 'bg-amber-500/10 text-amber-300 hover:text-white border-amber-400/30 hover:border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:scale-[1.02]'
                        : cat.isAll
                          ? 'bg-slate-900/80 text-amber-200 hover:text-white border-amber-400/30 hover:border-amber-400/60 hover:scale-[1.02]'
                          : 'glass-panel text-slate-300 hover:text-white border-white/10 hover:border-white/20 hover:scale-[1.02]'
                  }`}
                >
                  {cat.isAll ? (
                    <Layers className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                  ) : cat.isVideo ? (
                    <Video className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                  ) : null}

                  <span>{cat.label}</span>

                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                    isActive
                      ? 'bg-slate-950 text-amber-400'
                      : cat.isVideo || cat.isAll
                        ? 'bg-amber-400/20 text-amber-300'
                        : 'bg-white/10 text-slate-400'
                  }`}>
                    {cat.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Contextual Category Hint Banner */}
          {activeCategory === 'All' && (
            <div className="mb-10 p-4 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                <span>
                  Showing all <strong className="text-amber-400 font-bold">{siteData.gallery.length} items</strong> (17 master installations &amp; 3 workshop fabrication videos).
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 hidden md:inline">Quick Jump:</span>
                <button
                  onClick={() => setActiveCategory('Mirror')}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-medium transition-all text-xs cursor-pointer"
                >
                  Smart LED Mirrors
                </button>
                <button
                  onClick={() => setActiveCategory('Workshop Videos')}
                  className="px-3.5 py-1.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-amber-300 font-bold transition-all flex items-center gap-1.5 text-xs cursor-pointer shadow-sm hover:scale-[1.02]"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Workshop Videos (3)</span>
                </button>
              </div>
            </div>
          )}

          {activeCategory === 'Workshop Videos' && (
            <div className="mb-10 p-5 rounded-2xl bg-amber-500/10 border border-amber-400/30 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-heading">
                    Behind The Craft: In-House Fabrication Videos
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Live footage of precision glass cutting tables, industrial diamond belt edge-bevelling, and smart LED mirror assembly at 2/16 K. Bose Sarani, Kolkata.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-amber-300 bg-slate-950/80 px-3.5 py-1.5 rounded-full border border-amber-400/30 whitespace-nowrap">
                3 HD Workshop Videos
              </span>
            </div>
          )}

          {/* Grid of All Real Photos & Live Workshop Videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative rounded-3xl p-[1.5px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(245,158,11,0.25)] cursor-pointer flex flex-col shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
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
                    {/* Media Container with Zoom/Play Prompt */}
                    <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-950">
                      {item.isVideo ? (
                        <div className="relative w-full h-full">
                          <video
                            src={item.video || item.image}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            onMouseEnter={(e) => {
                              try { e.target.play(); } catch(err) {}
                            }}
                            onMouseLeave={(e) => {
                              try { e.target.pause(); } catch(err) {}
                            }}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          {/* Centered Glowing Gold Play Button Icon */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-16 h-16 rounded-full bg-slate-950/80 border-2 border-amber-400 text-amber-300 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.6)] group-hover:scale-115 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300">
                              <Play className="w-7 h-7 fill-current ml-1" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={item.image}
                          alt={item.title}
                          className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} group-hover:scale-108 transition-transform duration-700 ease-out`}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-60 transition-opacity pointer-events-none" />

                      {/* Category Pill */}
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/30 text-[11px] font-bold text-amber-300 flex items-center gap-1.5 shadow-md">
                        {item.isVideo && (
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                        )}
                        <span>{item.category}</span>
                      </div>

                      {/* Box View Action Icon */}
                      <div className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white group-hover:bg-amber-400 group-hover:border-amber-400 group-hover:text-slate-950 transition-all duration-300 shadow-lg">
                        {item.isVideo ? (
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        ) : (
                          <Maximize2 className="w-4 h-4" />
                        )}
                      </div>

                      {/* Overlay Click Hint */}
                      <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-slate-300 pointer-events-none">
                        <span className="font-mono text-amber-400 text-[11px] truncate max-w-[200px]">{item.specs}</span>
                        <span className="underline group-hover:text-white transition-colors text-[11px]">
                          {item.isVideo ? 'Click to watch video' : 'Click to expand'}
                        </span>
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
                    <span className="font-mono text-amber-400">
                      {item.isVideo ? 'HD Creation Video' : 'Box Screen View'}
                    </span>
                    <span className="font-bold text-white group-hover:text-amber-300 flex items-center gap-1">
                      {item.isVideo ? (
                        <>
                          <span>Play Video</span> <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </>
                      ) : (
                        <>
                          <span>Open Preview</span> <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
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
