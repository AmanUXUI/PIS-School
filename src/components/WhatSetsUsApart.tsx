import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Trophy, GraduationCap, Bus } from "lucide-react";

interface DistinctionItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
  image: string;
  highlights: string[];
  paragraph1: string[]; // split text into bold-capable segments or standard string
  paragraph2: string;
}

const ITEMS: DistinctionItem[] = [
  {
    id: "ai-robotics",
    category: "STEM & FUTURE SKILLS",
    title: "AI & Robotics",
    subtitle: "Cultivating innovation, creativity, and STEM problem-solving",
    icon: <Cpu className="w-5 h-5" />,
    iconBg: "bg-orange-50",
    iconColor: "text-brand-orange",
    image: "/images/image_61.webp",
    highlights: [
      "Coding & Innovation Lab",
      "Cambridge Curriculum Standard",
      "Hands-on Practical Tinkering",
    ],
    paragraph1: ["", ""],
    paragraph2:
      "Supported by contemporary learning spaces and expert mentorship, they develop computational thinking, creativity, and the confidence to apply technology thoughtfully to solve real-world challenges.",
  },
  {
    id: "sports-excellence",
    category: "ATHLETICS & LEADERSHIP",
    title: "Sports Excellence",
    subtitle: "World-class coaching and multi-sport training facilities",
    icon: <Trophy className="w-5 h-5" />,
    iconBg: "bg-sky-50",
    iconColor: "text-brand-sky",
    image: "/images/Hostel-state.webp",
    highlights: [
      "Horse Riding & Swimming",
      "Modern Indoor/Outdoor Courts",
      "Dedicated Expert Coaching Staff",
    ],
    paragraph1: [
      "top international schools in Uttar Pradesh",
      "Encourages students to stay active, disciplined, and confident through a wide range of sports. Our campus offers facilities for",
    ],
    paragraph2:
      "With expert guidance and modern international school facilities, students get the right training environment to explore their potential, build teamwork, and develop a strong sporting spirit.",
  },
  {
    id: "teaching-faculty",
    category: "ACADEMIC EXCELLENCE",
    title: "Experienced Teaching Faculty",
    subtitle: "Highly qualified and passionate mentors raising global citizens",
    icon: <GraduationCap className="w-5 h-5" />,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    image: "/images/WhatsApp_12.webp",
    highlights: [
      "Highly Qualified Experts",
      "Personalized Mentor Support",
      "Innovative Teaching Methods",
    ],
    paragraph1: [
      "top international schools in Uttar Pradesh",
      "We have a team of highly qualified and experienced teachers who are passionate about nurturing young minds. Through personalized attention, innovative teaching, and commitment to academic excellence, our faculty",
    ],
    paragraph2:
      "Their dedication is one of the key reasons families choose Pavna as the best international school in Sasni, offering learning resources designed for absolute student confidence.",
  },
  {
    id: "safe-transport",
    category: "SAFETY & MOBILITY",
    title: "Safe & Comfortable Transport",
    subtitle: "Highly reliable secure daily route commuter fleet",
    icon: <Bus className="w-5 h-5" />,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    image: "/images/WhatsApp_21.webp",
    highlights: [
      "Fully Air-Conditioned Buses",
      "GPS-Enabled Live Tracking",
      "Trained Drivers & Escorts",
    ],
    paragraph1: [
      "best international school in Sasni",
      "Provides a safe, reliable, and convenient transport system for students. Our fleet of fully air-conditioned,",
    ],
    paragraph2:
      "Each bus is operated by trained drivers and attendants, prioritizing student safety and well-being throughout the journey. With real-time tracking, route updates, and transparent communication, parents can stay informed and enjoy complete peace of mind.",
  },
];

