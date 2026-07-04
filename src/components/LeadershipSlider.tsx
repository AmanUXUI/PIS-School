import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '../lib/utils';

const LEADERSHIP_DATA = [
  {
    id: 1,
    headline: "From Visionary Leadership to Educational Excellence",
    description: "Guided by purpose and legacy, Pavna Group continues to shape future leaders through world-class infrastructure, international faculty, and a commitment to surpassing conventional academic boundaries.",
    name: "Dr. Shayama Chona",
    title: "Patron & Principal Advisor",
    recognition: "Padma Shri & Padma Bhushan",
    image: "https://i.postimg.cc/02gKr06L/Guest-Image.png",
  },
  {
    id: 2,
    headline: "From Cambridge Classrooms to Global Leadership",
    description: "Nurturing innovators through a dynamic Cambridge curriculum, rooted in cultural values and global perspectives preparing students to lead and drive change worldwide.",
    name: "Mr. Swapnil Jain",
    title: "Chairman",
    institution: "Pavna International School (PIS)",
    image: "https://i.postimg.cc/J0twLXm8/Guest-Image-2.png",
  },
  {
    id: 3,
    headline: "From 35 Years of Experience to Shaping Future Leaders",
    description: "Championing collaborative education through teachers, parents, and community fostering interactive learning and a lifelong passion for knowledge at PIS.",
    name: "Jeanie Naozer Aibara",
    title: "Board Member",
    institution: "Pavna International School (PIS)",
    image: "https://i.postimg.cc/90VkmN9q/Guest-Image-5.png",
  },
  {
    id: 4,
    headline: "From Global Standards to Sculpting Individual Excellence",
    description: "Blending Cambridge curriculum, cultural values, and Apple-enabled technology to empower every student to chart their own unique path guided by the spirit of 'Be Yourself'.",
    name: "Prof. KVSM Krishna",
    title: "Director Emeritus",
    institution: "Pavna International School (PIS)",
    image: "https://i.postimg.cc/hPz8516s/Guest-Image-3.png",
  },
  {
    id: 5,
    headline: "From 21st-Century Learning to Holistic Development",
    description: "Balancing rigorous Cambridge academics with sports, arts, and experiential learning celebrating individuality and empowering every student.",
    name: "Ms. Aarti Nigam",
    title: "Principal",
    institution: "Pavna International School (PIS)",
    image: "https://i.postimg.cc/vBDFRKW9/Guest-Image-4.png",
  }
];

export default function LeadershipSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % LEADERSHIP_DATA.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + LEADERSHIP_DATA.length) % LEADERSHIP_DATA.length);

  const current = LEADERSHIP_DATA[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="bg-brand-navy py-16 md:py-24 px-4 sm:px-8 md:px-16 overflow-hidden min-h-0 flex items-center font-gill">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-12 items-center">
        
        {/* Left Side: Headline and Nav */}
        <div className="lg:col-span-12 xl:col-span-5 text-white text-center xl:text-left flex flex-col items-center xl:items-start mx-auto xl:mx-0">
          <span className="text-xs uppercase tracking-widest font-bold text-[#ffca05] mb-4 block text-center xl:text-left">Leadership & Vision</span>
          <h2 className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[42px] leading-tight md:leading-[50px] font-bold mb-4 text-center xl:text-left">
            Discover the inspiring stories <br className="hidden md:block" />
            <span className="text-white">& honest experiences</span> <br className="hidden md:block" />
            shared by our leaders.
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-2 xl:mb-8 max-w-md text-center xl:text-left mx-auto xl:mx-0">
            Our governing body, administration, and advisory panel share the core philosophies, strategic insights, and institutional milestones that define our educational blueprint.
          </p>

          {/* Thumbnails - Desktop Only */}
          <div className="hidden xl:flex flex-wrap gap-4 mb-12">
            {LEADERSHIP_DATA.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group relative w-12 h-[60px] rounded-[4px] overflow-hidden border-2 transition-all duration-500",
                  activeIndex === index ? "border-white scale-110 z-10" : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
                )}
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className={cn(
                  "absolute inset-0 bg-brand-navy/20 transition-opacity duration-300",
                  activeIndex === index ? "opacity-0" : "group-hover:opacity-0"
                )}></div>
              </button>
            ))}
          </div>

          {/* Arrow Controls - Desktop Only */}
          <div className="hidden xl:flex items-center gap-4">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-[4px] border border-white/40 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-[4px] border border-white/40 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all duration-300 cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Side: Showcase Card */}
        <div className="lg:col-span-12 xl:col-span-7 h-full flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-[4px] overflow-hidden flex flex-col md:flex-row h-auto md:h-[520px] min-h-0 shadow-xl"
            >
              {/* Text Side */}
              <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-12 flex flex-col justify-center">
                <Quote className="text-[#f48120] mb-4 md:mb-6" size={40} fill="currentColor" />
                <h3 className="text-lg md:text-2xl font-bold text-brand-navy mb-3 md:mb-5 leading-tight">
                  {current.headline}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6 italic font-bold">
                  "{current.description}"
                </p>
                
                <div className="flex items-center gap-6 mt-2 md:mt-4">
                  <button className="group/btn flex items-center gap-2 text-[#f48120] hover:text-brand-navy transition-colors duration-300 cursor-pointer">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Read More</span>
                    <ChevronRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Photo Side */}
              <div className="w-full md:w-1/2 relative bg-gray-100 h-[400px] sm:h-[450px] md:h-full">
                <img 
                  src={current.image} 
                  alt={current.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-1">{current.name}</h4>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-brand-sky mb-3">{current.title}</p>
                    
                    {(current.recognition || current.institution) && (
                      <div className="pt-3 md:pt-4 border-t border-white/20 space-y-2 md:space-y-3">
                        {current.recognition && (
                          <div>
                            <p className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-white/50 mb-0.5">Recognition</p>
                            <p className="text-sm md:text-lg font-medium leading-tight">{current.recognition}</p>
                          </div>
                        )}
                        {current.institution && (
                          <div>
                            <p className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-white/50 mb-0.5">Institution</p>
                            <p className="text-sm md:text-lg font-medium leading-tight">{current.institution}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls Below Card - Mobile & Tablet Only */}
          <div className="xl:hidden mt-8 flex flex-col items-center gap-6 w-full">
            {/* Thumbnails */}
            <div className="flex flex-wrap justify-center gap-3 w-full">
              {LEADERSHIP_DATA.map((item, index) => (
                <button
                  key={`mob-${item.id}`}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "group relative w-12 h-[60px] rounded-[4px] overflow-hidden border-2 transition-all duration-500 cursor-pointer",
                    activeIndex === index ? "border-brand-orange scale-110 z-10" : "border-white/20 opacity-60 hover:opacity-100 hover:scale-105"
                  )}
                >
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className={cn(
                    "absolute inset-0 bg-brand-navy/20 transition-opacity duration-300",
                    activeIndex === index ? "opacity-0" : "group-hover:opacity-0"
                  )} />
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-[4px] border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-[#0a1931] transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-[4px] border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-[#0a1931] transition-all duration-300 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
