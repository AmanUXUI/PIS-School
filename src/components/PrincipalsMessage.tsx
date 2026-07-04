import { FC } from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { motion } from 'motion/react';

const PrincipalsMessage: FC = () => {
  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      
      {/* 1. Header Hero Panel with Breadcrumbs (consistent with Chairman's Message and AboutOverview) */}
      <section className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img 
            src="/src/assets/images/school_robotics_lab_1780940199532.png" 
            alt="Robotics Lab Background" 
            className="w-full h-full object-cover scale-105 filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent" />
        </div>
        
        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb path - Styled exactly consistent with Chairman's Message */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-brand-gray mb-6">
            <span className="hover:text-brand-orange transition-colors cursor-pointer" onClick={() => window.location.hash = ''}>Home</span>
            <span className="text-white/30">/</span>
            <span className="text-white/50">Leadership</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold">Principal's Message</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-4">
              Principal's Message
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl">
              Nurturing talents, fostering collaborative learning, and celebrating individuality for a truly holistic education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main content section */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-stretch items-start">
            
            {/* Visual Portrait Card Column */}
            <div className="lg:col-span-5 relative group flex flex-col h-full">
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-neutral-100 h-full min-h-[450px] lg:min-h-0 flex-1">
                <img 
                  src="https://i.postimg.cc/vBDFRKW9/Guest-Image-4.png" 
                  alt="Ms. Aarti Nigam, Principal" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Message Text Column */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              <div className="flex items-center gap-3 w-full max-w-sm">
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                  A NOTE FROM OUR PRINCIPAL
                </span>
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              </div>

              <h2 className="text-3xl sm:text-[42px] md:text-[42px] lg:text-[42px] font-serif font-bold text-brand-navy leading-tight md:leading-[50px] lg:leading-[50px] tracking-tight">
                Message from the Principal
              </h2>

              <div className="space-y-6 text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
                <p>
                  Welcome to Pavna International School, where we dedicate ourselves to nurturing each child’s talent. Our collaborative environment at PIS, supported by students, parents and staff, is designed to foster excellence. We integrate 21st-century educational practices with experiential learning, focusing on developing diverse skills from critical thinking to technical proficiency, preparing well-rounded students.
                </p>
                <p>
                  Our Cambridge Curriculum emphasizes not just academic excellence but also essential life skills, ensuring holistic development. We balance rigorous academics with enriching co-curricular activities, including sports and arts, to cultivate varied talents. Our “Be yourself” philosophy celebrates individuality, encouraging students to explore their unique talents and think independently. Embracing one’s true self is at the heart of the PIS experience.
                </p>
              </div>

              {/* Highlighted key philosophy callout */}
              <div className="p-6 bg-[#FAF9F5] rounded-2xl border border-neutral-200/60 shadow-sm flex items-start gap-4 hover:border-brand-orange/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/5 text-brand-orange flex items-center justify-center shrink-0">
                  <Award size={18} className="stroke-[1.75]" />
                </div>
                <p className="text-brand-navy text-[16px] font-serif font-bold italic leading-relaxed mb-0">
                  Our “Be yourself” philosophy celebrates individuality, encouraging students to explore their unique talents and think independently
                </p>
              </div>

              {/* Signatures & Controls */}
              <div className="pt-10 border-t border-neutral-100 mt-4">
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold mb-2">Warmest Regards,</p>
                  <h4 className="font-serif text-2xl font-bold text-brand-navy mb-1">Ms. Aarti Nigam</h4>
                  <p className="text-[12px] text-brand-orange uppercase font-bold tracking-wider">Principal, Pavna International School</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Page-to-Page Navigation */}
      <section className="py-16 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Previous button */}
            <div className="w-full sm:w-auto text-left order-2 sm:order-1">
              <a 
                href="#chairmans-message"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
              >
                &larr; Chairman's Message
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
                href="#minds-behind-pis"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
              >
                Minds Behind PIS &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default PrincipalsMessage;
