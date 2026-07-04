import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function PavnaPromise() {
  return (
    <section className="pt-0 pb-16 lg:py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative min-h-0 lg:min-h-[420px] flex flex-col lg:flex-row lg:items-center px-6 pt-10 pb-0 sm:px-12 md:px-20 md:py-16 rounded-[24px] sm:rounded-[32px] lg:overflow-visible overflow-hidden">
          {/* Background Box with Clipping */}
          <div className="absolute inset-0 bg-brand-navy rounded-[24px] sm:rounded-[32px] overflow-hidden z-0">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img 
                src="https://imgh.in/host/0s0z15" 
                alt="Library" 
                className="w-full h-full object-cover opacity-40 lg:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent" />
            </div>
          </div>

          <div className="relative z-10 w-full lg:w-[65%] mb-8 lg:mb-0 text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-brand-yellow text-[10px] md:text-xs font-bold tracking-[0.2em] mb-6 sm:mb-8 mx-auto lg:mx-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              OUR PHILOSOPHY
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[30px] sm:text-[36px] md:text-[36px] lg:text-[36px] leading-[1.1] md:leading-[44px] lg:leading-[44px] font-bold text-white mb-5 md:mb-8 tracking-tight text-center lg:text-left"
            >
              Pavna <span className="text-brand-yellow">Promise</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 md:mb-10 text-center lg:text-left w-full"
            >
              <p className="text-white/90 text-[14px] sm:text-[17px] leading-[24px] max-w-2xl font-light mx-auto lg:mx-0">
                At Pavna, education is a journey of becoming - of discovering the best version of oneself while learning to live with purpose and joy. We aspire to build global citizens who are rooted in values, are lifelong learners, and unafraid to <span className="text-brand-yellow font-medium">#BeYourself</span>
              </p>
            </motion.div>

            <motion.a 
              href="https://pavnaintlschool.campuscare.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group bg-brand-yellow hover:bg-white text-brand-navy pl-6 pr-2 py-2 rounded-full font-bold text-xs sm:text-sm flex items-center gap-4 transition-all duration-300 w-fit cursor-pointer mx-auto lg:mx-0"
            >
              APPLY ONLINE
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-navy group-hover:bg-brand-yellow flex items-center justify-center text-white group-hover:text-brand-navy transition-all duration-300">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </motion.a>
          </div>

          {/* Student Cutout Image */}
          <div className="relative lg:absolute bottom-0 lg:bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[2%] w-[90%] sm:w-[70%] lg:w-[42%] h-[300px] sm:h-[350px] lg:h-[120%] z-20 pointer-events-none mt-4 lg:mt-0">
            <motion.img 
              src="https://i.postimg.cc/4NxRpGfx/BG.png" 
              alt="Pavna Student"
              className="w-full h-full object-contain object-bottom pointer-events-auto cursor-pointer origin-bottom"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
