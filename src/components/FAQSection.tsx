import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "1. Why is Pavna International School considered the best international school in Sasni?",
    answer: "Pavna International School offers a globally recognized curriculum, experienced faculty, modern infrastructure, and a holistic learning environment, making it one of the best international schools in Sasni."
  },
  {
    question: "2. Does Pavna International School follow the Cambridge curriculum?",
    answer: "Yes, Pavna International School is a Cambridge curriculum school in Sasni, providing students with an internationally recognized education that prepares them for global opportunities."
  },
  {
    question: "3. Are boarding facilities available at Pavna International School?",
    answer: "Yes, we provide safe, secure, and comfortable boarding facilities, making us one of the top boarding schools in Sasni for students seeking a residential learning experience."
  },
  {
    question: "4. What modern facilities are available on campus?",
    answer: "Our campus features smart classrooms, science and computer labs, sports facilities, libraries, activity zones, and other modern international school facilities designed to support all-round student development."
  },
  {
    question: "5. How can I apply for school admission in Sasni at Pavna International School?",
    answer: "Parents can contact our admissions team through the website, phone, or by visiting the campus. We will guide you through the complete admission process."
  },
  {
    question: "6. Is Pavna International School a residential school?",
    answer: "Yes, Pavna International School offers excellent residential facilities and is recognized among the top residential schools in Sasni."
  },
  {
    question: "7. What makes the international curriculum beneficial for students?",
    answer: "The international curriculum focuses on critical thinking, creativity, communication skills, and global perspectives, helping students excel academically and personally."
  },
  {
    question: "8. What extracurricular activities are offered at the school?",
    answer: "Students can participate in sports, arts, music, dance, leadership programs, clubs, and various co-curricular activities to ensure holistic development."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      id="faq-section" 
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16" id="faq-header-wrapper">
          <div className="flex flex-col items-center w-fit max-w-full mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4 w-full" id="faq-tagline-wrapper">
              <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              <span 
                className="shrink-0 text-brand-orange text-[11px] leading-[28px] tracking-[1.65px] uppercase font-bold"
                id="faq-tagline"
              >
                Got Questions?
              </span>
              <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
            </div>
            <h2 
              className="text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] md:leading-[50px] font-bold text-brand-navy tracking-tight"
              id="faq-title"
            >
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4" id="faq-accordion-container">
          {FAQ_DATA.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="bg-[#FAF9F5] rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 shadow-[0_4px_15px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_25px_rgba(32,26,91,0.03)]"
                id={`faq-item-${index}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-start gap-4 justify-between font-gill hover:bg-white/50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                >
                  <div className="flex gap-3 items-center">
                    <HelpCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" id={`faq-icon-help-${index}`} />
                    <span 
                      className="font-bold text-brand-navy text-[14px] sm:text-[18px] leading-tight"
                      id={`faq-question-text-${index}`}
                    >
                      {item.question.replace(/^\d+\.\s*/, "")}
                    </span>
                  </div>
                  <span 
                    className={`w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 text-brand-navy transition-transform duration-300 ${isOpen ? "rotate-180 bg-brand-orange/10 border-brand-orange/20 text-brand-orange" : ""}`}
                    id={`faq-indicator-${index}`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      id={`faq-content-motion-${index}`}
                    >
                      <div 
                        className="p-6 sm:p-7 pt-0 border-t border-gray-100/50 text-[#4A5568] leading-relaxed text-[13.5px] sm:text-[16px]"
                        id={`faq-answer-inner-${index}`}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
