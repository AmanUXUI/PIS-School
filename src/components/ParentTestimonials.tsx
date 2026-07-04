import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface TestimonialReel {
  title: string;
  parentName: string;
  role: string;
  url: string;
  thumbnail: string;
  sparkText: string;
  quote: string;
}

const REELS_DATA: TestimonialReel[] = [
  {
    title: "Inspiring Growth & Academics",
    parentName: "Mrs. Meenakshi Sharma",
    role: "Parent of Grade 8 Student",
    url: "https://www.instagram.com/reel/DYPmM5HEp3y/?igsh=YzZsYjd5YndwN2s0",
    thumbnail: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    sparkText: "Holistic Academics",
    quote: "Pavna provides a transformative experience where students build incredible confidence, high-quality character, and intellectual curiosity."
  },
  {
    title: "Shaping Leaders of Tomorrow",
    parentName: "Mr. & Mrs. Kapoor",
    role: "Parents of Grade 11 IGCSE Student",
    url: "https://www.instagram.com/reel/DYTqWeNAE6d/?igsh=MWpkcTJzbjY5czc0bg==",
    thumbnail: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
    sparkText: "Global Readiness",
    quote: "Preparing children beautifully for international boards while keeping them deeply rooted in rich core human values."
  },
  {
    title: "A Nurturing & Safe Environment",
    parentName: "Dr. Aditya Sen",
    role: "Parent of Boarding Student",
    url: "https://www.instagram.com/reel/DaXcMnBiCGj/?igsh=aGJ3aHo2d2M1M2s=",
    thumbnail: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80",
    sparkText: "Safe Haven & Mentor Support",
    quote: "The boarding facilities are unmatched. The teachers serve as genuine mentors, giving parents complete peace of mind."
  }
];

export default function ParentTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const getReelCode = (url: string) => {
    const match = url.match(/\/reel\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % REELS_DATA.length);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + REELS_DATA.length) % REELS_DATA.length);
  };

  return (
    <section className="py-16 bg-[#FAF9F5] border-t border-b border-gray-200 relative overflow-hidden" id="parent-testimonials">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-fit max-w-full mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-5 w-full">
              <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              <span className="shrink-0 text-brand-orange text-[11px] leading-[28px] tracking-[1.65px] uppercase font-bold">Community Voice</span>
              <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
            </div>

            <h2 className="text-3xl md:text-[42px] lg:text-[42px] md:leading-[50px] lg:leading-[50px] font-bold font-gill text-brand-navy tracking-tight mb-5">
              Parent Testimonials
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill max-w-2xl mx-auto"
          >
            Experience the genuine moments and heartfelt journeys shared directly by our parent community. 
            Click on any card to play their complete interactive video story on Instagram.
          </motion.p>
        </div>

        {/* Video Testimonials Cards Grid - Desktop only */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {REELS_DATA.map((item, index) => {
            const reelCode = getReelCode(item.url);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(32,26,91,0.06)] transition-all duration-400 flex flex-col h-[580px]"
              >
                {/* The Pure Reel Widget Frame */}
                <div className="relative flex-grow bg-black select-none">
                  {reelCode ? (
                    <iframe 
                      src={`https://www.instagram.com/reel/${reelCode}/embed`} 
                      className="w-full h-full border-0 absolute inset-0"
                      allowtransparency="true"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      scrolling="no"
                      title={item.title}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      Reel not found
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Video Testimonials Slider/Carousel - Mobile only */}
        <div className="md:hidden flex flex-col items-center max-w-[340px] mx-auto">
          <div className="w-full relative h-[520px] bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full relative"
              >
                {getReelCode(REELS_DATA[activeIdx].url) ? (
                  <iframe 
                    src={`https://www.instagram.com/reel/${getReelCode(REELS_DATA[activeIdx].url)}/embed`} 
                    className="w-full h-full border-0 absolute inset-0"
                    allowtransparency="true"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    scrolling="no"
                    title={REELS_DATA[activeIdx].title}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-sm bg-black text-white">
                    Reel not found
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider navigation and dots */}
          <div className="flex items-center justify-center w-full px-2">
            <div className="flex gap-2 items-center">
              {REELS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIdx === idx ? 'bg-[#f48120] w-6' : 'bg-[#f48120]/20 w-2'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
