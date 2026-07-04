import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CONTENT } from '../constants';

export default function HeroSlider() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-screen flex w-full overflow-hidden text-white" id="hero">
        <div className="flex-grow relative bg-[#201A5B] overflow-hidden">
          {/* Background Video Frame */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <iframe
              style={{
                width: '177.78vh',
                height: '56.25vw',
                minWidth: '100%',
                minHeight: '100%',
              }}
              className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none select-none max-w-none"
              src="https://www.youtube.com/embed/8KcmbR076nU?autoplay=1&mute=1&loop=1&playlist=8KcmbR076nU&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1"
              title="Welcome to Pavna International School Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>

          {/* Premium Vertical Overlay Gradient */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, #201A5B 0%, rgba(32, 26, 91, 0) 100%)'
            }}
          />

          {/* Static Content Overlay */}
          <div 
            className="absolute inset-0 z-20 flex flex-col justify-end pb-10 sm:pb-12 md:pb-16 px-6 sm:px-8 md:px-16"
          >
            <div className="max-w-3xl w-full text-[16px] leading-[24px] font-medium flex flex-col items-center text-center sm:items-start sm:text-left mx-auto sm:mx-0">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-4 flex items-center gap-3 justify-center sm:justify-start w-full max-w-[280px]"
              >
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                <span className="shrink-0 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-brand-orange">
                  Established 2022
                </span>
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              </motion.div>

              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[28px] sm:text-[38px] md:text-[54px] leading-[34px] sm:leading-[44px] md:leading-[58px] tracking-[-1.2px] font-bold capitalize mb-4 text-white font-serif max-w-[650px]"
              >
                Start Your Journey With <br className="hidden sm:inline" />
                Cambridge International Education
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="text-[16px] leading-[24px] font-medium text-white/90 mb-8 font-gill max-w-xl"
              >
                At Pavna International School, we nurture each child's unique potential, transforming purposeful growth into a legacy of lifelong greatness and meaningful experiences.
              </motion.p>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center sm:justify-start w-full"
              >
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.hash = '#curriculum'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-brand-orange text-white text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#201A5B] transition-all duration-300 shadow-md rounded-[4px] whitespace-nowrap cursor-pointer group"
                >
                  <span>Explore Curriculum</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <div className="ImpactContainer overflow-hidden">
        <h2 className="ImpactHead mb-5 text-center">Impact of Pavna School Legacy</h2>
        <div className="font-gill w-full">
          <section className="bg-brand-navy border-b border-brand-navy overflow-hidden relative z-30 marquee-hover py-2">
            <div className="absolute inset-0 banner-pattern opacity-10 pointer-events-none"></div>
            
            {/* Gradient fades for smooth entry/exit */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max animate-marquee items-center relative z-0">
              {/* Group 1 */}
              <div className="flex items-center space-x-12 md:space-x-24 px-6 md:px-12">
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-chalkboard-teacher text-brand-orange text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">250+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange mt-1">Educators</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-book-reader text-brand-sky text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">30000+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-sky mt-1">Learners Base</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-user-friends text-brand-yellow text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">20000+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow mt-1">Happy Parents</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-user-graduate text-brand-orange text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">6000+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange mt-1">Alumni Base</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-landmark text-brand-sky text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">28+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-sky mt-1">Years Legacy</span>
                  </div>
                </div>
              </div>

              {/* Group 2 (Exact Duplicate for seamless infinite loop) */}
              <div className="flex items-center space-x-12 md:space-x-24 px-6 md:px-12">
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-chalkboard-teacher text-brand-orange text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">250+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange mt-1">Educators</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-book-reader text-brand-sky text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">30000+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-sky mt-1">Learners Base</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-user-friends text-brand-yellow text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">20000+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow mt-1">Happy Parents</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-user-graduate text-brand-orange text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">6000+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange mt-1">Alumni Base</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-landmark text-brand-sky text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">28+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-sky mt-1">Years Legacy</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
