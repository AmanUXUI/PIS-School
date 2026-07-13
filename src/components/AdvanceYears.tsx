import { FC } from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  Calculator,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Award,
  CheckCircle,
  Bookmark,
  TrendingUp,
  Award as AwardIcon,
  HelpCircle,
  Globe,
  Compass,
  Briefcase,
  Layers,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";

const AdvanceYears: FC = () => {
  useSEO({
    title: "Curriculum |Pavna International School ",
    description: "",
    keywords: "",
  });
  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      {/* 1. Header Hero Panel with Breadcrumbs */}
      <section
        id="advance-hero"
        className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5"
      >
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="/images/Advance.jpg"
            alt="Cambridge Advanced Background"
            className="w-full h-full object-cover scale-105 filter blur-[2px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent" />
        </div>

        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-start gap-2 text-xs md:text-sm text-brand-gray mb-6 text-center md:text-left w-full">
            <Link
              className="text-decoration-none hover:text-brand-orange transition-colors cursor-pointer"
              to="/"
            >
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/50">Academics</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold">
              Advance - AS & A Level (Age 16 to 18 Years)
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-left mx-auto md:mx-0"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-2">
              Advance - AS & A Level
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-sans font-semibold text-brand-yellow mb-6">
              (Age 16–18 Years)
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl mx-auto md:mx-0">
              Cambridge Advanced is a valuable program for learners aged 16 to
              19, providing a solid foundation for university-level studies
              worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Pillars & Recognition */}
      <section id="advance-about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6 text-center lg:text-left">
                Cambridge Advanced
              </h2>

              <h3 className="text-xl font-serif font-bold text-brand-orange mb-4 text-center lg:text-left">
                Cambridge International AS & A Level Qualifications
              </h3>

              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-8">
                Cambridge Advanced is a valuable program for learners aged 16 to
                19. It provides a solid foundation for university-level studies
                by fostering critical thinking, subject mastery, and independent
                learning, which universities often appreciate in their
                applicants.
              </p>

              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-8">
                Cambridge International AS & A Levels are taken in 130
                countries, with over 495,000 subject entries per year.
              </p>

              {/* Quote Highlight aligned on the left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-[0_6px_20px_rgba(0,0,0,0.015)] overflow-hidden"
              >
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-brand-orange/5 pointer-events-none">
                  <i className="fas fa-quote-right text-7xl"></i>
                </div>

                <div className="flex gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <GraduationCap size={24} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-left italic text-brand-navy font-serif text-[15px] sm:text-[16px] leading-relaxed mb-3 font-medium">
                      "Students who have studied Cambridge International AS & A
                      Levels have a real depth of understanding of the subject
                      matter."
                    </p>
                    <div className="flex md:items-center gap-2">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-brand-navy text-left ">
                        Stuart Schmill{" "}
                        <span className="text-brand-orange">
                          (Dean of Admissions, MIT, USA)
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-md border border-neutral-100">
                <img
                  src="/images/Advance.jpg"
                  alt="Cambridge Advanced Learners"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section (India & Worldwide) */}
      <section
        id="advance-recognition"
        className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6 text-center lg:text-left">
                India Recognition
              </h2>
              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-4">
                Cambridge International A Level have been deemed equivalent by
                the association of Indian Universities, which grants equivalence
                to foreign degrees in India. This ensures that Cambridge
                students choosing to study in Indian Universities experience a
                seamless transition.
              </p>
              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-4">
                Cambridge's Science and Mathematics course content corresponds
                to the approved syllabus for all India open entrance exams for
                Engineering or Medicine undergraduate studies. Cambridge AS/A
                Level is recognized by all IITs and other specialized
                institutes.
              </p>
              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
                According to the Association, A Level is equivalent to a +2
                stage certificate from an Indian board, allowing students to
                enrol in bachelor's degree programs in Indian universities.
              </p>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-between items-center text-center sm:items-start sm:text-left">
              <div className="w-full flex flex-col items-center sm:items-start">
                <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6 text-center sm:text-left">
                  University Recognition
                </h2>
                <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-6">
                  Learners use Cambridge International AS & A Levels to gain
                  places at leading universities worldwide including in the UK,
                  Ireland, USA, Canada, Australia, New Zealand, India,
                  Singapore, Egypt, Jordan, South Africa, the Netherlands,
                  Belgium, Germany and Spain.
                </p>
              </div>
              <div className="border-t border-neutral-100 pt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f48120]/10 flex items-center justify-center text-brand-orange">
                  <Globe size={18} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-brand-navy">
                  Global Academic Ingress
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Details and Offered Subjects */}
      <section id="advance-curriculum" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6 text-center lg:text-left">
                Cambridge International AS & A Level Subjects
              </h2>
              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-6">
                The Cambridge Advanced stage of the Cambridge A Level Curriculum
                includes Cambridge International AS and A Level qualifications.
                Cambridge International A Level is typically a two-year course,
                and Cambridge International AS Level is typically one year. At
                PIS, students must study five AS-level subjects, including
                English General Paper, which is mandatory.
              </p>
              <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-neutral-100">
                <h4 className="text-xs uppercase tracking-wider font-bold text-brand-navy mb-4">
                  Reporting Achievement
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-medium font-gill">
                  Each subject a learner takes at Cambridge International AS & A
                  Level receives a separate grade. The Cambridge International A
                  Level is reported on a grade scale from A*, awarded for the
                  highest level of achievement, to E, indicating the minimum
                  required performance.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FAF9F5] p-8 rounded-3xl border border-neutral-100">
              <h3 className="text-lg font-serif font-bold text-brand-navy mb-6">
                The following subjects are offered:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "English General Paper", icon: BookOpen },
                  { name: "Accounting", icon: Bookmark },
                  { name: "Biology", icon: Sparkles },
                  { name: "Business", icon: Briefcase },
                  { name: "Chemistry", icon: Layers },
                  { name: "Economics", icon: TrendingUp },
                  { name: "Information Technology", icon: Compass },
                  { name: "Mathematics", icon: Calculator },
                  { name: "Physics", icon: Activity },
                ].map((subj, i) => {
                  const IconComp = subj.icon;
                  return (
                    <motion.div
                      key={subj.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.4 }}
                      className="bg-white p-4 rounded-xl border border-neutral-100 flex items-center gap-3 shadow-sm hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-orange/5 flex items-center justify-center text-brand-orange shrink-0">
                        <IconComp size={14} />
                      </div>
                      <span className="text-xs font-bold text-brand-navy">
                        {subj.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cambridge Assessment & Assessment Options */}
      <section
        id="advance-assessment"
        className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6 text-center md:text-left">
              Cambridge Assessment
            </h2>
            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              Cambridge International AS & A Levels have a linear structure with
              exams at the end of the course, which gives more time for teaching
              and learning. Many of the world's top universities have made clear
              their appreciation of this linear approach, and we share their
              belief that linear courses allow learners to develop a deeper
              understanding of subjects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Option One",
                desc: "Take the Cambridge International AS Level only. The Cambridge International AS Level syllabus content is half a Cambridge International A Level.",
                step: "01",
              },
              {
                title: "Option Two",
                desc: "Take a 'staged' assessment route - take the Cambridge International AS Level in one examination series and complete the final Cambridge International A Level in a subsequent series.",
                step: "02",
              },
              {
                title: "Option Three",
                desc: "Take all papers of the Cambridge International A Level course in the same examination series, usually at the end of the course.",
                step: "03",
              },
            ].map((option, i) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm relative overflow-hidden group flex flex-col justify-between"
              >
                <span className="absolute top-4 right-6 text-2xl font-bold font-serif text-brand-orange/10 select-none">
                  {option.step}
                </span>
                <div>
                  <h3 className="text-lg font-serif font-bold text-brand-navy mb-4 transition-colors duration-300 group-hover:text-brand-orange">
                    {option.title}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed font-medium font-gill">
                    {option.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-brand-navy font-serif text-lg md:text-xl font-medium italic leading-relaxed">
              "This whole stage serves as a strong University Preparation
              Programme, equipping students with the depth and independence
              universities look for."
            </p>
          </div>
        </div>
      </section>

      {/* 6. Page-to-Page Navigation */}
      <section
        id="advance-navigation"
        className="py-16 bg-white border-t border-neutral-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Previous button */}
            <div className="w-full sm:w-auto text-left order-2 sm:order-1">
              <Link
                to="/upper-secondary"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
              >
                &larr; Upper Secondary
              </Link>
            </div>

            {/* Center Home button */}
            <Link
              to="/"
              className="text-decoration-none inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-dark-orange text-white text-[13px] font-bold tracking-wider transition-all shadow-md active:scale-95 cursor-pointer w-full sm:w-auto order-1 sm:order-2"
            >
              Return to Homepage
              <ArrowRight size={15} />
            </Link>

            {/* Next button */}
            <div className="w-full sm:w-auto text-right order-3">
              <Link
                to="/campus-life"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
              >
                Campus Life &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvanceYears;
