import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Smartphone,
  Target,
  Users,
  GraduationCap,
  Compass,
  Cpu,
  School,
  Globe,
  Award,
  ChevronDown,
} from "lucide-react";
import { cn } from "../lib/utils";

export default function AboutSection() {
  const [[activeImageIdx, direction], setActiveImage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  const campusImages = [
    {
      title: "Apple Distinguished School",
      description:
        "Recognized as a hub of innovation, leadership, and educational excellence through tech-enabled learning.",
      url: "https://i.postimg.cc/bJnC8qR0/DSC05703-JPG.jpg",
      icon: <Smartphone size={16} className="stroke-[2.5]" />,
    },
    {
      title: "Strong Academic Foundation",
      description:
        "Prepares students for advanced studies and higher education pathways.",
      url: "https://i.postimg.cc/Y2LyhTTq/DSC05785-JPG.jpg",
      icon: <GraduationCap size={16} className="stroke-[2.5]" />,
    },
    {
      title: "Multiple Career Pathways",
      description:
        "Keeps future academic and career opportunities open across disciplines.",
      url: "https://i.postimg.cc/1z2CL8D6/DSC08765-JPG.jpg",
      icon: <Target size={16} className="stroke-[2.5]" />,
    },
    {
      title: "Experiential Learning Approach",
      description:
        "Hands-on learning experiences that transform knowledge into practical skills and real-world understanding.",
      url: "https://i.postimg.cc/MK7qm5R6/Experiential-Learning-Approach.jpg",
      icon: <Compass size={16} className="stroke-[2.5]" />,
    },
    {
      title: "Future-Ready Skills Development",
      description:
        "Building leadership, creativity, communication, and problem-solving skills for tomorrow's careers.",
      url: "https://i.postimg.cc/nL5yJ975/Future-Ready-Skills-Development.jpg",
      icon: <Cpu size={16} className="stroke-[2.5]" />,
    },
    {
      title: "World-Class Infrastructure",
      description:
        "Modern classrooms, advanced learning spaces, and premium facilities designed for holistic growth.",
      url: "https://i.postimg.cc/W43VjPyz/World-Class-Infrastructure.jpg",
      icon: <School size={16} className="stroke-[2.5]" />,
    },
    {
      title: "Global Exposure with Strong Values",
      description:
        "International perspectives combined with strong ethics, character development, and cultural awareness.",
      url: "https://i.postimg.cc/hGk77MTr/Global-Exposure-with-Strong-Values.jpg",
      icon: <Globe size={16} className="stroke-[2.5]" />,
    },
    {
      title: "Trusted Legacy of Educational Excellence",
      description:
        "A proven commitment to academic success, student achievement, and holistic education excellence.",
      url: "https://i.postimg.cc/TPzWWQgg/Trusted-Legacy-of-Educational-Excellence.jpg",
      icon: <Award size={16} className="stroke-[2.5]" />,
    },
  ];

  const highlights = [
    {
      title: "Our Vision",
      description:
        "To enable every learner to become the best version of themselves - confident in their identity, grounded in values, and inspired to learn, lead, and live with purpose.\n\nWe envision Pavna Schools as vibrant ecosystems that blend intellect with humility, tradition with innovation, ambition with compassion, and individuality with community.",
      image: "https://i.postimg.cc/sDX0mLp4/DSC05807-JPG.jpg",
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to provide a nurturing and inspiring educational environment where every learner feels valued, respected, empowered to reach their full potential, and express themselves freely. We are committed to delivering holistic, experiential, inquiry-led and interdisciplinary learning that blends academic excellence with emotional, social, and ethical growth.\n\nThrough innovative teaching practices, dedicated faculty, and a unified curriculum, we aim to shape confident, compassionate, and curious learners who are prepared to thrive in a dynamic world.\n\nOur goal is to make quality education accessible and impactful creating institutions that are rooted in trust, inclusivity, and a deep sense of social responsibility",
      image: "https://i.postimg.cc/NjnTGwvg/DSC05789-JPG.jpg",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const timer = setInterval(() => {
      setActiveImage((prev) => {
        const nextIdx = (prev[0] + 1) % campusImages.length;
        return [nextIdx, 1];
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [campusImages.length, isMobile]);

  const handleItemClick = (idx: number) => {
    if (isMobile) {
      setActiveImage((prev) => {
        const prevIdx = prev[0];
        if (prevIdx === idx) {
          return [-1, 0];
        } else {
          return [idx, idx > prevIdx ? 1 : -1];
        }
      });
    } else {
      setActiveImage((prev) => {
        const prevIdx = prev[0];
        if (prevIdx === idx) return prev;
        return [idx, idx > prevIdx ? 1 : -1];
      });
    }
  };

  const displayImageIdx = activeImageIdx === -1 ? 0 : activeImageIdx;

  return (
    <section
      id="about-pavna"
      className="bg-[#FDFCFB] py-16 md:py-24 px-4 sm:px-8 md:px-16 border-t border-b border-gray-200 font-gill overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 lg:items-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start w-full text-center lg:text-left"
          >
            <div className="flex flex-col items-center lg:items-start w-fit max-w-full mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 w-full">
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                <span className="shrink-0 text-[11px] leading-[28px] tracking-[1.65px] uppercase font-bold text-brand-orange text-center lg:text-left">
                  ABOUT PIS
                </span>
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              </div>

              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[42px] leading-[34px] sm:leading-[44px] md:leading-[50px] tracking-[-1.2px] font-bold text-brand-navy mb-8 text-center lg:text-left">
                A Legacy of Learning, <br className="hidden sm:block" />A Future
                of Possibilities
              </h2>
            </div>

            <p className="text-neutral-600 text-[16px] leading-[24px] font-medium mb-8 max-w-3xl text-center lg:text-left mx-auto lg:mx-0 tracking-wide">
              For nearly three decades, Pavna has been quietly shaping
              confident, compassionate young people who think independently,
              lead with empathy, and are prepared to flourish in a complex and
              interconnected world. As one of the most respected international
              curriculum schools in Uttar Pradesh, we combine academic rigour
              with the warmth and values of a close-knit community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-0 w-full">
              {campusImages.map((usp, i) => {
                const isOpen = activeImageIdx === i;
                return (
                  <div
                    key={i}
                    className={cn(
                      "w-full flex flex-col border rounded-xl transition-all duration-300 overflow-hidden",
                      isOpen
                        ? "bg-[#f48120]/5 border-[#f48120]/40 shadow-[0_12px_24px_-10px_rgba(244,129,32,0.18)]"
                        : "bg-white border-neutral-100/80 hover:shadow-[0_10px_20px_-8px_rgba(0,0,0,0.04)] hover:border-gray-200",
                    )}
                  >
                    <button
                      onClick={() => handleItemClick(i)}
                      className="flex items-center text-left gap-4 p-4 group cursor-pointer w-full focus:outline-none"
                    >
                      <div
                        className={cn(
                          "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-350",
                          isOpen
                            ? "bg-[#f48120] text-white"
                            : "bg-[#f48120]/5 text-[#f48120] group-hover:bg-[#f48120] group-hover:text-white",
                        )}
                      >
                        <div className="flex items-center justify-center w-full h-full">
                          {usp.icon}
                        </div>
                      </div>
                      <span
                        className={cn(
                          "text-[14px] font-bold transition-colors duration-300 flex-1",
                          isOpen
                            ? "text-[#f48120]"
                            : "text-brand-navy group-hover:text-[#f48120]",
                        )}
                      >
                        {usp.title}
                      </span>
                      {/* Chevron icon for mobile accordion indicator */}
                      <div className="lg:hidden shrink-0 text-gray-400">
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform duration-300",
                            isOpen && "rotate-180 text-[#f48120]",
                          )}
                        />
                      </div>
                    </button>

                    {/* Accordion content for mobile */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden lg:hidden"
                        >
                          <div className="p-4 pt-1 text-gray-600 text-[14px] leading-relaxed">
                            <p className="mb-3 font-medium text-gray-600">
                              {usp.description}
                            </p>
                            <img
                              src={usp.url}
                              alt={usp.title}
                              className="w-full aspect-square object-cover rounded-lg shadow-sm block mt-2"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-sky/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="relative rounded-lg overflow-hidden shadow-[0_30px_60px_-15px_rgba(32,26,91,0.2)] aspect-[4/5] lg:aspect-auto lg:h-[600px] group/carousel">
              <div className="absolute inset-0 z-0">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={displayImageIdx}
                    src={campusImages[displayImageIdx].url}
                    alt="Pavna Campus Life"
                    custom={direction}
                    variants={{
                      enter: (direction: number) => ({
                        x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
                        opacity: 0,
                      }),
                      center: {
                        x: 0,
                        opacity: 1,
                      },
                      exit: (direction: number) => ({
                        x: direction < 0 ? "100%" : direction > 0 ? "-100%" : 0,
                        opacity: 0,
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 32 },
                      opacity: { duration: 0.5 },
                    }}
                    className="w-full h-full absolute inset-0 object-cover"
                  />
                </AnimatePresence>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent pointer-events-none z-10"></div>

              {/* Text Caption Content */}
              <div className="absolute bottom-8 left-12 right-12 text-white z-20">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2.5">
                  {campusImages[displayImageIdx].title}
                </h3>
                <p className="text-white/85 text-[13px] sm:text-[14px] leading-relaxed max-w-md font-medium">
                  {campusImages[displayImageIdx].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative group bg-white border border-gray-100 rounded-[8px] transition-all duration-500 overflow-hidden shadow-[0_12px_45px_-16px_rgba(32,26,91,0.04)] hover:shadow-[0_24px_60px_-16px_rgba(32,26,91,0.08)] hover:-translate-y-1 block p-6 sm:p-8 md:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Image Section */}
                <div
                  className={cn(
                    "lg:col-span-5 relative rounded-[8px] overflow-hidden aspect-[16/11] lg:aspect-auto min-h-[260px] lg:h-[400px]",
                    i % 2 === 1 ? "lg:order-last" : "",
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-[32px] leading-tight font-bold text-brand-navy tracking-tight mb-8">
                    {item.title}
                  </h3>

                  {/* Description Paragraphs */}
                  <div className="space-y-4 text-gray-550 text-[15px] sm:text-[16px] leading-[26px] font-normal mb-8 max-w-2xl">
                    {item.description.split("\n\n").map((para, idx) => (
                      <p key={idx} className="text-gray-600 font-normal">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
