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
} from "lucide-react";

const LowerSecondary: FC = () => {
  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      {/* 1. Header Hero Panel with Breadcrumbs */}
      <section
        id="lower-secondary-hero"
        className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5"
      >
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="https://i.postimg.cc/XJHSYkDq/Low-Secondary.jpg"
            alt="Cambridge Lower Secondary Background"
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
              Lower Secondary (Age 11 to 14 Years)
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-left mx-auto md:mx-0"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-2">
              Lower Secondary
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-sans font-semibold text-brand-yellow mb-6">
              (Age 11–14 Years)
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl mx-auto md:mx-0">
              Providing a clear path as students progress through the Cambridge
              Pathway in an age-appropriate way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Pillars & Facilitator Highlight */}
      <section id="lower-secondary-about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6 text-center lg:text-left">
                Cambridge Lower Secondary
              </h2>

              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-8">
                Cambridge Lower Secondary is typically for learners aged 11 to
                14 years. This helps students for the next step of their
                education, providing a clear path as they progress through the
                Cambridge Pathway in an age-appropriate way. The Cambridge Lower
                Secondary Programme is designed to support each child's
                transition into more independent, subject-based learning.
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
                    <p className="italic text-brand-navy font-serif text-[15px] sm:text-[16px] leading-relaxed mb-3 font-medium">
                      "Each subject helps to develop different kinds of skills
                      and this is especially true of Art & Design. Different
                      students respond to different subjects, so having more
                      breadth and balance in the curriculum means we have a
                      better chance of catering for all students' interests."
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-brand-navy">
                        Ms. Runa{" "}
                        <span className="text-brand-orange">
                          (PIS Facilitator)
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
                  src="https://i.postimg.cc/bvBB4ttS/image.png"
                  alt="Cambridge Lower Secondary Learners"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Cambridge Lower Secondary Curriculum */}
      <section
        id="lower-secondary-curriculum"
        className="py-16 md:py-24 bg-white border-t border-b border-gray-100/85"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6 text-center md:text-left">
              Cambridge Lower Secondary Curriculum
            </h2>

            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              Students study a broad and balanced range of subjects. The lower
              secondary curriculum is aligned with the Upper Secondary subjects
              to ensure the progression of content and skills in the Cambridge
              Pathway. This curriculum framework supports Lower Secondary
              Education by building on foundational skills while preparing
              students for upper secondary subjects.
            </p>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "English",
                desc: "Developing reading, speaking, listening and written skills.",
                icon: BookOpen,
              },
              {
                title: "Hindi",
                desc: "Strengthening native language fluency and textual understanding.",
                icon: PenTool,
              },
              {
                title: "Mathematics",
                desc: "Logical math and foundational analytical skills.",
                icon: Calculator,
              },
              {
                title: "Sciences",
                desc: "Interactive inquiry of physical and natural principles.",
                icon: Sparkles,
              },
              {
                title: "Global Perspectives",
                desc: "Nurturing modern global awareness and local viewpoints.",
                icon: Globe,
              },
              {
                title: "Physical Education",
                desc: "Reinforcing gross motor skills, teamwork and personal fitness.",
                icon: Activity,
              },
              {
                title: "Music",
                desc: "Exploring sound, rhythm, creative and acoustic aesthetics.",
                icon: Music,
              },
              {
                title: "Art and Design",
                desc: "Expressive mediums, visual layout, and graphic creations.",
                icon: Palette,
              },
              {
                title: "Design and Technology",
                desc: "Iterative structure, physical and architectural innovations.",
                icon: Cpu,
              },
              {
                title: "Information and Communication Technology",
                desc: "Digital awareness, systems, programming and tools.",
                icon: Laptop,
              },
            ].map((subject, i) => {
              const IconComp = subject.icon;
              return (
                <motion.div
                  key={subject.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.5 }}
                  className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-[0_12px_24px_-10px_rgba(244,129,32,0.18)] hover:border-brand-orange hover:-translate-y-1 flex flex-col justify-between transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/5 flex items-center justify-center text-brand-orange mb-4 transition-all duration-500 group-hover:bg-brand-orange group-hover:text-white">
                      <IconComp size={18} className="stroke-[1.75]" />
                    </div>
                    <h3 className="font-serif font-bold text-brand-navy text-[16px] mb-2 leading-snug group-hover:text-brand-orange transition-colors duration-300">
                      {subject.title}
                    </h3>
                    <p className="text-[#4B5563] text-[14px] leading-relaxed font-medium font-gill">
                      {subject.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Learning Objectives */}
      <section
        id="lower-secondary-objectives"
        className="py-16 md:py-24 bg-[#FAF9F6]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight text-center md:text-left">
              Learning Objectives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                label: "Pedagogy",
                text: "The approaches that help teaching and learning to take place.",
                image:
                  "https://i.postimg.cc/TPzWWQgg/Trusted-Legacy-of-Educational-Excellence.jpg",
              },
              {
                label: "Curriculum",
                text: "The required knowledge, understanding and skills.",
                image: "https://i.postimg.cc/W4cb9J5M/DSC06249-JPG.jpg",
              },
              {
                label: "Assessment",
                text: "The process of finding out what learners have learned.",
                image: "https://i.postimg.cc/pdGDLnRk/DSC08313-JPG.jpg",
              },
            ].map((col, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-neutral-100 hover:border-brand-orange/30 hover:shadow-[0_12px_24px_-10px_rgba(244,129,32,0.15)] transition-all duration-500 shadow-sm group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-5 bg-neutral-100">
                    <img
                      src={col.image}
                      alt={col.label}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-[17px] font-serif font-bold text-brand-navy mb-3 transition-colors duration-300 group-hover:text-brand-orange">
                    {col.label}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed font-medium font-gill">
                    {col.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center mt-12">
            <p className="text-brand-navy font-serif text-lg md:text-xl font-medium leading-relaxed italic">
              "Through inquiry based learning, students are encouraged to ask
              questions, explore ideas, and build strong problem solving skills
              across subjects."
            </p>
          </div>
        </div>
      </section>

      {/* 5. Cambridge Lower Secondary Checkpoint */}
      <section
        id="lower-secondary-checkpoint"
        className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-6 text-center lg:text-left">
                What is Cambridge Lower Secondary Checkpoint?
              </h2>
              <div className="space-y-4 text-[#4B5563] text-[15px] font-medium font-gill leading-relaxed">
                <p>
                  Cambridge Lower Secondary Checkpoint is a series of
                  assessments designed to assess learners at the end of the
                  Cambridge Lower Secondary programme.
                </p>
                <p>
                  For English, Mathematics and Science, Cambridge Lower
                  Secondary Checkpoint tests are independently marked by
                  Cambridge International.
                </p>
                <p>
                  They will provide a clear picture of a learner's performance
                  as they move on to the next stage of their education.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-neutral-200/60 shadow-md">
              {/* Kawal Narang Facilitator Quote */}
              <div className="pt-2">
                <p className="italic text-neutral-700 text-sm md:text-base leading-relaxed font-medium mb-4">
                  "My experience with Cambridge Checkpoint has been phenomenal.
                  Beyond providing detailed feedback on individual students'
                  performance, which enables me to identify specific gaps in
                  their learning and effectively plan curriculum modification,
                  it provides a standardised reference to benchmark their
                  progress against students from other parts of the world."
                </p>
                <div className="flex items-center gap-2">
                  <Bookmark size={16} className="text-brand-orange shrink-0" />
                  <span className="text-[11px] uppercase tracking-[1.5px] font-bold text-brand-navy font-sans">
                    Ms. Kawal Narang{" "}
                    <span className="text-brand-orange">(PIS Facilitator)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Page-to-Page Navigation */}
      <section
        id="lower-secondary-navigation"
        className="py-16 bg-white border-t border-neutral-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Previous button */}
            <div className="w-full sm:w-auto text-left order-2 sm:order-1">
              <a
                href="#primary"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
              >
                &larr; Primary Years
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
                href="#upper-secondary"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
              >
                Upper Secondary &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LowerSecondary;