export default function WhatSetsUsApart() {
  const [activeTab, setActiveTab] = useState<string>("ai-robotics");

  const currentItem = ITEMS.find((item) => item.id === activeTab) || ITEMS[0];

  return (
    <section
      id="sets-apart-section"
      className="py-16 md:py-24 bg-[#FCFAF7] relative overflow-hidden"
    >
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none -mr-48 z-0"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-brand-sky/5 rounded-full blur-3xl pointer-events-none -ml-48 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 relative z-10 font-gill">
        {/* Elegant Swiss Header Layout */}
        <div className="mb-10 md:mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-4 w-full max-w-md mx-auto">
            <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
            <span className="shrink-0 text-[11px] leading-tight tracking-[0.2em] uppercase font-bold text-brand-orange">
              THE PAVNA ADVANTAGE
            </span>
            <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-[42px] lg:text-[42px] md:leading-[50px] font-bold text-brand-navy tracking-tight max-w-4xl mx-auto">
            What Sets Pavna International Apart
          </h2>
          <p className="text-gray-550 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto mt-4">
            A complete learning ecosystem designed for student success.
          </p>
        </div>

        {/* Premium Swappable Tabs Row */}
        <div className="flex justify-center mb-10 w-full px-2 md:px-0">
          <div className="grid grid-cols-2 md:flex md:flex-nowrap bg-white/90 backdrop-blur-md p-1.5 rounded-[8px] shadow-md gap-1.5 w-full md:w-auto">
            {ITEMS.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center justify-start gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-[8px] text-[10px] sm:text-xs md:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 md:whitespace-nowrap cursor-pointer focus:outline-none relative ${
                    isActive
                      ? "text-white bg-brand-orange shadow-md shadow-brand-orange/30"
                      : "text-brand-navy/70 hover:text-brand-navy hover:bg-gray-100/60"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 ${isActive ? "text-white" : "text-brand-orange"}`}
                  >
                    {item.icon}
                  </span>
                  <span className="text-[9px] sm:text-[11px] md:text-xs leading-snug text-left">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic single full-width container card with premium transitions */}
        <div className="bg-white rounded-[8px] shadow-[0_24px_60px_rgba(32,26,91,0.06)] overflow-hidden min-h-[480px] flex relative group">
          {/* Subtle side accent line */}
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-orange pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 w-full items-stretch"
            >
              {/* Text Body Area (Left) */}
              <div className="lg:col-span-7 p-6 sm:p-12 md:p-16 flex flex-col justify-center">
                {/* Main Card Title */}
                <h3 className="text-xl sm:text-3xl lg:text-[36px] font-bold text-brand-navy tracking-tight leading-tight mb-2">
                  {currentItem.title}
                </h3>
                <p className="text-gray-400 font-medium text-xs sm:text-base mb-6">
                  {currentItem.subtitle}
                </p>

                {/* Content text */}
                <div className="space-y-4 text-gray-650 text-sm sm:text-[16px] leading-relaxed font-medium">
                  {currentItem.id === "ai-robotics" ? (
                    <p>
                      <strong className="text-brand-navy font-bold">
                        At Pavna International School
                      </strong>{" "}
                      students explore the possibilities of artificial
                      intelligence and robotics through hands-on, inquiry-driven
                      learning.
                    </p>
                  ) : (
                    <p>
                      As one of the{" "}
                      <strong className="text-brand-navy font-bold">
                        {currentItem.paragraph1[0]}
                      </strong>
                      , Pavna International School {currentItem.paragraph1[1]}{" "}
                      {currentItem.id === "sports-excellence" && (
                        <strong className="text-brand-navy font-bold">
                          horse riding, swimming, cricket, handball, lawn
                          tennis, basketball
                        </strong>
                      )}
                      {currentItem.id === "safe-transport" && (
                        <strong className="text-brand-navy font-bold">
                          {" "}
                          fully air-conditioned, GPS-enabled buses
                        </strong>
                      )}
                      .
                    </p>
                  )}
                  <p className="text-gray-550 leading-relaxed font-normal text-xs sm:text-sm md:text-base">
                    {currentItem.paragraph2}
                  </p>
                </div>
              </div>

              {/* Fully Filled Box Image Area (Right) */}
              <div className="lg:col-span-5 relative aspect-square sm:aspect-auto sm:h-[350px] lg:h-auto overflow-hidden bg-gray-50">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />

                {/* Visual elegant gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-brand-navy/60 via-transparent to-transparent opacity-70 pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
