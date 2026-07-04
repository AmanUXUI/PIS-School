import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const IMAGES = [
  'https://i.postimg.cc/28RnyYNS/DSC08423-JPG.jpg',
  'https://i.postimg.cc/bvsZLVf6/DSC08807-JPG.jpg',
  'https://i.postimg.cc/dVnC5TkQ/DSC08550-JPG.jpg',
  'https://i.postimg.cc/3NBr32HH/DSC09219-JPG.jpg',
  'https://i.postimg.cc/wvN7Ytvs/DSC08713-JPG.jpg',
  'https://i.postimg.cc/pdGDLnRk/DSC08313-JPG.jpg',
  'https://i.postimg.cc/2y4bhqNf/DSC08480-JPG.jpg',
  'https://i.postimg.cc/XY2ZfSmX/DSC08696-JPG.jpg',
  'https://i.postimg.cc/sDd5xzCD/DSC08358-JPG.jpg',
  'https://i.postimg.cc/FKBL45xX/DSC08557-JPG.jpg',
  'https://i.postimg.cc/SxV9gzXP/DSC08462-JPG.jpg',
  'https://i.postimg.cc/Xq37MQmx/DSC09205-JPG.jpg',
  'https://i.postimg.cc/d38kr7cw/DSC08687-JPG.jpg',
  'https://i.postimg.cc/BbWPjTyM/DSC08466-JPG.jpg',
  'https://i.postimg.cc/sDs1bgRd/DSC08961-JPG.jpg',
  'https://i.postimg.cc/2y4bhqND/DSC08669-JPG.jpg',
  'https://i.postimg.cc/NF4GQRw0/DSC09061-JPG.jpg',
  'https://i.postimg.cc/J4xt8C1v/DSC09287-JPG.jpg'
];

export default function LifeAtPavnaGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Triple the array to provide an uninterrupted, ultra-wide infinite marquee loop
  const repeatedImages = [...IMAGES, ...IMAGES, ...IMAGES];

  const handleCardClick = (url: string) => {
    const originalIndex = IMAGES.indexOf(url);
    if (originalIndex !== -1) {
      setSelectedIdx(originalIndex);
    }
  };

  const nextSlide = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev! + 1) % IMAGES.length);
    }
  };

  const prevSlide = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev! - 1 + IMAGES.length) % IMAGES.length);
    }
  };

  return (
    <section 
      id="life-at-pavna" 
      className="py-16 md:py-24 relative bg-[#FDFCFB] overflow-hidden border-b border-gray-100"
    >
      {styleBlock}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10 font-gill text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-3 w-full max-w-md mx-auto">
          <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
          <span className="shrink-0 text-brand-orange text-[11px] leading-none tracking-[2px] uppercase font-bold">
            Life At Pavna
          </span>
          <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-[42px] lg:text-[42px] font-bold text-brand-navy tracking-tight leading-tight md:leading-[50px] lg:leading-[50px] mb-4">
          Campus Gallery
        </h2>

      </div>

      {/* SINGLE HORIZONTAL ROW INFINITE LOOP DECK */}
      <div 
        className="relative w-full overflow-hidden flex py-2 select-none"
        style={{ maskImage: 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)' }}
      >
        <div 
          className="flex gap-6 w-max anim-gallery-scroller hover:[animation-play-state:paused] pointer-events-auto cursor-pointer"
          style={{ animationDuration: '80s' }}
        >
          {repeatedImages.map((url, index) => (
            <div
              key={`gallery-img-${index}`}
              onClick={() => handleCardClick(url)}
              className="group relative h-[260px] sm:h-[340px] md:h-[380px] aspect-[4/3] rounded-2xl overflow-hidden bg-gray-150 transition-all duration-500 ease-out hover:shadow-2xl hover:scale-[1.03] shrink-0"
            >
              <img
                src={url}
                alt="Pavna Campus Moment"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Minimal Dark Hover Vignette and subtle search icon (pure visual focus) */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3.5 rounded-full bg-white/95 text-brand-navy shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* EXTREMELY MINIMAL, DISTRACTION-FREE VIEWPORT LIGHTBOX */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Top Close Control Layout */}
            <div className="absolute top-6 right-6 text-white z-50">
              <button 
                onClick={() => setSelectedIdx(null)}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 transition-all text-white flex items-center justify-center cursor-pointer duration-300"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation buttons: Left Arrow */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 sm:left-8 w-14 h-14 rounded-full bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center transition-all z-20 cursor-pointer select-none active:scale-95 shadow-lg border border-white/5"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Navigation buttons: Right Arrow */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 sm:right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center transition-all z-20 cursor-pointer select-none active:scale-95 shadow-lg border border-white/5"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Lightbox Animated Display Body (no captions, purely image focused) */}
            <motion.div 
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="max-w-5xl w-full max-h-[85vh] flex items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={IMAGES[selectedIdx]} 
                alt="Selected Campus Moment"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl select-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const styleBlock = (
  <style>{`
    @keyframes gallery-infinite-scroller {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-33.3333%, 0, 0); }
    }
    .anim-gallery-scroller {
      animation: gallery-infinite-scroller linear infinite;
    }
  `}</style>
);
