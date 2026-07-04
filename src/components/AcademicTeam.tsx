import { FC } from 'react';
import { motion } from 'motion/react';

interface TeamMember {
  name: string;
  designation: string;
  category: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Shyama Chona",
    designation: "(Educationist) President",
    category: "Leadership",
    image: "https://i.postimg.cc/02gKr06L/Guest-Image.png"
  },
  {
    name: "Mr. Swapnil Jain",
    designation: "(Industrialist) Chairman",
    category: "Leadership",
    image: "https://i.postimg.cc/fWpCQYHk/Guest-Image-2.png"
  },
  {
    name: "Prof. KVSM Krishna",
    designation: "Director Emeritus",
    category: "Leadership",
    image: "https://i.postimg.cc/dDctJ7yS/Guest-Image-3.png"
  },
  {
    name: "Ms. Aarti Nigam",
    designation: "Principal",
    category: "Leadership",
    image: "https://i.postimg.cc/gcns7gHN/Guest-Image-4.png"
  },
  {
    name: "Ms. Jeanie Aibara",
    designation: "(Educationist) Head Academic Board",
    category: "Academic Board",
    image: "https://i.postimg.cc/HWVzN696/Guest-Image-5.png"
  },
  {
    name: "CA Rakesh Bajaj",
    designation: "(Educationist) Head Operations",
    category: "Administration",
    image: "https://i.postimg.cc/BZXpzmBp/Guest-Image-6.png"
  },
  {
    name: "Mr. JC Pant",
    designation: "(Educationist) Member",
    category: "Academic Board",
    image: "https://i.postimg.cc/sfqmC5Tw/Guest-Image-7.png"
  },
  {
    name: "Mr. Agam Jain",
    designation: "(IPS) Member",
    category: "Advisory Council",
    image: "https://i.postimg.cc/2jMGNnHm/Guest-Image-8.png"
  },
  {
    name: "Mr. Gaurav Dayal",
    designation: "(IAS) Member",
    category: "Advisory Council",
    image: "https://i.postimg.cc/WpC8c09N/Guest-Image-9.png"
  },
  {
    name: "Mr. Piyush Mordia",
    designation: "(IPS) Member",
    category: "Advisory Council",
    image: "https://i.postimg.cc/jqmcYy8t/Guest-Image-10.png"
  },
  {
    name: "Mr. Paras Parekh",
    designation: "(Business) Member",
    category: "Advisory Council",
    image: "https://i.postimg.cc/Pf9yn165/Guest-Image-11.png"
  },
  {
    name: "Mr. Pramod Kumar",
    designation: "(Legal) Member",
    category: "Advisory Council",
    image: "https://i.postimg.cc/VspgPX7v/Guest-Image-12.png"
  }
];

const AcademicTeam: FC = () => {
  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      
      {/* 1. Header Hero Panel with Breadcrumbs (consistent with Early Years) */}
      <section className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img 
            src="/src/assets/images/school_robotics_lab_1780940199532.png" 
            alt="School Lab Background" 
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
            <span className="text-white/50">About</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold">Academic Team</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-4">
              Academic Team
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl">
              Visionary educators and leaders shaping standard academic pathways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Academic Team Section with Faculty Cards Grid */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] leading-none tracking-[2.5px] uppercase font-bold text-brand-orange bg-brand-orange/5 px-3 py-1.5 rounded-full border border-brand-orange/10 mb-3 inline-block">
              Advisors & Leaders
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-4">
              Meet Our Academic Board & Council
            </h2>
            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              Our esteemed leadership, board members, and educationists working in unison to steer Pavna toward excellence.
            </p>
          </div>

          {/* Premium Faculty Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => {
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl border border-neutral-100/90 shadow-sm overflow-hidden flex flex-col h-[400px] hover:border-brand-orange hover:shadow-[0_12px_24px_-10px_rgba(244,129,32,0.18)] transition-all duration-500 group"
                >
                  {/* Image section occupying 70-75% of card height (290px out of 400px = 72.5%) */}
                  <div className="h-[290px] w-full overflow-hidden relative bg-[#FAF9F6]">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-brand-navy/90 backdrop-blur-sm text-[10px] uppercase font-bold tracking-widest text-brand-yellow px-3 py-1 rounded-full border border-white/10">
                      {member.category}
                    </div>
                  </div>

                  {/* Info section occupying remaining ~27.5% of card height (110px out of 400px) */}
                  <div className="p-5 flex flex-col justify-center h-[110px] bg-white border-t border-neutral-50">
                    <h3 className="text-[17px] sm:text-lg font-serif font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors duration-300 leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-brand-orange font-bold uppercase tracking-wider leading-tight sm:leading-normal">
                      {member.designation}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default AcademicTeam;
