import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

export default function ImageLightbox({
  isOpen,
  onClose,
  currentImage,
  images = [],
  onPrev,
  onNext,
  currentIndex = 0
}) {
  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#05070a]/92 backdrop-blur-2xl"
        onClick={onClose}
      >
        {/* Top Controls Bar */}
        <div 
          className="absolute top-4 left-0 right-0 px-4 sm:px-8 flex items-center justify-between z-50 pointer-events-none"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="pointer-events-auto flex items-center gap-2 bg-slate-950/85 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>{currentImage.category || 'Glass Craftsmanship'}</span>
            <span className="text-slate-500">•</span>
            <span>{currentIndex + 1} of {images.length}</span>
          </div>

          <button
            onClick={onClose}
            className="pointer-events-auto p-2.5 rounded-full bg-slate-950/80 hover:bg-rose-500/20 text-slate-300 hover:text-white border border-white/10 hover:border-rose-500/50 transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-slate-950/80 hover:bg-amber-500/20 text-white border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-2xl backdrop-blur-md group cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform text-amber-300" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-slate-950/80 hover:bg-amber-500/20 text-white border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-2xl backdrop-blur-md group cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform text-amber-300" />
            </button>
          </>
        )}

        {/* Modal Content Box */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 15 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative max-w-5xl w-full max-h-[92vh] flex flex-col rounded-2xl overflow-hidden glass-panel border border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.2)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Main Media Container with full uncropped display */}
          <div className="relative w-full h-[52vh] sm:h-[64vh] max-h-[64vh] bg-slate-950 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
            {currentImage.isVideo || currentImage.video ? (
              <video
                key={currentImage.video || currentImage.image}
                src={currentImage.video || currentImage.image}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain rounded-lg shadow-2xl bg-black"
              />
            ) : (
              <img
                src={currentImage.image}
                alt={currentImage.title}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            )}
            {/* Subtle glass reflection highlight */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-amber-500/5 via-transparent to-yellow-500/5 opacity-50" />
          </div>

          {/* Image Details Caption Bar */}
          <div className="p-3 sm:p-5 bg-slate-950/95 border-t border-white/10 shrink-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide flex items-center gap-2 font-heading">
                  {currentImage.title}
                </h3>
                {currentImage.description && (
                  <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                    {currentImage.description}
                  </p>
                )}
                {currentImage.specs && (
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono mt-2">
                    <Info className="w-3.5 h-3.5 inline text-amber-400" />
                    <span>{currentImage.specs}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <a
                  href="/contact"
                  className="px-5 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-400/35 transition-all duration-300 shrink-0"
                >
                  Inquire This Design
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
