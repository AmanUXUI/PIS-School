import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Award, Users, Bus, Sparkles, CheckCircle2 } from 'lucide-react';

interface FeatureCard {
  id: string;
  category: string;
  title: string;
  tabLabel: string;
  icon: ReactNode;
  image: string;
  highlights: string[];
  paragraph1: ReactNode;
  paragraph2: ReactNode;
}

const CARDS: FeatureCard[] = [
  {
    id: "ai-robotics",
    category: "STEM & INNOVATION",
    title: "AI & Robotics",
    tabLabel: "AI & Robotics",
    icon: <Cpu className="w-4 h-4" />,
    image: "https://pavnaschoolaligarh.com/wp-content/uploads/2026/04/OverlayShadow-10.webp",
    highlights: ["Hands-on STEM & Robotics Lab", "Coding, Logic & Innovation", "Future-Ready Critical Thinking"],
    paragraph1: (
      <span>
        As the <strong className="text-brand-orange font-bold">best international school in Sasni</strong>, Pavna International School equips students with future-ready skills through its AI & Robotics program. As a leading <strong className="text-brand-navy font-bold">Cambridge curriculum school in Sasni</strong>, we encourage innovation, coding, problem-solving, and hands-on STEM learning.
      </span>
    ),
    paragraph2: (
      <span>
        With access to <strong className="text-brand-navy font-bold">modern international school facilities</strong>, students explore emerging technologies, develop critical thinking skills, and gain practical experience to thrive in a technology-driven world.
      </span>
    )
  },
  {
    id: "sports",
    category: "PHYSICAL EXCELLENCE",
    title: "Sports Excellence",
    tabLabel: "Sports Culture",
    icon: <Award className="w-4 h-4" />,
    image: "https://pavnaschoolaligarh.com/wp-content/uploads/2026/04/tab-img-3.webp",
    highlights: ["Horse Riding & Swimming", "Cricket, Handball & Tennis", "Expert Coaching & Athletics"],
    paragraph1: (
      <span>
        As one of the <strong className="text-brand-orange font-bold">top international schools in Uttar Pradesh</strong>, Pavna International School encourages students to stay active, disciplined, and confident through a wide range of sports. Our campus offers facilities for <strong className="text-brand-navy font-bold">horse riding, swimming, cricket, handball, lawn tennis, basketball</strong>, and many more indoor and outdoor games.
      </span>
    ),
    paragraph2: (
      <span>
        With expert guidance and <strong className="text-brand-navy font-bold">modern international school facilities</strong>, students get the right training environment to explore their potential, build teamwork, and develop a strong sporting spirit.
      </span>
    )
  },
  {
    id: "faculty",
    category: "ACADEMIC LEADERSHIP",
    title: "Experienced Teaching Faculty",
    tabLabel: "Teaching Faculty",
    icon: <Users className="w-4 h-4" />,
    image: "https://pavnaschoolaligarh.com/wp-content/uploads/2026/04/OverlayShadow-11.webp",
    highlights: ["Highly Qualified Educators", "Personalized Mentor Attention", "Global Cambridge Standards"],
    paragraph1: (
      <span>
        At Pavna International School, our educators are the foundation of student success. As one of the <strong className="text-brand-orange font-bold">top international schools in Uttar Pradesh</strong>, we have a team of highly qualified and experienced teachers who are passionate about nurturing young minds.
      </span>
    ),
    paragraph2: (
      <span>
        Through personalized attention, innovative teaching methods, and a commitment to academic excellence, our faculty helps students build confidence, critical thinking skills, and a lifelong love for learning. Their dedication is one of the key reasons families choose Pavna as the <strong className="text-brand-navy font-bold">best international school in Sasni</strong>.
      </span>
    )
  },
  {
    id: "transport",
    category: "SAFETY & SECURITY",
    title: "Safe & Comfortable Transport",
    tabLabel: "School Transport",
    icon: <Bus className="w-4 h-4" />,
    image: "https://pavnaschoolaligarh.com/wp-content/uploads/2026/04/DSC04919.JPG-scaled.webp",
    highlights: ["Fully Air-Conditioned Fleet", "GPS-Enabled Live Tracking", "Trained Attendants & Safety First"],
    paragraph1: (
      <span>
        As the <strong className="text-brand-orange font-bold">best international school in Sasni</strong>, Pavna International School provides a safe, reliable, and convenient transport system for students. Our fleet of <strong className="text-brand-navy font-bold">fully air-conditioned, GPS-enabled buses</strong> covers key routes, ensuring a comfortable travel experience every day.
      </span>
    ),
    paragraph2: (
      <span>
        Each bus is operated by trained drivers and attendants, prioritizing student safety and well-being throughout the journey. With real-time tracking, route updates, and transparent communication, parents can stay informed and enjoy complete peace of mind.
      </span>
    )
  }
];

