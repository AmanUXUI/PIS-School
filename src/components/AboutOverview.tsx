import { motion } from 'motion/react';
import { 
  Heart, 
  Handshake, 
  Users, 
  ArrowUpRight,
  ArrowRight,
  Sprout,
  Rocket,
  Search,
  Brain,
  Compass,
  Footprints
} from 'lucide-react';

export default function AboutOverview() {
  // Exact content lists for Vision and Mission (from OCR Page 1)
  const visionParagraphs = [
    "To enable every learner to become the best version of themselves – confident in their identity, grounded in values, and inspired to learn, lead, and live with purpose.",
    "We envision Pavna Schools as vibrant ecosystems that blend intellect with humility, tradition with innovation, ambition with compassion, and individuality with community."
  ];

  const missionParagraphs = [
    "Our mission is to provide a nurturing and inspiring educational environment where every learner feels valued, respected, empowered to reach their full potential, and express themselves freely. We are committed to delivering holistic, experiential, inquiry-led and interdisciplinary learning that blends academic excellence with emotional, social, and ethical growth.",
    "Through innovative teaching practices, dedicated faculty, and a unified curriculum, we aim to shape confident, compassionate, and curious learners who are prepared to thrive in a dynamic world.",
    "Our goal is to make quality education accessible and impactful creating institutions that are rooted in trust, inclusivity, and a deep sense of social responsibility."
  ];

  // Core Values content (derived exactly from OCR Page 2)
  const coreValuesMainText = "Our goal is to make quality education accessible and impactful creating institutions that are rooted in trust, inclusivity, and a deep sense of social responsibility.";

  const valuesItems = [
    {
      id: "01",
      title: "Resilience",
      description: "To Persevere Through Challenges With Courage, Adaptability And Grace.",
      icon: <Sprout size={24} />
    },
    {
      id: "02",
      title: "Hustle",
      description: "To Bring Passion, Initiative And Determination To Every Pursuit.",
      icon: <Rocket size={24} />
    },
    {
      id: "03",
      title: "Compassion",
      description: "To Act With Empathy And Kindness Toward All Living Beings.",
      icon: <Heart size={24} />
    },
    {
      id: "04",
      title: "Respect",
      description: "To Honor Self, Others, Nature And The Truth That Binds Them All.",
      icon: <Handshake size={24} />
    },
    {
      id: "05",
      title: "Curiosity",
      description: "To Question, Explore, And Seek Knowledge Beyond Boundaries.",
      icon: <Search size={24} />
    },
    {
      id: "06",
      title: "Intellect",
      description: "To Think Critically, Reason Deeply And Make Informed, Ethical Choices.",
      icon: <Brain size={24} />
    },
    {
      id: "07",
      title: "Inclusivity",
      description: "To Embrace Diversity, Respect Differences, Nurture Collaboration And Build Unity In Community.",
      icon: <Users size={24} />
    }
  ];

  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      {/* 1. Header Hero Panel with Breadcrumbs */}
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
          {/* Breadcrumb path */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-brand-gray mb-6">
            <span className="hover:text-brand-orange transition-colors cursor-pointer" onClick={() => window.location.hash = ''}>Home</span>
            <span className="text-white/30">/</span>
            <span className="text-white/50">About</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold">About PIS</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-4">
              About Pavna International School (PIS)
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl">
              Discover our visual legacy, pedagogical foundations, and deep-seated commitments to excellence and human values.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Philosophy Block (OCR Page 1) */}
      <section className="py-16 md:py-24 border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">

          {/* Core Structure with Visual Balance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Box Image */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange to-brand-navy rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-1000" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                <img 
                  src="https://i.postimg.cc/bvBB4ttS/image.png" 
                  alt="School Philosophy" 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Side Content Paragraphs */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Section Subhead Accent & Heading Wrapper */}
              <div className="flex flex-col items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-3 w-full">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-[28px] tracking-[1.65px] uppercase font-bold text-brand-orange">
                    Our Philosophy
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl md:text-[42px] font-sans font-bold md:leading-[50px] tracking-tight text-brand-navy mb-6">
                  Where Growth Meets Tradition
                </h2>
              </div>

              <div className="text-[15px] sm:text-[16px] leading-[26px] text-neutral-600 font-normal space-y-6">
                <p>
                  At Pavna International School, we believe education should grow like a tree, reaching beyond the walls of a classroom. Our students are encouraged to explore, question, and learn through real experiences rather than just textbooks. This freedom to explore builds curiosity, confidence, and a genuine love for learning.
                </p>

                <p>
                  In the diverse ecosystem of Pavna, every student, like a unique leaf on a tree, is given the liberty to chart their own educational journey. With a curriculum offering a wide spectrum of subjects, students discover and hone their passions. At PIS, we believe in nurturing the roots of curiosity and critical thinking, allowing each student to grow in their own direction.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section (OCR Page 1) */}
      <section className="py-16 md:py-24 bg-[#FAF9F5]/70 border-b border-gray-100/85 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-neutral-100 bg-white shadow-sm hover:shadow-[0_12px_32px_-12px_rgba(32,26,91,0.1)] transition-all duration-500 group overflow-hidden"
            >
              {/* Floating Absolute Watermark Content */}
              <span className="absolute top-4 right-8 text-5xl sm:text-[72px] font-sans font-bold text-neutral-100/60 group-hover:text-brand-orange/5 transition-colors duration-500 select-none">
                VISION
              </span>

              <div>
                {/* Circular light orange background icon badge transitioning to solid orange */}
                <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6 shrink-0 shadow-sm transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white group-hover:scale-105 border border-brand-orange/5">
                  <Compass size={24} className="stroke-[2]" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-brand-navy mb-6 group-hover:text-brand-orange transition-colors">
                  Our Vision
                </h3>
                
                <div className="space-y-4 text-neutral-600 font-normal text-[15px] sm:text-[16px] leading-[26px]">
                  {visionParagraphs.map((para, idx) => (
                    <p key={idx}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Decorative side bar highlight */}
              <div className="absolute top-0 left-0 w-[4px] h-full bg-brand-orange transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-neutral-100 bg-white shadow-sm hover:shadow-[0_12px_32px_-12px_rgba(32,26,91,0.1)] transition-all duration-500 group overflow-hidden"
            >
              {/* Floating Absolute Watermark Content */}
              <span className="absolute top-4 right-8 text-5xl sm:text-[72px] font-sans font-bold text-neutral-100/60 group-hover:text-brand-orange/5 transition-colors duration-500 select-none">
                MISSION
              </span>

              <div>
                {/* Circular light orange background icon badge transitioning to solid orange */}
                <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6 shrink-0 shadow-sm transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white group-hover:scale-105 border border-brand-orange/5">
                  <Footprints size={24} className="stroke-[2]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-brand-navy mb-6 group-hover:text-brand-orange transition-colors">
                  Our Mission
                </h3>
                
                <div className="space-y-4 text-neutral-600 font-normal text-[15px] sm:text-[16px] leading-[26px]">
                  {missionParagraphs.map((para, idx) => (
                    <p key={idx}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Decorative side bar highlight */}
              <div className="absolute top-0 left-0 w-[4px] h-full bg-brand-orange transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Core Values Section (Redesigned per Screenshot) */}
      <section className="py-16 md:py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Centered Header with decorative elements styling matching section 2 */}
          <div className="flex items-center justify-center gap-3 mb-6 w-full max-w-md mx-auto">
            <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
            <span className="shrink-0 text-[11px] leading-[28px] tracking-[1.65px] uppercase font-bold text-brand-orange text-center font-sans">
              THE PAVNA ETHOS
            </span>
            <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
          </div>

          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-[42px] font-sans font-bold md:leading-[50px] tracking-tight text-brand-navy mb-4">
              Core Values
            </h2>
            <p className="text-neutral-500 font-normal text-[15px] sm:text-[16.5px] leading-relaxed max-w-2xl mx-auto">
              Seven Timeless Values Shaping The Character Of Our Learners And The Culture Of Our Schools.
            </p>
          </div>

          {/* Grid layout exactly matching the minimalist format in the screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuesItems.map((value) => (
              <motion.div 
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: parseInt(value.id) * 0.05 }}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-none hover:border-brand-orange hover:-translate-y-1 transition-all duration-300 group relative flex flex-col justify-between overflow-hidden"
              >
                {/* Number in the top-right corner */}
                <span className="absolute top-4 right-6 text-[11px] font-sans font-bold text-neutral-300 tracking-widest select-none">
                  {value.id}
                </span>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  {/* Circular light orange background icon badge transitioning to solid orange */}
                  <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 shadow-sm transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white group-hover:scale-105 border border-brand-orange/5">
                    {value.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-[17px] sm:text-[18px] font-bold text-brand-navy mb-1.5 transition-colors duration-300 group-hover:text-brand-orange">
                      {value.title}
                    </h4>
                    <p className="text-[13.5px] sm:text-[14px] text-neutral-500 leading-relaxed font-normal font-gill">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Page-to-Page Navigation */}
          <div className="mt-20 border-t border-neutral-100 pt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Previous spacer */}
              <div className="w-full sm:w-auto text-left order-2 sm:order-1">
                <div className="hidden sm:block w-[120px]" />
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
                  href="#chairmans-message"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
                >
                  Chairman's Message &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
