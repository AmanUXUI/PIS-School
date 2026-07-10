import { FC } from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  PenTool,
  Calculator,
  Sparkles,
  Globe,
  Activity,
  Music,
  Palette,
  Cpu,
  Laptop,
  Bookmark,
  ArrowRight,
  GraduationCap,
  Award,
  CheckCircle,
  Brain,
  Layers,
  Search,
} from "lucide-react";

const UpperSecondary: FC = () => {
  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      {/* 1. Header Hero Panel with Breadcrumbs */}
      <section
        id="upper-secondary-hero"
        className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5"
      >
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="https://i.postimg.cc/mDXfgy6L/Upper-Secondary.jpg"
            alt="Cambridge Upper Secondary Background"
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
            <span
              className="hover:text-brand-orange transition-colors cursor-pointer"
              onClick={() => (window.location.hash = "")}
            >
              Home
            </span>
            <span className="text-white/30">/</span>
            <span className="text-white/50">Academics</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold">
              Upper Secondary - IGCSE (Age 14 to 16 Years)
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-left mx-auto md:mx-0"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-2">
              Upper Secondary - IGCSE
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-sans font-semibold text-brand-yellow mb-6">
              (Age 14–16 Years)
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl mx-auto md:mx-0">
              The world's most popular international qualification for 14 to 16
              year olds, providing a flexible curriculum and unmatched options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Pillars & Facilitator Highlight */}
      <section id="upper-secondary-about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6 text-center lg:text-left">
                Cambridge IGCSE
              </h2>

              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-8">
                The International General Certificate of Secondary Education
                (IGCSE) is the world's most popular international qualification
                for 14 to 16 year olds. Not only is it truly international - it
                gives students more options than any other international
                qualification. That means more subjects to choose from, more
                ways to learn and more ways to succeed. As part of Cambridge
                International Education, IGCSE reflects the same global
                standards trusted by schools around the world.
              </p>

              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-8">
                Cambridge IGCSE provides a diverse curriculum catering to 21st
                century learning.
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
                      "Language is the road map of a culture. It tells you where
                      its people come from and where they are going."
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-brand-navy">
                        Rita Mae Brown{" "}
                        <span className="text-brand-orange">(Author)</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-md border border-neutral-100">
                <img
                  src="https://i.postimg.cc/mDXfgy6L/Upper-Secondary.jpg"
                  alt="Cambridge Upper Secondary Students"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why IGCSE Section */}
      <section
        id="upper-secondary-why"
        className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6 text-center lg:text-left">
                Why IGCSE
              </h2>
              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-4">
                In comparison to the other boards, IGCSE allows students to
                choose from a wider range of disciplines. Students with the
                national boards are only allowed to choose subject combinations
                within their stream. IGCSE, on the other hand, offers wide range
                of courses and combinations, with no restrictions based on the
                streams. For example students can study mathematics with music.
                For parents who want to settle down in another country, the
                IGCSE board is the ideal option.
              </p>
              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-4">
                The IGCSE focuses on knowledge and making the mind creates for
                learning. The syllabus is highly challenging, and the emphasis
                is on application rather than theory learning.
              </p>
              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
                This wide-ranging structure makes IGCSE Subject Selection one of
                the most flexible processes among international qualifications.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                <h3 className="text-lg font-serif font-bold text-brand-navy mb-3">
                  Recognition
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed font-medium font-gill mb-4">
                  Cambridge qualifications are accepted and valued by leading
                  universities and employers worldwide. The Association of
                  Indian Universities, the organisation that awards equivalence
                  to foreign degrees in India, has granted equivalence to
                  Cambridge IGCSE. The Cambridge IGCSE with English has been
                  equated with Grade 10 of an Indian Board.
                </p>
                <p className="text-[#4B5563] text-sm leading-relaxed font-medium font-gill">
                  This recognition is backed by Cambridge Assessment
                  International Education, which sets and maintains the
                  qualification's global standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                <h3 className="text-lg font-serif font-bold text-brand-navy mb-3">
                  Key Features
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed font-medium font-gill">
                  Cambridge IGCSE encourages a learner-centric, enquiry-based
                  approach to learning. It enables schools to build a core
                  curriculum and modify it to suit the needs of students by
                  introducing cross-curricular perspectives. The programme's
                  content and clearly defined learning outcomes enable IGCSE to
                  be compatible with other curricula worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Objectives section mirroring the learning-objectives grid */}
      <section
        id="upper-secondary-curriculum-overview"
        className="py-16 md:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6 text-center md:text-left">
              Cambridge IGCSE Curriculum
            </h2>
            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              Cambridge IGCSE helps improve performance by developing skills in
              creative thinking, enquiry and problem-solving. It is the perfect
              springboard to advanced study. Cambridge IGCSE develops learner
              knowledge, understanding and skills in:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Subject content and Cultural awareness",
                desc: "Developing a global viewpoint while appreciating native roots.",
                icon: Globe,
              },
              {
                title: "Applying knowledge and understanding",
                desc: "Deploying logical frameworks to both new and familiar situations.",
                icon: Brain,
              },
              {
                title: "Intellectual enquiry",
                desc: "Fostering active questioning, reasoning and critical reviews.",
                icon: Search,
              },
              {
                title: "Flexibility and responsiveness to change",
                desc: "Enabling strong adaptations in an evolving learning framework.",
                icon: Layers,
              },
              {
                title: "Working and communicating in English",
                desc: "Fluent written and verbal interactions for clear delivery.",
                icon: BookOpen,
              },
              {
                title: "Influencing outcomes",
                desc: "Making informed choices that shape individual success.",
                icon: Award,
              },
            ].map((item, i) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-100/80 shadow-sm hover:border-brand-orange hover:shadow-[0_12px_24px_-10px_rgba(244,129,32,0.18)] transition-all duration-500 group flex flex-col justify-between h-full relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div>
                    <div className="w-12 h-12 rounded-full bg-brand-orange/5 flex items-center justify-center text-brand-orange mb-5 shrink-0 transition-all duration-500 group-hover:bg-brand-orange group-hover:text-white border border-neutral-100">
                      <IconComp size={20} className="stroke-[1.75]" />
                    </div>
                    <h4 className="font-serif font-bold text-brand-navy text-[17px] mb-2.5 leading-snug group-hover:text-brand-orange transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-[#4B5563] text-sm font-medium font-gill leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cambridge IGCSE Subjects groups section */}
      <section
        id="upper-secondary-subjects"
        className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-4 text-center md:text-left">
              Cambridge IGCSE Subjects
            </h2>
            <p className="text-[#4B5563] text-[16px] font-medium font-gill">
              Our subject list is organized across five distinct subject groups
              to ensure breadth and depth of learning.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                group: "Group I: Languages",
                desc: "Cambridge offers a wide range of language syllabuses, including first, second and foreign language options. Learners are encouraged to enjoy and appreciate the variety of language and to understand and respond appropriately to what they read and hear.",
                quote:
                  "The limits of my language mean the limits of my world. — Ludwig Wittgenstein",
                items: [
                  "First Language-English",
                  "Second Language-Hindi",
                  "Foreign Language-French",
                ],
              },
              {
                group: "Group II: Humanities and Social Sciences",
                desc: "The study of Cambridge IGCSE humanities and social sciences subjects enables learners to gain a deeper insight into the different communities and cultures that exist around the world.",
                items: ["Economics", "Global Perspectives", "History"],
              },
              {
                group: "Group III: Sciences",
                desc: "Students learn how science is studied and practised and become aware that the results of scientific research can have both good and bad effects on individuals, communities and the environment.",
                items: ["Biology", "Chemistry", "Science", "Physics"],
              },
              {
                group: "Group IV: Mathematics",
                desc: "An essential subject for all learners, Cambridge IGCSE mathematics syllabuses encourage the development of mathematical knowledge as a key life skill and as a basis for more advanced study.",
                items: ["Mathematics"],
              },
              {
                group: "Group V: Professional and Creative",
                desc: "These Cambridge IGCSE subjects introduce learners to the theory and concepts that underpin the subjects as well as providing a good opportunity to engage with the subject practically. The syllabuses provide a solid foundation for further study at Cambridge International A Level and ideal preparation for work and other studies.",
                items: [
                  "Art & Design",
                  "Music",
                  "Physical Education",
                  "Design & Technology",
                  "Information and Communication Technology",
                  "Accounting",
                  "Global Perspectives",
                ],
              },
            ].map((groupData, idx) => (
              <motion.div
                key={groupData.group}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-8">
                    <h3 className="text-xl font-serif font-bold text-brand-navy mb-4 border-b border-neutral-100 pb-2">
                      {groupData.group}
                    </h3>
                    <p className="text-[#4B5563] text-sm leading-relaxed font-medium font-gill mb-4">
                      {groupData.desc}
                    </p>
                    {groupData.quote && (
                      <p className="italic text-brand-orange text-xs font-semibold font-serif bg-brand-orange/5 px-4 py-2 rounded-lg inline-block">
                        "{groupData.quote}"
                      </p>
                    )}
                  </div>

                  <div className="lg:col-span-4 bg-[#FAF9F5] p-6 rounded-xl border border-neutral-100 flex flex-col justify-center">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-brand-navy mb-4">
                      Offered Courses
                    </h4>
                    <ul className="space-y-2.5">
                      {groupData.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs font-bold text-neutral-700"
                        >
                          <CheckCircle
                            size={14}
                            className="text-brand-orange shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto bg-brand-navy text-white p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <p className="text-sm sm:text-[15px] leading-relaxed relative z-10 font-medium font-gill">
              Across all five groups, Cambridge IGCSE Subjects are structured to
              support strong Communication Skills Development and informed IGCSE
              Subject Selection based on each learner's strengths.
            </p>
          </div>
        </div>
      </section>

      {/* Group Awards & Cambridge Assessments section */}
      <section
        id="upper-secondary-assessments"
        className="py-16 md:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-[#FAF9F5] p-8 sm:p-10 rounded-3xl border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange text-[10px] uppercase tracking-wider font-extrabold rounded-full mb-6">
                  PIS Opportunities
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy mb-4">
                  Group Awards
                </h3>
                <p className="text-[#4B5563] text-[15px] leading-relaxed font-medium font-gill">
                  At Pavna International School, Students have the opportunity
                  to earn the Cambridge International Certificate in Education
                  (ICE), A group award designed to provide students with a broad
                  curriculum experience.
                </p>
              </div>
              <div className="mt-8 border-t border-neutral-200/60 pt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-white">
                  <Award size={18} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-brand-navy">
                  Cambridge ICE Group Award
                </span>
              </div>
            </div>

            <div className="bg-[#FAF9F5] p-8 sm:p-10 rounded-3xl border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-brand-navy/10 text-brand-navy text-[10px] uppercase tracking-wider font-extrabold rounded-full mb-6">
                  Evaluation
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy mb-4">
                  Cambridge Assessments
                </h3>
                <p className="text-[#4B5563] text-[15px] leading-relaxed font-medium font-gill">
                  Assessment takes place at the end of the course and may take
                  the form of written, oral, coursework a practical assessment.
                  This broadens opportunities for students to demonstrate their
                  learning. Coursework is set and marked by the teacher and
                  externally moderated by Cambridge. Grades are benchmarked
                  using eight internationally recognised grades, A* to G, which
                  have clear guidelines to explain the standard of achievement
                  for each.
                </p>
              </div>
              <div className="mt-8 border-t border-neutral-200/60 pt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white">
                  <Bookmark size={18} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-brand-navy">
                  Internationally Benchmarked
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Page-to-Page Navigation */}
      <section
        id="upper-secondary-navigation"
        className="py-16 bg-white border-t border-neutral-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Previous button */}
            <div className="w-full sm:w-auto text-left order-2 sm:order-1">
              <a
                href="#lower-secondary"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
              >
                &larr; Lower Secondary
              </a>
            </div>

            {/* Center Home button */}
            <button
              onClick={() => (window.location.hash = "")}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-dark-orange text-white text-[13px] font-bold tracking-wider transition-all shadow-md active:scale-95 cursor-pointer w-full sm:w-auto order-1 sm:order-2"
            >
              Return to Homepage
              <ArrowRight size={15} />
            </button>

            {/* Next button */}
            <div className="w-full sm:w-auto text-right order-3">
              <a
                href="#advance-as-a-level"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
              >
                Advance - AS & A Level &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpperSecondary;
