import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Utensils, Home, Heart } from "lucide-react";

const FEATURES = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Pastoral Care",
    description:
      "Dedicated house parents ensuring emotional well-being and academic support around the clock.",
  },
  {
    icon: <Utensils className="w-5 h-5" />,
    title: "Nutritional Advantage",
    description:
      "Organic, balanced meals with specialized nutritional options available.",
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "Smart Living",
    description:
      "Modern dormitories with air purification and biometric access control.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Medical Facilities",
    description:
      "We ensure every student's well-being with 24/7 medical care, routine health check-ups, and immediate first-aid support.",
  },
];

const IMAGES = [
  "https://imgh.in/host/32a3sz",
  "https://imgh.in/host/502lit",
  "https://imgh.in/host/7brxa8",
  "https://imgh.in/host/tzjqe8",
  "https://imgh.in/host/xdy5s8",
  "https://imgh.in/host/7h0ubp",
  "https://i.postimg.cc/mkPp8Qk1/Chat-GPT-Image-Jul-4-2026-03-32-21-PM.png",
  "https://i.postimg.cc/8PFxHVfb/Chat-GPT-Image-Jul-4-2026-03-28-32-PM.png",
];

export default function BoardingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = IMAGES.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section
      id="boarding"
      className="py-16 md:py-24 bg-white overflow-hidden font-gill"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-[42%] flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:items-start w-fit max-w-full"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 w-full">
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                <span className="shrink-0 text-[11px] leading-[28px] tracking-[1.65px] uppercase font-bold text-brand-orange">
                  BOARDING LIFE
                </span>
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              </div>

              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[42px] leading-[34px] sm:leading-[44px] md:leading-[50px] font-bold text-brand-navy mb-8 md:mb-14 tracking-tight text-center lg:text-left">
                A Home Away <br className="hidden md:block" /> From Home
              </h2>
            </motion.div>

            <div className="space-y-10 text-left w-full">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#f48120]/5 flex items-center justify-center group-hover:bg-[#f48120] transition-all duration-300">
                    <div className="text-[#f48120] group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 tracking-tight transition-colors duration-300 group-hover:text-[#f48120]">
                      {feature.title}
                    </h3>
                    <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill max-w-2xl">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Images - Slider */}
          <div className="w-full lg:w-[48%] aspect-square relative overflow-hidden rounded-lg max-w-[500px] lg:max-w-none mx-auto lg:mx-0 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden group">
                  <img
                    src={IMAGES[currentIndex]}
                    alt={`Boarding Life ${currentIndex + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots navigation */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === i
                      ? "bg-brand-orange w-5"
                      : "bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