export default function GlobalLearning() {
  const [activeTab, setActiveTab] = useState<string>("ai-robotics");

  const currentCard = CARDS.find((card) => card.id === activeTab) || CARDS[0];

  return (
    <section 
      id="global-learning" 
      className="py-16 md:py-24 bg-gradient-to-b from-[#FDFCFB] to-[#F7F4EF] relative overflow-hidden border-b border-gray-200"
    >
      {/* Background Decorative Patterns */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-sky/5 rounded-full blur-3xl pointer-events-none -ml-48 -mb-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10 font-gill">
        
        {/* Header Section with Elegant Swiss-style typography */}
        <div className="mb-14 text-center">
          <div className="flex flex-col items-center w-fit max-w-full mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4 w-full">
              <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              <span className="shrink-0 text-[11px] leading-[28px] tracking-[1.65px] uppercase font-bold text-brand-orange">
                What Sets Us Apart
              </span>
              <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[42px] lg:text-[42px] md:leading-[50px] tracking-[-1.2px] font-bold text-brand-navy">
              What Sets Pavna International Apart
            </h2>
          </div>
          <p className="text-gray-600 text-base sm:text-lg font-medium mt-4 max-w-2xl mx-auto leading-relaxed">
            A complete learning ecosystem designed for student success.
          </p>
        </div>

        {/* Premium Swappable Tabs Row */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-gray-150/80 shadow-md gap-1 sm:gap-2.5 max-w-full">
            {CARDS.map((card) => {
              const isActive = card.id === activeTab;
              return (
                <button
                  type="button"
                  key={card.id}
                  onClick={() => setActiveTab(card.id)}
                  className={`flex items-center gap-2 px-4 sm:px-7 py-3 rounded-full text-xs sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap cursor-pointer focus:outline-none ${
                    isActive
                      ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/35"
                      : "text-brand-navy/70 hover:text-brand-navy hover:bg-gray-100/70"
                  }`}
                >
                  <span className={`${isActive ? "text-white" : "text-brand-orange"}`}>
                    {card.icon}
                  </span>
                  <span>{card.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Full-width dynamic content card with side-by-side or stacked layout */}
        <div className="bg-white rounded-3xl border border-gray-150/80 shadow-[0_20px_50px_rgba(32,26,91,0.05)] overflow-hidden min-h-[480px] flex relative group">
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-orange pointer-events-none" />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.99, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.99, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 w-full items-stretch"
            >
              {/* Text Body Area (Left) */}
              <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
                {/* Category Floater */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-brand-orange/15 text-brand-orange text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {currentCard.category}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-navy tracking-tight leading-tight mb-6">
                  {currentCard.title}
                </h3>

                {/* Sub-paragraphs text layout */}
                <div className="space-y-5 text-gray-650 text-sm sm:text-[16px] leading-[26px] font-medium mb-8">
                  <p>{currentCard.paragraph1}</p>
                  <p>{currentCard.paragraph2}</p>
                </div>

                {/* Highly structured features highlights bullet list */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {currentCard.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 shrink-0" />
                        <span className="text-brand-navy font-bold text-sm leading-tight">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fully Filled Box Image Area (Right) */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-gray-50 border-t lg:border-t-0 lg:border-l border-gray-100/80">
                <img
                  src={currentCard.image}
                  alt={currentCard.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] ease-out hover:scale-105"
                  loading="lazy"
                />
                {/* Linear gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

