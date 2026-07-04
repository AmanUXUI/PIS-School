import { FC } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  BookOpen, 
  Brain, 
  ShieldCheck, 
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
  GraduationCap
} from 'lucide-react';

const PrimaryYears: FC = () => {
  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      
      {/* 1. Header Hero Panel with Breadcrumbs */}
      <section id="primary-hero" className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img 
            src="https://i.postimg.cc/j5g0S4k5/Primary.jpg" 
            alt="Cambridge Primary Background" 
            className="w-full h-full object-cover scale-105 filter blur-[2px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent" />
        </div>
        
        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs md:text-sm text-brand-gray mb-6 text-center md:text-left w-full">
            <span className="hover:text-brand-orange transition-colors cursor-pointer" onClick={() => window.location.hash = ''}>Home</span>
            <span className="text-white/30">/</span>
            <span className="text-white/50">Academics</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold">Primary (Age 5 To 11 Years)</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center md:text-left mx-auto md:mx-0"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-2">
              Primary
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-sans font-semibold text-brand-yellow mb-6">
              (Age 5–11 Years)
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl mx-auto md:mx-0">
              Cambridge Primary starts learners on an exciting educational journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Pillars & Facilitator Highlight */}
      <section id="primary-pillars" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6">
              Cambridge Primary
            </h2>
            
            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-6">
              Typically for 5 to 11 year olds, it provides a strong foundation for students at the beginning of their schooling before progressing through the Cambridge Pathway in an age-appropriate way. At our Cambridge International School, this stage is designed to build curiosity and confidence in every learner.
            </p>
            <p className="text-[#201A5B] text-[18px] leading-[26px] font-semibold font-sans">
              International Education is built on four key pillars:
            </p>
          </div>

          {/* 4 Pillars Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: "Teaching", icon: Users, desc: "A world-class pedagogical framework to engage student minds and direct curiosity." },
              { name: "Curriculum", icon: BookOpen, desc: "A broad, balanced curriculum that lays deep roots for upcoming academic milestones." },
              { name: "Learning", icon: Brain, desc: "Experiential inquiry where students engage directly with key ideas and concepts." },
              { name: "Assessment", icon: ShieldCheck, desc: "Evaluations designed to map growth and track child progression continuously." }
            ].map((pillar, i) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-white p-6 rounded-2xl border border-neutral-100/80 shadow-sm hover:border-brand-orange hover:shadow-[0_12px_24px_-10px_rgba(244,129,32,0.18)] transition-all duration-500 group flex flex-col h-full relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="w-12 h-12 rounded-full bg-brand-orange/5 flex items-center justify-center text-brand-orange mb-4 shrink-0 transition-all duration-500 group-hover:bg-brand-orange group-hover:text-white">
                    <IconComp size={22} className="stroke-[1.75]" />
                  </div>
                  <h3 className="text-[17px] font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors duration-300">
                    {pillar.name}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed font-medium font-gill">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Quote Banner (Facilitator Highlight) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#FAF9F5] rounded-3xl p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] max-w-4xl mx-auto overflow-hidden"
          >
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-brand-orange/5 pointer-events-none">
              <i className="fas fa-quote-right text-9xl"></i>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                <GraduationCap size={32} className="text-brand-orange" />
              </div>
              <div>
                <p className="italic text-brand-navy font-serif text-[17px] sm:text-[19px] leading-relaxed mb-4 font-medium">
                  "Cambridge Primary has a very flexible curriculum. It is not restrictive. I can bring local and international examples into my class, and it works very well with my students."
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] uppercase tracking-wider font-bold text-brand-navy">
                    Ms. Chitra Gupta <span className="text-brand-orange">(PIS Facilitator)</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Learning Objectives with Images */}
      <section id="primary-objectives" className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0">
            <div className="flex flex-col items-center md:items-start mx-auto md:mx-0 max-w-full">
              <div className="flex items-center gap-3 mb-6 w-full justify-center md:justify-start">
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                  Pedagogical Framework
                </span>
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight text-center md:text-left">
                Learning Objectives
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                label: "Pedagogy",
                text: "The approaches that help teaching and learning to take place.",
                image: "https://i.postimg.cc/1zppvYb8/DSC05824-JPG.jpg"
              },
              {
                label: "Curriculum",
                text: "The required knowledge, understanding and skills.",
                image: "https://i.postimg.cc/SswWJTSs/curricluam.png"
              },
              {
                label: "Assessment",
                text: "The process of finding out what learners have learned.",
                image: "https://imgh.in/host/nimp81"
              }
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
              "Through experiential learning, students at our Cambridge Primary School engage directly with concepts rather than just memorizing them."
            </p>
          </div>
        </div>
      </section>

      {/* 4. Cambridge Primary Curriculum (Curriculum Framework) */}
      <section id="primary-curriculum" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0">
            <div className="flex flex-col items-center md:items-start mx-auto md:mx-0 max-w-full">
              <div className="flex items-center gap-3 mb-6 w-full justify-center md:justify-start">
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                  Dynamic Broad Subjects
                </span>
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6 text-center md:text-left">
                Cambridge Primary Curriculum
              </h2>
            </div>
            
            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              Students study a broad and balanced range of subjects that lay the foundation for future success in the next stage of education, as well as plenty of opportunities to develop creativity, expression and personal wellbeing in a variety of ways. The Cambridge Primary curriculum framework places strong emphasis on <strong>Problem Solving Skills Development</strong> alongside core academic learning.
            </p>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "English", desc: "Developing reading, speaking, listening and written skills.", icon: BookOpen },
              { title: "Hindi", desc: "Strengthening native language fluency and textual understanding.", icon: PenTool },
              { title: "Mathematics", desc: "Logical math and foundational analytical skills.", icon: Calculator },
              { title: "Sciences", desc: "Interactive inquiry of physical and natural principles.", icon: Sparkles },
              { title: "Global Perspectives", desc: "Nurturing modern global awareness and local viewpoints.", icon: Globe },
              { title: "Physical Education", desc: "Reinforcing gross motor skills, teamwork and personal fitness.", icon: Activity },
              { title: "Music", desc: "Exploring sound, rhythm, creative and acoustic aesthetics.", icon: Music },
              { title: "Art and Design", desc: "Expressive mediums, visual layout, and graphic creations.", icon: Palette },
              { title: "Design and Technology", desc: "Iterative structure, physical and architectural innovations.", icon: Cpu },
              { title: "Information and Communication Technology", desc: "Digital awareness, systems, programming and tools.", icon: Laptop }
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
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/5 flex items-center justify-center text-brand-orange mb-4 transition-all duration-500 group-hover:bg-brand-orange group-hover:text-white animate-fade-in">
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

      {/* 5. Cambridge Primary Checkpoint */}
      <section id="primary-checkpoint" className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0 max-w-full">
              <div className="flex flex-col items-center lg:items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-6 w-full justify-center lg:justify-start">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    Assessments & Benchmarking
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-6 text-center lg:text-left">
                  What is Cambridge Primary Checkpoint?
                </h2>
              </div>
              <div className="space-y-4 text-[#4B5563] text-[15px] font-medium font-gill leading-relaxed text-center lg:text-left">
                <p>
                  Cambridge Primary Checkpoint is a series of assessments designed to assess learners at the end of the Cambridge Primary programme.
                </p>
                <p>
                  For English, Mathematics and Science, Cambridge Primary Checkpoint tests are independently marked by Cambridge International.
                </p>
                <p>
                  They will provide a clear picture of learner's performance as they move on to the next stage of education.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-neutral-200/60 shadow-md flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="flex flex-col items-center sm:items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-6 w-full justify-center sm:justify-start">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    Experiential Quality
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>
              </div>
              
              <p className="text-brand-navy text-lg md:text-xl font-medium font-serif leading-relaxed mb-6">
                This curriculum framework, with continuous experiential learning, ensures every child is assessment-ready.
              </p>

              <div className="w-full h-[1px] bg-neutral-100 my-6"></div>

              {/* Manisha Sharma Facilitator Quote */}
              <div className="pt-2">
                <p className="italic text-neutral-700 text-sm md:text-base leading-relaxed font-medium mb-4">
                  "The big difference comes with the level at which Cambridge subjects are assessed, the rigorous assessment methodology and the ease at which educators can continually track student progress."
                </p>
                <div className="flex items-center gap-2">
                  <Bookmark size={16} className="text-brand-orange shrink-0" />
                  <span className="text-[11px] uppercase tracking-[1.5px] font-bold text-brand-navy font-sans">
                    Ms. Manisha Sharma <span className="text-brand-orange">(PIS Facilitator)</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Page-to-Page Navigation */}
      <section id="primary-navigation" className="py-16 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Previous button */}
            <div className="w-full sm:w-auto text-left order-2 sm:order-1">
              <a 
                href="#early-years"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
              >
                &larr; Early Years
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
                href="#lower-secondary"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
              >
                Lower Secondary &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default PrimaryYears;
