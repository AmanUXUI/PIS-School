import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  Brain, 
  BookOpen, 
  Globe, 
  HelpCircle, 
  ChevronDown, 
  ChevronRight,
  ArrowRight, 
  Bookmark, 
  ShieldCheck, 
  Smile, 
  Lightbulb, 
  Users, 
  Activity, 
  Sparkles, 
  Heart 
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "1. What curriculum does Pavna International School offer?",
    answer: "We offer the globally recognised Cambridge International curriculum."
  },
  {
    question: "2. What is the benefit of Cambridge education?",
    answer: "It develops academic excellence, critical thinking, creativity, and global perspectives."
  },
  {
    question: "3. Are Cambridge qualifications internationally recognised?",
    answer: "Yes. They are accepted by leading universities and employers worldwide."
  },
  {
    question: "4. Does Cambridge focus only on academics?",
    answer: "No. It promotes holistic development, practical learning, communication, and leadership skills."
  },
  {
    question: "5. How does Pavna support Cambridge learners?",
    answer: "Through experienced faculty, modern facilities, personalised attention, and continuous academic guidance."
  }
];

const CurriculumPage: FC = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const stages = [
    {
      title: "Cambridge Early Years",
      age: "Age 3+",
      bullets: [
        "A play-based programme",
        "A holistic curriculum",
        "Engaging resources",
        "Support to measure progress",
        "6 curriculum areas including Personal, social and emotional development"
      ],
      description: "Our Early Years programme encourages curiosity, communication, creativity, and social development through engaging, play-based learning experiences. Children develop strong foundations that prepare them for future academic success.",
      image: "https://i.postimg.cc/G27wmxSp/Early-Years.jpg",
      link: "#early-years",
      color: "border-purple-200 hover:border-purple-400 text-purple-600 bg-purple-50/30"
    },
    {
      title: "Cambridge Primary",
      age: "Age 5+",
      bullets: [
        "Clear, adaptable curriculum",
        "Flexible assessment options",
        "Support and resources",
        "Insight to understand potential",
        "10+ subjects including English, Mathematics and Science"
      ],
      description: "The Primary programme strengthens literacy, numeracy, science, and global awareness. Students explore concepts through interactive learning, building confidence, collaboration, and problem-solving skills from an early age.",
      image: "https://i.postimg.cc/j5g0S4k5/Primary.jpg",
      link: "#primary",
      color: "border-blue-200 hover:border-blue-400 text-blue-600 bg-blue-50/30"
    },
    {
      title: "Cambridge Lower Secondary",
      age: "Age 11+",
      bullets: [
        "Clear, adaptable curriculum",
        "Flexible assessment options",
        "Support and resources",
        "Insight to predict performance",
        "10+ subjects including English, Mathematics and Science"
      ],
      description: "Lower Secondary expands students' understanding across core subjects while encouraging analytical thinking, communication, teamwork, and independent learning. Regular assessments help monitor progress and guide personalised learning.",
      image: "https://i.postimg.cc/XJHSYkDq/Low-Secondary.jpg",
      link: "#lower-secondary",
      color: "border-green-200 hover:border-green-400 text-green-600 bg-green-50/30"
    },
    {
      title: "Cambridge Upper Secondary (IGCSE)",
      age: "Age 14+",
      bullets: [
        "Broad, adaptable curriculum",
        "Fair, valid, reliable assessment",
        "Support and resources",
        "Insight to optimise achievement",
        "Cambridge IGCSE™: 70+ subjects, Cambridge O Level: 40+ subjects, Cambridge ICE"
      ],
      description: "The Cambridge IGCSE curriculum provides students with internationally recognised qualifications across a wide choice of subjects. It develops subject expertise, critical thinking, research abilities, and practical application of knowledge, preparing learners for higher education.",
      image: "https://i.postimg.cc/mDXfgy6L/Upper-Secondary.jpg",
      link: "#upper-secondary",
      color: "border-orange-200 hover:border-orange-400 text-brand-orange bg-orange-50/30"
    },
    {
      title: "Cambridge Advanced (AS & A Level)",
      age: "Age 16+",
      bullets: [
        "In-depth, adaptable curriculum",
        "Fair, valid, reliable assessment",
        "Support and resources",
        "Insight to predict performance",
        "Cambridge International AS & A Level: 50+ subjects, Cambridge AICE, Cambridge IPQ"
      ],
      description: "Cambridge Advanced programmes offer in-depth subject knowledge and academic rigour. Students develop advanced analytical, research, and communication skills that are valued by leading universities and employers worldwide.",
      image: "https://i.postimg.cc/QtxZDymR/Advance.jpg",
      link: "#advance-as-a-level",
      color: "border-red-200 hover:border-red-400 text-red-600 bg-red-50/30"
    }
  ];

  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      
      {/* 1. Header Hero Panel with Breadcrumbs */}
      <section className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img 
            src="https://i.postimg.cc/W4cb9J5M/DSC06249-JPG.jpg" 
            alt="School Campus Curriculum Background" 
            className="w-full h-full object-cover scale-105 filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent" />
        </div>
        
        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-brand-gray mb-6">
            <span className="hover:text-brand-orange transition-colors cursor-pointer" onClick={() => window.location.hash = ''}>Home</span>
            <span className="text-white/30">/</span>
            <span className="text-white/50">Academics</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold">Curriculum Overview</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-4">
              Cambridge International Programmes & Qualifications
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl">
              Explore our world-class educational pathways, designed to foster intellectual curiosity, critical thinking, and a global perspective at every stage of learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro and Development Factors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <div className="flex flex-col items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-4 w-full">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    World Class Standard
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6">
                  Cambridge International Education
                </h2>
              </div>
              <p className="text-[#4B5563] text-[16px] leading-[26px] font-medium font-gill mb-6">
                Cambridge International Education offers a globally respected learning framework that develops academic excellence, critical thinking, creativity, and confidence. At Pavna International School, students benefit from an internationally recognised curriculum that prepares them for higher education and future careers.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#FAF9F6] p-8 md:p-10 rounded-3xl border border-neutral-100 relative overflow-hidden">
              <div className="flex flex-col items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-4 w-full">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    The Educational Journey
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy mb-4">
                  The Cambridge Pathway
                </h2>
              </div>
              <p className="text-[#4B5563] text-[16px] leading-[26px] font-medium font-gill">
                The Cambridge Pathway supports learners from the early years through advanced studies. Each stage builds essential knowledge, practical skills, and independent learning abilities while allowing students to progress confidently at their own pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Cambridge Pathway Interactive / Stages Section */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Left-aligned Title */}
          <div className="max-w-3xl mb-10 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              <span className="text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                Age 3 to 19 Stages
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight">
              A clear path for educational success
            </h2>
          </div>

          {/* Interactive Course Tabs - Styled as separate premium, left-aligned pills */}
          <div className="mb-10 flex overflow-x-auto pb-3 scrollbar-none snap-x gap-2.5 items-center">
            {stages.map((stage, idx) => {
              const isActive = activeStageIdx === idx;
              return (
                <button
                  key={stage.title}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`px-4.5 py-2.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer snap-start border shrink-0 ${
                    isActive
                      ? "bg-brand-navy border-brand-navy text-white shadow-sm"
                      : "bg-white border-neutral-200/60 text-brand-navy/70 hover:border-brand-orange hover:text-brand-orange hover:bg-neutral-50/50 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                  }`}
                >
                  {stage.title}
                </button>
              );
            })}
            {/* Safe spacing at the end of the scroll container to prevent clipping */}
            <div className="w-6 shrink-0" aria-hidden="true" />
          </div>

          {/* Active Stage Content Panel */}
          <div className="bg-white rounded-3xl border border-neutral-200/50 shadow-[0_20px_50px_rgba(32,26,91,0.04)] overflow-hidden min-h-[480px]">
            <AnimatePresence mode="wait">
              {stages.map((stage, idx) => {
                if (idx !== activeStageIdx) return null;
                return (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch p-8 md:p-12"
                  >
                    {/* Left Column: Image with visual accents */}
                    <div className="lg:col-span-5 w-full relative flex flex-col">
                      <div className="relative overflow-hidden rounded-2xl shadow-md border border-neutral-100 bg-neutral-100 group/img w-full flex-1 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[280px] lg:min-h-0">
                        <img
                          src={stage.image}
                          alt={stage.title}
                          className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover/img:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 bg-brand-navy text-white text-[10px] sm:text-xs uppercase font-extrabold px-3 py-1.5 rounded-lg tracking-wider shadow-sm z-10">
                          {stage.age}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Detailed content */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="text-[11px] font-bold tracking-[2px] uppercase text-brand-orange">
                          {stage.age} Program
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy leading-tight mb-4">
                        {stage.title}
                      </h3>
                      
                      <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-relaxed mb-6 font-medium font-gill">
                        {stage.description}
                      </p>

                      <div className="w-full h-[1px] bg-neutral-100 mb-6" />

                      <h4 className="text-xs font-bold text-brand-navy uppercase tracking-widest mb-4">
                        Key Curriculum Highlights
                      </h4>
                      
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5 mb-8">
                        {stage.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[#4B5563] leading-normal font-medium font-gill">
                            <span className="text-brand-orange font-bold shrink-0 mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex pt-2">
                        <a
                          href={stage.link}
                          className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                        >
                          Explore Program Details
                          <ArrowRight size={14} className="stroke-[2.5]" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Cambridge Professional Development for Teachers and School Leaders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-navy text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden mt-8 border border-white/10"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-brand-orange/20">
                Staff Excellence
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 leading-tight">
                Cambridge Professional Development
              </h3>
              <p className="text-sm text-brand-gray max-w-2xl font-light font-gill">
                Supporting teachers and school leaders with globally certified training, frameworks, and assessment tools to ensure continuous academic delivery of the highest standards.
              </p>
            </div>
            <div className="shrink-0 relative z-10 w-full md:w-auto text-left">
              <div className="inline-flex items-center gap-3 text-brand-orange font-bold text-sm bg-white/5 border border-white/10 py-3 px-6 rounded-xl">
                <Sparkles size={18} />
                <span>Empowering Global Educators</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Why Choose Cambridge, Global Recognition, and Assessment Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Why Choose Cambridge at Pavna",
                text: "Choosing Cambridge at Pavna International School means learning in an environment that combines global standards with personalised guidance. Our experienced educators, modern classrooms, and holistic approach help students become confident, responsible, and future-ready individuals.",
                icon: Smile,
                tag: "LEARNER CENTRED"
              },
              {
                title: "Global Recognition",
                text: "Cambridge qualifications are widely accepted by universities and employers across the world. They provide students with opportunities to pursue higher education and career pathways both in India and internationally.",
                icon: Globe,
                tag: "ACCEDENTIAL ADVANTAGE"
              },
              {
                title: "Assessment & Learning Approach",
                text: "Assessment focuses on understanding, application, and continuous improvement rather than rote memorisation. Students are encouraged to think independently, solve real-world problems, and communicate effectively.",
                icon: Brain,
                tag: "PRACTICAL SKILLS"
              }
            ].map((item, i) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="bg-[#FDFCFB] p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-[0_12px_24px_-10px_rgba(244,129,32,0.18)] hover:border-brand-orange hover:-translate-y-1 flex flex-col justify-between transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-brand-orange/5 flex items-center justify-center text-brand-orange transition-all duration-500 group-hover:bg-brand-orange group-hover:text-white">
                        <IconComp size={18} className="stroke-[1.75]" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/5 px-2.5 py-1 rounded-md">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-brand-navy text-[18px] sm:text-[20px] mb-3 leading-snug group-hover:text-brand-orange transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[#4B5563] text-[15px] leading-relaxed font-medium font-gill">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Why Parents Choose Pavna International School */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="flex flex-col items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-6 w-full">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    Trusted Education
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-6">
                  Why Parents Choose Pavna International School
                </h2>
              </div>
              <div className="space-y-4 text-[#4B5563] text-[15px] font-medium font-gill leading-relaxed">
                <p>
                  Parents trust Pavna International School for its learner-centred approach, international curriculum, dedicated faculty, safe campus, modern infrastructure, and commitment to academic excellence and holistic development.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-neutral-200/60 shadow-md flex flex-col md:flex-row items-center gap-8">
              <div className="relative aspect-[4/3] w-full md:w-[45%] rounded-2xl overflow-hidden bg-neutral-100 shrink-0">
                <img 
                  src="https://i.postimg.cc/TPzWWQgg/Trusted-Legacy-of-Educational-Excellence.jpg" 
                  alt="Pavna Learning Environment" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Bookmark size={20} className="text-brand-orange shrink-0" />
                  <h4 className="font-serif font-bold text-brand-navy text-[17px]">A Seamless Academic Foundation</h4>
                </div>
                <p className="text-[#4B5563] text-sm leading-relaxed font-medium font-gill">
                  Our dedication to international pedagogy, combined with deep-rooted values, guarantees your child is prepared to excel in universities and workplaces around the world.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center w-fit max-w-full mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4 w-full">
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                <span className="shrink-0 text-brand-orange text-[11px] uppercase font-bold tracking-widest">
                  GOT QUESTIONS?
                </span>
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((item, index) => {
              const isOpen = activeFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-[#FAF9F5] rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 shadow-[0_4px_15px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_25px_rgba(32,26,91,0.03)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex items-start gap-4 justify-between font-gill hover:bg-white/50 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex gap-3 items-center">
                      <HelpCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                      <span className="font-bold text-brand-navy text-[16px] sm:text-[18px] leading-tight">
                        {item.question.replace(/^\d+\.\s*/, "")}
                      </span>
                    </div>
                    <span 
                      className={`w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 text-brand-navy transition-transform duration-300 ${isOpen ? "rotate-180 bg-brand-orange/10 border-brand-orange/20 text-brand-orange" : ""}`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-6 pt-0 border-t border-gray-100/50 text-[#4A5568] leading-relaxed text-[15px] sm:text-[16px]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Pagination/Transition footer */}
          <div className="mt-20 border-t border-neutral-100 pt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Previous button - Minds Behind PIS */}
              <div className="w-full sm:w-auto text-left order-2 sm:order-1">
                <a 
                  href="#minds-behind-pis"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
                >
                  &larr; Minds Behind PIS
                </a>
              </div>

              {/* Center Home button */}
              <button 
                onClick={() => window.location.hash = ''} 
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-dark-orange text-white text-[13px] font-bold tracking-wider transition-all shadow-md active:scale-95 cursor-pointer w-full sm:w-auto order-1 sm:order-2"
              >
                Return to Homepage
                <ArrowRight size={15} />
              </button>

              {/* Next button */}
              <div className="w-full sm:w-auto text-right order-3">
                <a 
                  href="#early-years"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
                >
                  Early Years &rarr;
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CurriculumPage;
