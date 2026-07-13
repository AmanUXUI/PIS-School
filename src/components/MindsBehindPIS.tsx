import { FC } from "react";
import { motion } from "motion/react";
import {
  Users,
  Award,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Heart,
  TrendingUp,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";

const MindsBehindPIS: FC = () => {
  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      {/* 1. Header Hero Panel with Breadcrumbs (consistent with other academic/leadership pages) */}
      <section className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-navy via-brand-navy to-[#181345]" />

        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-brand-gray mb-6">
            <Link
              className="text-decoration-none hover:text-brand-orange transition-colors cursor-pointer"
              to="/"
            >
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/50">Leadership Team</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold">Mind Behind PIS</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight tracking-tight text-white mb-4">
              Mind Behind PIS
            </h1>
            <p className="text-lg md:text-xl text-[#ffca05] font-serif font-bold leading-relaxed mb-6">
              The Visionaries Shaping Futures
            </p>
            <p className="text-base md:text-lg text-white/85 leading-relaxed font-light max-w-2xl">
              Meet the people whose vision, experience, and dedication guide
              Pavna International School forward. From the boardroom to the
              classroom, each one brings a unique strength that helps shape
              confident, capable, and grounded global citizens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Structured Sections showing the 3 core bodies in styled containers */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16 max-w-4xl text-left">
            {/* Board of Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 sm:p-10 rounded-2xl border border-neutral-100/90 shadow-[0_4px_25px_rgba(32,26,91,0.02)] bg-[#FAF9F5]/40"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] leading-none tracking-[2.5px] uppercase font-bold text-brand-orange bg-brand-orange/5 px-3 py-1.5 rounded-full border border-brand-orange/10 mb-3 inline-block">
                    Governance & Leadership
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy leading-tight tracking-tight">
                    Board of Management
                  </h2>
                </div>

                {/* Decorative Badge Icon */}
                <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange border border-brand-orange/5 shrink-0 self-start md:self-center">
                  <Users size={24} />
                </div>
              </div>

              <div className="relative p-6 sm:p-8 bg-white rounded-2xl border border-neutral-100/80 mb-6 shadow-sm">
                <div className="absolute top-0 left-0 w-[4px] h-full bg-brand-orange rounded-l-2xl" />
                <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[26px] font-medium">
                  The Board of Management steers the school's overall direction,
                  values, and long-term vision. Led by Chairman Mr. Swapnil Jain
                  and guided by ayama Chona, this team brings together
                  leadership, governance, and a shared commitment to academic
                  and ethical excellence.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-neutral-100 shadow-sm">
                  <ShieldCheck size={16} className="text-brand-orange" />
                  <span className="text-xs font-bold text-brand-navy">
                    Academic Integrity
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-neutral-100 shadow-sm">
                  <TrendingUp size={16} className="text-brand-orange" />
                  <span className="text-xs font-bold text-brand-navy">
                    Ethical Foresight
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Global Advisory Council */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 sm:p-10 rounded-2xl border border-neutral-100/90 shadow-[0_4px_25px_rgba(32,26,91,0.02)] bg-[#FAF9F5]/40"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] leading-none tracking-[2.5px] uppercase font-bold text-brand-orange bg-brand-orange/5 px-3 py-1.5 rounded-full border border-brand-orange/10 mb-3 inline-block">
                    Global Expertise
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy leading-tight tracking-tight">
                    Global Advisory Council
                  </h2>
                </div>

                {/* Decorative Badge Icon */}
                <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange border border-brand-orange/5 shrink-0 self-start md:self-center">
                  <Award size={24} />
                </div>
              </div>

              <div className="relative p-6 sm:p-8 bg-white rounded-2xl border border-neutral-100/80 mb-6 shadow-sm">
                <div className="absolute top-0 left-0 w-[4px] h-full bg-brand-orange rounded-l-2xl" />
                <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[26px] font-medium">
                  Our Global Advisory Council brings together respected voices
                  from education, administration, and public service. Their
                  insights help Pavna stay connected to global best practices
                  while staying rooted in strong values, ensuring every decision
                  reflects both vision and experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-neutral-100 shadow-sm">
                  <Sparkles size={16} className="text-brand-orange" />
                  <span className="text-xs font-bold text-brand-navy">
                    Best Practices
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-neutral-100 shadow-sm">
                  <Heart size={16} className="text-brand-orange" />
                  <span className="text-xs font-bold text-brand-navy">
                    Strong Values
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Academic Board */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 sm:p-10 rounded-2xl border border-neutral-100/90 shadow-[0_4px_25px_rgba(32,26,91,0.02)] bg-[#FAF9F5]/40"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] leading-none tracking-[2.5px] uppercase font-bold text-brand-orange bg-brand-orange/5 px-3 py-1.5 rounded-full border border-brand-orange/10 mb-3 inline-block">
                    Curriculum Standards
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy leading-tight tracking-tight">
                    Academic Board
                  </h2>
                </div>

                {/* Decorative Badge Icon */}
                <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange border border-brand-orange/5 shrink-0 self-start md:self-center">
                  <BookOpen size={24} />
                </div>
              </div>

              <div className="relative p-6 sm:p-8 bg-white rounded-2xl border border-neutral-100/80 mb-6 shadow-sm">
                <div className="absolute top-0 left-0 w-[4px] h-full bg-brand-orange rounded-l-2xl" />
                <p className="text-[#4B5563] text-[15px] sm:text-[16px] leading-[26px] font-medium">
                  The Academic Board is made up of experienced educators and
                  subject experts who shape the school's teaching standards and
                  curriculum quality. Their guidance ensures that classroom
                  learning stays rigorous, relevant, and student-focused at
                  every level.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-neutral-100 shadow-sm">
                  <BookOpen size={16} className="text-brand-orange" />
                  <span className="text-xs font-bold text-brand-navy">
                    Rigorous Learning
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-neutral-100 shadow-sm">
                  <Brain size={16} className="text-brand-orange" />
                  <span className="text-xs font-bold text-brand-navy">
                    Student Focused
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Controls / Returning Actions Footer */}
          <div className="mt-20 border-t border-neutral-100 pt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Previous button */}
              <div className="w-full sm:w-auto text-left order-2 sm:order-1">
                <a
                  href="/principals-message"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
                >
                  &larr; Principal's Message
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

              {/* Next page link */}
              <div className="w-full sm:w-auto text-right order-3">
                <a
                  href="/curriculum"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
                >
                  Curriculum Overview &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MindsBehindPIS;
