import { FC, useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  Award,
  Activity,
  Compass,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowRight,
  Building,
  Palette,
  Music,
  Trophy,
  Layers,
  PhoneCall,
  Calendar,
  HelpCircle,
  GraduationCap,
  Target,
  Cpu,
  Scissors,
} from "lucide-react";

const adminImages = [
  "https://i.postimg.cc/pXdscR2c/admin-block-1-jpg.jpg",
  "https://i.postimg.cc/tCgBvpXm/admin-block-2-jpg.jpg",
  "https://i.postimg.cc/BQvm74qV/admin-block-3-jpg.jpg",
  "https://i.postimg.cc/9FfLgCWk/admin-block-4-jpg.jpg",
  "https://pavna-int.vercel.app/assets/admin%20block%205-BdOSmCRL.webp",
];

const environmentImages = [
  "https://imgh.in/host/6lvn92",
  "https://i.postimg.cc/VkQbrWHG/enviroment-11-jpg.jpg",
  "https://i.postimg.cc/BbBgLnJ0/Chat-GPT-Image-Jun-11-2026-11-27-03-AM.png",
  "https://imgh.in/host/rg727k",
  "https://i.postimg.cc/nhbQjGwK/enviroment-4-jpg.jpg",
  "https://i.postimg.cc/9Q5qRYNt/enviroment-5-jpg.jpg",
  "https://i.postimg.cc/qvVChxZx/enviroment-6-jpg.jpg",
  "https://i.postimg.cc/pLbnhJ1k/enviroment-7-jpg.jpg",
  "https://i.postimg.cc/Gmws8xSq/enviroment-8-jpg.jpg",
  "https://i.postimg.cc/htW7z13C/enviroment-9-jpg.jpg",
  "https://i.postimg.cc/Njqr9kPn/enviroment-jpg.jpg",
];

const academicImages = [
  "https://i.postimg.cc/Hx2f5z2Q/DSC06155-JPG.jpg",
  "https://i.postimg.cc/W3nQr8nr/DSC06164-JPG.jpg",
  "https://i.postimg.cc/QtbR5mbW/DSC06229-JPG.jpg",
  "https://i.postimg.cc/1zpxRsVB/DSC08709-JPG.jpg",
];

const sportsImages = [
  "https://i.postimg.cc/05SZGP1x/SWIMMING-JPG.jpg",
  "https://i.postimg.cc/XvDxLvvW/Whats-App-Image-2026-06-29-at-16-23-22.jpg",
  "https://imgh.in/host/kql5mm",
  "https://pavna-int.vercel.app/assets/ChatGPT%20Image%20Jun%2029_%202026_%2005_11_29%20PM-C1NFuqbR.webp",
  "https://pavna-int.vercel.app/assets/ChatGPT%20Image%20Jun%2029_%202026_%2004_09_46%20PM-Ccq-_uh_.webp",
];

