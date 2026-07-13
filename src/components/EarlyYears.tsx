import { FC } from "react";
import { motion } from "motion/react";
import {
  Apple,
  Activity,
  Sparkles,
  Users,
  Heart,
  BookOpen,
  Brain,
  PenTool,
  Calculator,
  Globe,
  TrendingUp,
  Bookmark,
  ShieldCheck,
  Lightbulb,
  Smile,
  HelpCircle,
  ArrowRight,
  MessagesSquare,
  Paintbrush,
  Music,
  UsersRound,
  Triangle,
  Circle,
  Volleyball,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";

const EarlyYears: FC = () => {
  useSEO({
    title: "Curriculum |Pavna International School ",
    description: "",
    keywords: "",
  });
  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      {/* 1. Header Hero Panel with Breadcrumbs (consistent with other leadership & academic pages) */}
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
              Early Years (Age 3 To 5 Years)
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-left mx-auto md:mx-0"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-2">
              Early Years
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-sans font-semibold text-brand-yellow mb-6">
              (Age 3–5 Years)
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl mx-auto md:mx-0">
              Let the learners start off on the right foot with us!
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro and Development Factors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6">
              Early Childhood Development
            </h2>

            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-6">
              Early Childhood development is essential for a child's future
              success, and there are several factors that can contribute to his
              or her growth and development. Preschool learning activities play
              a key role in this process. Here are five key elements that can
              help to boost early childhood development:
            </p>
          </div>

          {/* 5 Key Elements Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              {
                name: "Nutrition",
                icon: Apple,
                desc: "Providing essential fuel and vitamins for healthy brain and body growth.",
              },
              {
                name: "Exercise",
                icon: Activity,
                desc: "Building motor skills, agility, and a strong physical foundation from the start.",
              },
              {
                name: "Stimulation",
                icon: Sparkles,
                desc: "Sparking curiosity, cognitive pathways, and creative expression via active play.",
              },
              {
                name: "Parental Involvement",
                icon: Heart,
                desc: "Partnering together closely to ensure consistent guidance, love, and care.",
              },
              {
                name: "Socialization",
                icon: Users,
                desc: "Learning collaboration, emotional sharing, and building interactive confidence.",
              },
            ].map((el, i) => {
              const IconComp = el.icon;
              return (
                <motion.div
                  key={el.name}
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
                    {el.name}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed font-medium font-gill">
                    {el.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="max-w-3xl">
            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              Providing for these five key factors, parents can help foster
              their child growth and development and provide them with the
              resources and opportunities necessary for a successful future.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Cambridge Early Years Curriculum */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0 max-w-full">
              <div className="flex flex-col items-center lg:items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-6 w-full justify-center lg:justify-start">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    Globally Structured Education
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-6 text-center lg:text-left">
                  Cambridge Early Years Curriculum
                </h2>
              </div>
              <div className="space-y-6 text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
                <p>
                  Follows a holistic child development approach that focuses on
                  the whole child through engaging preschool learning
                  activities, and connects their development with the world and
                  people around them. Is built around four key areas of early
                  childhood development:
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  name: "Physical Development",
                  image: "https://i.postimg.cc/5y2ScY24/shoes.png",
                  desc: "Strengthening fine and gross motor movements through creative and active play.",
                },
                {
                  name: "Language and Communication Development",
                  image: "https://i.postimg.cc/gj2H9X2k/message.png",
                  desc: "Building rich vocabulary, reading familiarity, and self-expression skills.",
                },
                {
                  name: "Cognitive Development",
                  image: "https://i.postimg.cc/fyRf4tRD/brain.png",
                  desc: "Enabling structured thinking, observation, scientific inquiry, and logical reasoning.",
                },
                {
                  name: "Social and Emotional Development",
                  image: "https://i.postimg.cc/fyRf4tRW/heart.png",
                  desc: "Cultivating self-awareness, personal values, emotional control, and friendships.",
                },
              ].map((area, i) => {
                return (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="bg-white p-6 rounded-2xl border border-neutral-100/80 shadow-sm hover:border-brand-orange hover:shadow-md transition-all duration-500 group flex gap-4 relative overflow-hidden"
                  >
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                      <img
                        src={area.image}
                        alt={area.name}
                        className="w-10 h-10 object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-brand-navy text-[16px] mb-1.5 transition-colors duration-300 group-hover:text-[#f48120]">
                        {area.name}
                      </h4>
                      <p className="text-[#4B5563] text-[14px] sm:text-[16px] leading-relaxed sm:leading-[24px] font-medium font-gill">
                        {area.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-neutral-200/60 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "The Spiral Approach",
                text: "Develops knowledge, understanding and skills through a spiral approach, by revisiting and engaging with topics and skills in more depth at each stage.",
                image: "https://i.postimg.cc/G27wmxSp/Early-Years.jpg",
              },
              {
                label: "Development Milestones",
                text: "Helps learners to meet internationally established milestones for early development.",
                image: "https://i.postimg.cc/KcP24XjX/DSC05706-JPG.jpg",
              },
              {
                label: "Individualized Monitoring",
                text: "Although children develop at different rates, the curriculum provides a structure for teaching and learning that helps us for monitor and support each child's progress.",
                image: "https://i.postimg.cc/XNDL0qK2/image.png",
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
        </div>
      </section>

      {/* 4. Balanced Learning Experience (Interconnected Areas of Development) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0">
            <div className="flex flex-col items-center md:items-start mx-auto md:mx-0 max-w-full">
              <div className="flex items-center gap-3 mb-6 w-full justify-center md:justify-start">
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                  Pavna International School
                </span>
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6 text-center md:text-left">
                A Balanced Learning Experience
              </h2>
            </div>

            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              We ensure a balanced learning experience with six equally
              important and interconnected areas of development:
            </p>
          </div>

          {/* Six Interconnected Areas of Development Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Communication, Language & Literacy",
                text: "Your child will be encouraged to develop their speaking, listening, reading and writing skills.",
                image: "https://i.postimg.cc/qMH5FQ8W/Group-1.png",
              },
              {
                title: "Creative Expression",
                text: "Your child will have the chance to express their ideas in a creative way.",
                image: "https://i.postimg.cc/RVxDYG7r/Group-1-1.png",
              },
              {
                title: "Personal, Social & Emotional Development",
                text: "Your child will develop social skills, and build self-esteem and confidence.",
                image: "https://i.postimg.cc/pXM6SkfM/Group-1-2.png",
              },
              {
                title: "Mathematics",
                text: "Your child will begin to develop mathematical thinking and language.",
                image: "https://i.postimg.cc/YqBsP86K/Group-1-3.png",
              },
              {
                title: "Physical Development",
                text: "Your child will develop different types of movement skills and build the foundations for a healthy lifestyle, supporting strong physical Development For Children from an early age.",
                image: "https://i.postimg.cc/4NRS0w6T/Group-1-4.png",
              },
              {
                title: "Understanding the World",
                text: "Your child will learn to reflect, question, explore and interact with the world around them.",
                image: "https://i.postimg.cc/4NRS0w6Z/Group-1-5.png",
              },
            ].map((item, i) => {
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-[0_12px_24px_-10px_rgba(244,129,32,0.18)] hover:border-brand-orange hover:-translate-y-1 flex flex-col justify-between transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div>
                    <div className="w-12 h-12 flex items-center justify-center mb-5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="font-serif font-bold text-brand-navy text-[17px] mb-3 leading-snug group-hover:text-brand-orange transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[#4B5563] text-[14px] leading-relaxed font-medium font-gill">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="italic text-brand-navy font-serif text-lg md:text-xl font-medium tracking-wide">
              "Learning that stays with the student through school, university
              and beyond…."
            </p>
          </div>
        </div>
      </section>

      {/* 5. Measuring Progress & Alignment */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0 max-w-full">
              <div className="flex flex-col items-center lg:items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-6 w-full justify-center lg:justify-start">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    Quality & Accountability
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-6 text-center lg:text-left">
                  Measuring Progress
                </h2>
              </div>
              <div className="space-y-4 text-[#4B5563] text-[15px] font-medium font-gill leading-relaxed text-center lg:text-left">
                <p>
                  Assessment is a crucial part of Early Childhood Education. It
                  provides valuable insights into children's progress, and helps
                  teachers to plan and support the next stages of a child's
                  learning and development.
                </p>
                <p>
                  The Cambridge Early Years programme includes tools and
                  resources that can help early years settings to assess and
                  evaluate a child's learning and development against the
                  learning statements within the Cambridge Early Years
                  curriculum framework.
                </p>
                <p>
                  The use of continuous formative assessment through
                  observations and gathering evidence during learning is central
                  to our approach.
                </p>
                <p>
                  It is on this basis that early years teachers are able to
                  measure progress and provide reports to parents on a child's
                  level of attainment and achievement.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-neutral-200/60 shadow-md flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="flex flex-col items-center sm:items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-6 w-full justify-center sm:justify-start">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    NEP Alignment
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>
              </div>

              <p className="text-brand-navy text-lg md:text-xl font-medium font-serif leading-relaxed mb-6">
                Cambridge Early Years is aligned with the National Education
                Policy (NEP) 2020, so when your child completes the programme
                they can also progress to local state or national curriculum in
                India.
              </p>

              <div className="w-full h-[1px] bg-neutral-100 my-6"></div>

              <div className="flex items-center gap-4 text-brand-orange font-bold text-sm">
                <Bookmark size={20} className="shrink-0" />
                <span>
                  Fully mapped milestones transitioning seamlessly to future
                  academic levels.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Child Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 mx-auto text-center flex flex-col items-center">
            <div className="flex flex-col items-center w-fit max-w-full mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6 w-full">
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                  Lifelong Capabilities
                </span>
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6">
                How will my child benefit from the programme?
              </h2>
            </div>
            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              The Cambridge Early Childhood Education Curriculum will help your
              child become:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Responsible",
                text: "They will begin to take some responsibility for their own care and for their own thinking, learning and emotions. They will interact positively with others and have positive attitudes to people's similarities and differences.",
                icon: ShieldCheck,
              },
              {
                title: "Innovative",
                text: "They will ask questions to find out more about the world around them, and try different strategies to overcome challenges and solve problems.",
                icon: Lightbulb,
              },
              {
                title: "Confident",
                text: "They will learn to express, clarify and develop their own ideas and to respond constructively to others' ideas.",
                icon: Smile,
              },
              {
                title: "Engaged",
                text: "They will develop their own knowledge, understanding and skills through social interaction and collaboration.",
                icon: Users,
              },
              {
                title: "Reflective",
                text: "They will reflect on their own and other's activities, saying what they liked and did not like, and what went well and not so well. They begin to understand how reflection and feedback can help to develop new ideas.",
                icon: Brain,
              },
            ].map((benefit, i) => {
              const IconComp = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="bg-white p-6 rounded-2xl border border-neutral-100/80 shadow-sm hover:border-brand-orange hover:shadow-[0_12px_24px_-10px_rgba(244,129,32,0.18)] transition-all duration-500 group flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div>
                    <div className="w-10 h-10 rounded-full bg-brand-orange/5 flex items-center justify-center text-brand-orange mb-4 transition-all duration-500 group-hover:bg-brand-orange group-hover:text-white">
                      <IconComp size={18} className="stroke-[1.75]" />
                    </div>
                    <h3 className="font-serif font-bold text-brand-navy text-[16px] mb-3 group-hover:text-brand-orange transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-[#4B5563] text-[14px] sm:text-[16px] leading-relaxed sm:leading-[24px] font-medium font-gill">
                      {benefit.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-20 border-t border-neutral-100 pt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Previous button - Curriculum */}
              <div className="w-full sm:w-auto text-left order-2 sm:order-1">
                <Link
                  to="/curriculum"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
                >
                  &larr; Curriculum Overview
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
                  to="/primary"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
                >
                  Primary Years &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarlyYears;
