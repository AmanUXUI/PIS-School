import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const STAGES = [
  {
    id: "early-years",
    title: "Early Years",
    tag: "(Age 3 TO 5 Yrs)",
    image: "https://i.postimg.cc/G27wmxSp/Early-Years.jpg",
    description: "The school offers co-educational boarding and day places at key academic stages.",
    link: "Find out more →",
    position: "left"
  },
  {
    id: "primary",
    title: "Primary",
    tag: "(Age 5 TO 11 Yrs)",
    image: "https://i.postimg.cc/j5g0S4k5/Primary.jpg",
    description: "Broad, balanced curriculum focused on intellectual development.",
    link: "Find out more →",
    position: "center"
  },
  {
    id: "lower-secondary",
    title: "Lower Secondary",
    tag: "(Age 11 TO 14 Yrs)",
    image: "https://i.postimg.cc/XJHSYkDq/Low-Secondary.jpg",
    description: "Transitioning to deeper academic focus and personal development.",
    link: "Find out more →",
    position: "center"
  },
  {
    id: "upper-secondary",
    title: "Upper Secondary - IGCSE",
    tag: "(Age 14 TO 16 Yrs)",
    image: "https://i.postimg.cc/mDXfgy6L/Upper-Secondary.jpg",
    description: "Rigorous academic preparation for international recognized qualifications.",
    link: "Find out more →",
    position: "center"
  },
  {
    id: "advance",
    title: "Advance - AS & A Level",
    tag: "(Age 16 TO 18 Yrs)",
    image: "https://i.postimg.cc/QtxZDymR/Advance.jpg",
    description: "Expert guidance for university success and global leadership roles.",
    link: "Find out more →",
    position: "center"
  }
];

export default function ImageGallery() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="stages-gallery" className="relative w-full h-auto md:h-[900px] overflow-hidden bg-brand-navy flex flex-row">
      {/* Academics Vertical Banner */}
      <div className="w-8 sm:w-10 md:w-12 lg:w-14 bg-[#FFCC00] flex items-center justify-center flex-shrink-0 z-20 shadow-[6px_0_20px_rgba(0,0,0,0.15)] relative">
        <span 
          className="text-[12px] md:text-[16px] font-bold uppercase tracking-[0.3em] font-serif select-none no-underline"
          style={{ 
            writingMode: 'vertical-rl', 
            transform: 'rotate(180deg)',
            color: '#362f59'
          }}
        >
          Academics
        </span>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 flex-1 h-auto md:h-full flex flex-col md:flex-row">
        {STAGES.map((stage, i) => (
          <div
            key={stage.id}
            onMouseEnter={() => setActiveIdx(i)}
            onClick={() => setActiveIdx(i)}
            className={cn(
              "relative group transition-all duration-700 cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/10 last:border-0",
              activeIdx === i ? "aspect-square md:aspect-auto md:flex-[2] bg-brand-navy/0" : "h-20 md:h-full md:flex-1 bg-black/40 hover:bg-black/20"
            )}
          >
            {/* Hover Highlight (Stroke) */}
            <div className={cn(
              "absolute inset-0 z-20 border-yellow-400 transition-all duration-300 pointer-events-none",
              activeIdx === i ? "border-[3px] md:border-[5px]" : "border-0"
            )} />

            {/* Image in Card */}
            <div className="absolute inset-0 overflow-hidden bg-brand-navy">
              <img 
                src={stage.image} 
                alt={stage.title} 
                className={cn(
                  "w-full h-full object-cover transition-all duration-700",
                  activeIdx === i ? "grayscale-0 scale-105 opacity-100" : "grayscale brightness-50 opacity-40 group-hover:scale-102 group-hover:opacity-55"
                )}
                style={{ objectPosition: stage.position }}
              />
              <div className={cn(
                "absolute inset-0 transition-opacity duration-700 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent",
                activeIdx === i ? "opacity-0" : "opacity-70"
              )} />
              {/* Custom elegant background gradient for the active container (#201A5B, 65% bottom to 0% top) */}
              <div 
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 pointer-events-none",
                  activeIdx === i ? "opacity-100" : "opacity-0"
                )}
                style={{ 
                  background: 'linear-gradient(to top, rgba(32, 26, 91, 0.65) 0%, rgba(32, 26, 91, 0) 100%)' 
                }} 
              />
            </div>

            {/* Content Overlay */}
            <div className={cn(
              "absolute inset-x-0 z-30 pointer-events-none transition-all duration-500",
              activeIdx === i ? "bottom-0 p-5 sm:p-8 md:p-12" : "top-0 p-4 md:p-12 h-full flex items-center"
            )}>
              <div className="flex flex-col justify-end h-full w-full">
                <motion.div
                  initial={false}
                  animate={{ 
                    y: activeIdx === i ? 0 : 0,
                    opacity: activeIdx === i ? 1 : 0.7
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className={cn(
                    "text-[10px] md:text-[11px] font-bold text-yellow-400 uppercase tracking-[2px] mb-1.5 block",
                    activeIdx === i ? "block" : "hidden md:block"
                  )}>
                    {stage.tag}
                  </span>
                  <h3 className={cn(
                    "text-sm sm:text-base md:text-3xl lg:text-4xl font-bold text-white transition-all duration-[400ms]",
                    activeIdx === i ? "text-lg sm:text-xl md:text-3xl lg:text-4xl mb-2 md:mb-6" : "mb-0"
                  )}>
                    {stage.title}
                  </h3>
                </motion.div>
                
                <div className={cn(
                  "overflow-hidden transition-all duration-500 max-h-0",
                  activeIdx === i ? "max-h-[200px] opacity-100 mt-1" : "max-h-0 opacity-0"
                )}>
                  <p className="text-white/70 text-xs sm:text-sm md:text-lg mb-4 md:mb-8 max-w-xs leading-relaxed font-semibold">
                    {stage.description}
                  </p>
                  <a href={`#${stage.id}`} className="inline-flex items-center gap-2 text-yellow-400 text-[10px] md:text-[11px] font-bold uppercase tracking-[2px] hover:text-white transition-colors pointer-events-auto">
                    {stage.link}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