const CampusLife: FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentEnvIdx, setCurrentEnvIdx] = useState(0);
  const [currentAcademicIdx, setCurrentAcademicIdx] = useState(0);
  const [currentSportsIdx, setCurrentSportsIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % adminImages.length);
    }, 6000); // Rotates every 6 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const envInterval = setInterval(() => {
      setCurrentEnvIdx((prev) => (prev + 1) % environmentImages.length);
    }, 7500); // Rotates every 7.5 seconds (between 5 and 10 seconds)
    return () => clearInterval(envInterval);
  }, []);

  useEffect(() => {
    const academicInterval = setInterval(() => {
      setCurrentAcademicIdx((prev) => (prev + 1) % academicImages.length);
    }, 7000); // Rotates every 7 seconds (between 5 and 10 seconds)
    return () => clearInterval(academicInterval);
  }, []);

  useEffect(() => {
    const sportsInterval = setInterval(() => {
      setCurrentSportsIdx((prev) => (prev + 1) % sportsImages.length);
    }, 6500); // Rotates every 6.5 seconds
    return () => clearInterval(sportsInterval);
  }, []);

  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      {/* 1. Header Hero Panel with Breadcrumbs */}
      <section className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="https://i.postimg.cc/sDX0mLp4/DSC05807-JPG.jpg"
            alt="Campus Life Background"
            className="w-full h-full object-cover scale-105 filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent" />
        </div>

        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-brand-gray mb-6">
            <span
              className="hover:text-brand-orange transition-colors cursor-pointer"
              onClick={() => (window.location.hash = "")}
            >
              Home
            </span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold">Campus Life</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-4">
              Campus Life
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl">
              A campus designed to inspire learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Campus Environment Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="flex flex-col items-center md:items-start max-w-full">
                <div className="flex  justify-center md:justify-start  items-center gap-3 mb-6 w-full">
                  <div className="w-6 md:w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    A CAMPUS DESIGNED TO INSPIRE
                  </span>
                  <div className="w-6 md:w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>

                <h2 className="text-center md:text-left text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-6">
                  Campus Environment
                </h2>
              </div>

              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
                Spread across a beautifully planned campus, Pavna International
                School offers a safe, vibrant, and stimulating environment where
                students love to learn and grow. Surrounded by lush green
                landscapes, modern architecture, and thoughtfully designed
                learning spaces, our campus promotes academic excellence,
                creativity, well-being, and meaningful experiences every day.
              </p>
            </div>

            <div className="lg:col-span-6 relative group">
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-white border border-neutral-100 aspect-square w-full">
                <motion.img
                  key={currentEnvIdx}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  src={environmentImages[currentEnvIdx]}
                  alt={`Campus Environment - Slide ${currentEnvIdx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />

                {/* Visual Indicators/Pagination Dots for the Environment Slider */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                  {environmentImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentEnvIdx(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentEnvIdx
                          ? "bg-brand-orange w-4"
                          : "bg-white/50 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3a. Academic Infrastructure */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side: Image */}
            <div className="lg:col-span-6 relative group">
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-white border border-neutral-100 aspect-square w-full">
                <motion.img
                  key={currentAcademicIdx}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  src={academicImages[currentAcademicIdx]}
                  alt={`World-Class Academic Infrastructure - Slide ${currentAcademicIdx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />

                {/* Visual Indicators/Pagination Dots for the Academic Infrastructure Slider */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                  {academicImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentAcademicIdx(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentAcademicIdx
                          ? "bg-brand-orange w-4"
                          : "bg-white/50 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-col items-center md:items-start  w-fit max-w-full">
                  <div className="flex items-center justify-center md:justify-start   gap-3 mb-6 w-full">
                    <div className="w-6 md:w-12 h-[2px] bg-brand-orange shrink-0"></div>
                    <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                      EXPLORE OUR ACADEMIC INFRASTRUCTURE
                    </span>
                    <div className="w-6 md:w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  </div>

                  <h2 className="text-3xl text-center md:text-left sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-6">
                    Academic Infrastructure
                  </h2>
                </div>

                <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-8">
                  Step into an inspiring learning environment designed to
                  nurture curiosity, creativity, and academic excellence. At
                  Pavna International School, our modern classrooms, advanced
                  laboratories, collaborative learning spaces, and
                  technology-enabled facilities create the perfect setting for
                  students to thrive. Every corner of our academic
                  infrastructure is thoughtfully designed to support innovation,
                  critical thinking, and future-ready education.
                </p>
              </div>

              {/* Exact extracted list of items from the text, displayed visually in a grid of 2x2 cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Modern Classrooms", icon: BookOpen },
                  { name: "Advanced Laboratories", icon: Layers },
                  { name: "Collaborative Learning Spaces", icon: Users },
                  { name: "Technology-Enabled Facilities", icon: Sparkles },
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 py-4 px-5 bg-transparent"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-orange/5 text-brand-orange flex items-center justify-center shrink-0">
                        <IconComp size={16} />
                      </div>
                      <span className="text-[14px] font-bold text-brand-navy leading-tight">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3b. Administration Block */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side: Content */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-col items-center md:items-start  w-fit max-w-full">
                  <div className="flex items-center justify-center md:justify-start   gap-3 mb-6 w-full">
                    <div className="w-6 md:w-12 h-[2px] bg-brand-orange shrink-0"></div>
                    <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                      THE HEART OF CAMPUS OPERATIONS
                    </span>
                    <div className="w-6 md:w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  </div>

                  <h3 className="text-center md:text-left text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-6">
                    Administration Block
                  </h3>
                </div>

                <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-8">
                  Experience the efficient administrative hub that ensures the
                  smooth functioning of Pavna International School. From student
                  support and academic coordination to parent communication and
                  campus management, our dedicated administration team works
                  tirelessly to provide a safe, organized, and enriching
                  educational experience for every learner.
                </p>
              </div>

              {/* Exact extracted areas from the text */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Student Support", icon: Heart },
                  { name: "Academic Coordination", icon: GraduationCap },
                  { name: "Parent Communication", icon: PhoneCall },
                  { name: "Campus Management", icon: Building },
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 py-4 px-5 bg-transparent"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-orange/5 text-brand-orange flex items-center justify-center shrink-0">
                        <IconComp size={16} />
                      </div>
                      <span className="text-[14px] font-bold text-brand-navy leading-tight">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side: Image */}
            <div className="lg:col-span-6 relative group">
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-white border border-neutral-100 aspect-square w-full">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  src={adminImages[currentImageIndex]}
                  alt={`Administration Block - Slide ${currentImageIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />

                {/* Navigation Indicator Dots Overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                  {adminImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex
                          ? "bg-brand-orange w-4"
                          : "bg-white/50 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sports Facilities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Content & Cards */}
            <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center">
              <div className="flex flex-col items-center md:items-start max-w-full">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6 w-full">
                  <div className="w-6 md:w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    OLYMPIC-STANDARD SPORTS
                  </span>
                  <div className="w-6 md:w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>

                <h2 className="text-center md:text-left text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6">
                  Sports Facilities
                </h2>
              </div>

              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-8">
                At Pavna International School, sports are an essential part of
                every student's growth journey. Our world-class sports
                infrastructure includes over 10 Olympic-standard facilities,
                encouraging students to develop discipline, teamwork,
                leadership, and resilience. From horse riding and swimming to
                basketball, badminton, lawn tennis, football, and more, every
                child is empowered to discover their athletic potential.
              </p>

              {/* Exact sports listed in the text, shown as highly-styled interactive list badges with icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Horse Riding", icon: Trophy },
                  { name: "Swimming", icon: Activity },
                  { name: "Basketball", icon: Sparkles },
                  { name: "Badminton", icon: Target },
                  { name: "Lawn Tennis", icon: Compass },
                  { name: "Football", icon: Users },
                ].map((sport, i) => {
                  const IconComp = sport.icon;
                  return (
                    <motion.div
                      key={sport.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="bg-[#FAF9F6] p-4 rounded-xl border border-neutral-100 flex flex-col items-center justify-center text-center group hover:border-brand-orange hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-orange/5 text-brand-orange flex items-center justify-center mb-2.5 transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white">
                        <IconComp size={18} />
                      </div>
                      <span className="text-[14px] font-bold text-brand-navy">
                        {sport.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right side: Image Slider/Carousel */}
            <div className="order-1 lg:order-2 lg:col-span-6 relative group w-full">
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-white border border-neutral-100 aspect-square w-full">
                <motion.img
                  key={currentSportsIdx}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  src={sportsImages[currentSportsIdx]}
                  alt={`Sports Facilities - Slide ${currentSportsIdx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />

                {/* Visual Indicators/Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                  {sportsImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSportsIdx(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentSportsIdx
                          ? "bg-brand-orange w-4"
                          : "bg-white/50 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Co-Curricular Activities (ECA) Section */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="flex flex-col items-center md:items-start w-fit max-w-full">
              <div className="flex items-center justify-center md:justify-start  gap-3 mb-6 w-full">
                <div className="w-6 md:w-12 h-[2px] bg-brand-orange shrink-0"></div>
                <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                  LEARNING BEYOND THE CLASSROOM
                </span>
                <div className="w-6 md:w-12 h-[2px] bg-brand-orange shrink-0"></div>
              </div>

              <h2 className="text-center md:text-left text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6">
                Co-Curricular Activities (ECA)
              </h2>
            </div>

            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              Education at Pavna International School extends far beyond
              academics. Our diverse co-curricular programmes inspire students
              to explore their passions, build confidence, and develop essential
              life skills. Through music, dance, performing arts, visual arts,
              clubs, leadership programmes, sports, and creative activities,
              students enjoy a well-rounded educational experience that nurtures
              every aspect of their personality.
            </p>
          </div>

          {/* Exact activities mentioned in the text listed in a visual grid of image containers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Textile",
                image: "https://imgh.in/host/i9edig",
                icon: Scissors,
                desc: "Exploring standard weaves, patterns, and creative fiber expressions to design unique fabrics.",
              },
              {
                name: "Pottery",
                image: "https://i.postimg.cc/QdNBKSyJ/pottery.jpg",
                icon: BookOpen,
                desc: "Nurturing deep literary voices, rhythmic expressions, and creative linguistic craftsmanship.",
              },
              {
                name: "AI & Robotics",
                image: "https://imgh.in/host/inkczw",
                icon: Cpu,
                desc: "Engaging with cutting-edge electronics, logic block coding, and mechanical assemblies.",
              },
              {
                name: "Music (Indian & Western)",
                image: "https://imgh.in/host/j4cq2l",
                icon: Music,
                desc: "Cultivating vocal and instrumental mastery across classical and contemporary genres.",
              },
              {
                name: "Performing Arts",
                image: "https://imgh.in/host/05xe1f",
                icon: Layers,
                desc: "Developing poise, theatrical confidence, stage presence, and expressive dramatic skills.",
              },
              {
                name: "Visual Arts",
                image: "https://imgh.in/host/82j4iu",
                icon: Palette,
                desc: "Unleashing fine creative imagination through painting, drawing, sculpting, and digital media.",
              },
            ].map((act, i) => {
              const IconComp = act.icon;
              return (
                <motion.div
                  key={act.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/60 shadow-sm hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-50 shrink-0">
                    <img
                      src={act.image}
                      alt={act.name}
                      className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />{" "}
                    {/* Floating Icon badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm text-brand-orange flex items-center justify-center shadow-md border border-neutral-100 z-10">
                      <IconComp size={18} />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-orange transition-colors duration-200">
                        {act.name}
                      </h3>
                      <p className="text-neutral-500 text-sm mt-2 leading-relaxed font-medium">
                        {act.desc}
                      </p>
                    </div>

                    {/* Tiny action visual indicator */}
                    {/* <div className="mt-4 flex items-center gap-1 text-[13px] font-bold text-brand-orange">
                      <span>Explore Program</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        &rarr;
                      </span>
                    </div> */}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls conforming with other academic/program pages */}
          <div className="mt-20 border-t border-neutral-200/60 pt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Previous button - Advance */}
              <div className="w-full sm:w-auto text-left order-2 sm:order-1">
                <a
                  href="#advance-as-a-level"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
                >
                  &larr; Advance - AS & A Level
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
                  href="#boarding"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
                >
                  Boarding &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
