import { FC } from "react";
import { motion } from "motion/react";
import { useSEO } from "../hooks/useSEO";
import { Link } from "react-router-dom";

interface TeamMember {
  name: string;
  designation: string;
  category: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Aarti Nigam",
    designation: "Principal",
    category: "Leadership",
    image:
      "https://pavnaintlschool.com/uploads/1.-AARTI-NIGAM-PRINCIPAL-KANPUR.png.webp",
  },
  {
    name: "Mansi Gurditta",
    designation: "Teaching Assistant",
    category: "Academic Support",
    image:
      "https://pavnaintlschool.com/uploads/16.-MANSI-GURDITTA-TEACHING-ASSISTANT-ALIGARH.png.webp",
  },
  {
    name: "Rajyasree Ghosh",
    designation: "Teacher Primary – Dance",
    category: "Performing Arts",
    image:
      "https://pavnaintlschool.com/uploads/25.-RAJYASREE-GHOSH-PRIMARY-TEACHER-DANCE-KOLKATA.png.webp",
  },
  {
    name: "Bipul K Mehta",
    designation: "Primary Teacher – P.E.",
    category: "Physical Education",
    image:
      "https://pavnaintlschool.com/uploads/6.-BIPUL-K-MEHTA-PRIMARY-TEACHER-PHYSICAL-EDUCATION-JHARKHAND.png.webp",
  },
  {
    name: "Pavneet Kaur",
    designation: "Head of Design & Technology",
    category: "Design & Technology",
    image:
      "https://pavnaintlschool.com/uploads/18.-PAVNEET-KAUR-HEAD-OF-DESIGN-TECHNOLOGY-GURUGRAM.png.webp",
  },
  {
    name: "Dr. Runa Shelina Bano",
    designation: "Teacher Secondary – Art & Design",
    category: "Art & Design",
    image:
      "https://pavnaintlschool.com/uploads/27.-DR.-RUNA-SHELINA-BANO-PRIMARY-TEACHER-ART-DESIGN-MALDA-WEST-BENGAL.png.webp",
  },
  {
    name: "Charu Varshney",
    designation: "Teacher – Music",
    category: "Performing Arts",
    image:
      "https://pavnaintlschool.com/uploads/8.-CHARU-VARSHNEY-TEACHER-MUSIC-ALIGARH.png.webp",
  },
  {
    name: "Poonam Chaturvedi",
    designation: "Teacher – HRT – Stage 3",
    category: "Primary Education",
    image:
      "https://pavnaintlschool.com/uploads/19.-POONAM-CHATURVEDI-TEACHER-HOME-ROOM-STAGE-3-ALIGARH.png.webp",
  },
  {
    name: "Gagan Madan",
    designation: "Teacher Secondary – P.E. Education",
    category: "Physical Education",
    image:
      "https://pavnaintlschool.com/uploads/11.-GAGAN-MADAN-SECONDARY-TEACHER-PHYSICAL-EDUCATION-AGRA.png.webp",
  },
  {
    name: "Poonam Gaur",
    designation: "Teacher Primary – ICT",
    category: "ICT & Computing",
    image:
      "https://pavnaintlschool.com/uploads/20.-POONAM-GAUR-TEACHER-ICT-ALIGARH.png.webp",
  },
  {
    name: "Shabana Haleem",
    designation: "Teacher Secondary – Global Perspectives",
    category: "Global Perspectives",
    image:
      "https://pavnaintlschool.com/uploads/30.-SHABANA-HALEEM-SECONDARY-TEACHER-GLOBAL-PERSPECTIVE-ALIGARH.png.webp",
  },
  {
    name: "Poornima S Raghav",
    designation: "Teaching Assistant",
    category: "Academic Support",
    image:
      "https://pavnaintlschool.com/uploads/21.-POORNIMA-S-RAGHAV-TEACHING-ASSITANT-ALIGARH.png",
  },
  {
    name: "Shilpi Chauhan",
    designation: "Teacher Secondary – Hindi",
    category: "Languages",
    image:
      "https://pavnaintlschool.com/uploads/31.-SHILPI-CHAUHAN-PRIMARY-HINDI-TEACHER-ALIGARH.png.webp",
  },
  {
    name: "Manisha Sharma",
    designation: "Teacher – HRT – Stage 5",
    category: "Primary Education",
    image:
      "https://pavnaintlschool.com/uploads/15.-MANISHA-SHARMA-TEACHER-HOME-ROOM-STAGE-5-ALIGARH.png.webp",
  },
  {
    name: "Prachi Maheshwari",
    designation: "Teacher – Accountancy & BST",
    category: "Commerce",
    image:
      "https://pavnaintlschool.com/uploads/22.-PRACHI-MAHESHWARI-TEACHER-ACCOUNTANCY-BUSINESS-STUDIES-ALIGARH.png.webp",
  },
  {
    name: "Soumyadip Banerjee",
    designation: "Teacher Secondary – Dance",
    category: "Performing Arts",
    image:
      "https://pavnaintlschool.com/uploads/33.-SOUMYADIP-BANERJEE-SECONDARY-TEACHER-DANCE-KOLKATA.png.webp",
  },
  {
    name: "Manoj Kumar",
    designation: "Coordinator – Examination",
    category: "Academic Support",
    image:
      "https://pavnaintlschool.com/uploads/16.-MANOJ-KUMAR-COORDINATOR-EXAMINATION-HYDERABAD.png.webp",
  },
  {
    name: "Prateek Mehta",
    designation: "Teacher Secondary – Economics",
    category: "Social Sciences",
    image:
      "https://pavnaintlschool.com/uploads/23.-PRATEEK-MEHTA-SECONDARY-TEACHER-ECONOMICS-ALIGARH.png.webp",
  },
];

const AcademicTeam: FC = () => {
  useSEO({
    title: "Academic Team |Pavna International School ",
    description: "",
    keywords: "",
  });
  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      {/* 1. Header Hero Panel with Breadcrumbs */}
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
            <Link
              className="text-decoration-none hover:text-brand-orange transition-colors cursor-pointer"
              to="/"
            >
              Home
            </Link>
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
              Visionary educators and leaders shaping standard academic
              pathways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Academic Team Section with Faculty Cards Grid */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] leading-none tracking-[2.5px] uppercase font-bold text-brand-orange bg-brand-orange/5 px-3 py-1.5 rounded-full border border-brand-orange/10 mb-3 inline-block">
              Educators & Leaders
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-4">
              Meet Our Faculty & Academic Team
            </h2>
            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              Our esteemed faculty, leadership, and educators committed to
              nurturing excellence and preparing students to thrive in an
              ever-evolving world.
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
                  transition={{ delay: (i % 3) * 0.05, duration: 0.5 }}
                  className="bg-white rounded-2xl border border-neutral-100/90 shadow-sm overflow-hidden flex flex-col h-[400px] hover:border-brand-orange hover:shadow-[0_12px_24px_-10px_rgba(244,129,32,0.18)] transition-all duration-500 group"
                >
                  {/* Image section occupying 70-75% of card height (290px out of 400px = 72.5%) */}
                  <div className="h-[290px] w-full overflow-hidden relative bg-[#FAF9F6]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
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
