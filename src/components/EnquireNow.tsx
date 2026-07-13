import React, { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  X,
  RotateCw,
  Send,
  HelpCircle,
  ShieldCheck,
  BookOpen,
  Sparkles,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";

const STATES_CITIES_MAP: Record<string, string[]> = {
  "Uttar Pradesh": [
    "Hathras",
    "Aligarh",
    "Agra",
    "Noida",
    "Ghaziabad",
    "Lucknow",
    "Kanpur",
  ],
  Delhi: ["New Delhi", "Dwarka", "Rohini"],
  Haryana: ["Gurgaon", "Faridabad", "Rohtak", "Sonipat"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Thane"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore"],
  Other: ["Other"],
};

const ADMISSION_GRADES = [
  "Playgroup",
  "Nursery",
  "LKG",
  "UKG",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];

const SCHOOLING_OPTIONS = ["Day Schooling", "Day Boarding", "Full Boarding"];

const COUNTRY_CODES = [
  { code: "+91", label: "IND (+91)" },
  { code: "+1", label: "USA (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+65", label: "SGP (+65)" },
];

const EnquireNow: FC = () => {
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaBgSeed, setCaptchaBgSeed] = useState<
    { x1: number; y1: number; x2: number; y2: number }[]
  >([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const generateCaptcha = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);

    const circles = [];
    for (let i = 0; i < 3; i++) {
      circles.push({
        x1: Math.floor(Math.random() * 80) + 10,
        y1: Math.floor(Math.random() * 25) + 5,
        x2: Math.floor(Math.random() * 20) + 15,
        y2: Math.floor(Math.random() * 20) + 15,
      });
    }
    setCaptchaBgSeed(circles);
    setErrors((prev) => ({ ...prev, captcha: "" }));
  };
  useEffect(() => {
    generateCaptcha();
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in4.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);
  }, []);

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
            <Link
              className="text-decoration-none hover:text-brand-orange transition-colors cursor-pointer"
              to="/"
            >
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/50">Admissions</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold">Enquire Now</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-4">
              Enquire Now
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl">
              Take the first step towards a vibrant academic journey for your
              child.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Title Section - Matching Early Childhood Development Typography */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center flex flex-col items-center">
            {/* Orange subtitle line matching Early Years Section */}
            <div className="flex items-center justify-center gap-3 mb-6 w-full max-w-md mx-auto">
              <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                Admissions & Fees
              </span>
              <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-brand-navy mb-6 max-w-3xl leading-tight">
              Want to Enquire about Admissions <br /> or Fees?
            </h2>

            <p className="text-[#4B5563] text-lg sm:text-xl leading-relaxed font-medium font-gill max-w-2xl">
              Share your details and our team will connect with you soon.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Enquiry Form Container - Consistent styling, margins, shapes, inputs */}
      <section className="pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
          >
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none"></div>

            {/* Form Title & Icon Block */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                <ClipboardList size={22} className="stroke-[1.75]" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-brand-navy">
                  Inquiry Details
                </h3>
                <p className="text-xs text-brand-gray font-gill font-medium">
                  Please fill in the details of the prospective student
                </p>
              </div>
            </div>

            <div
              className="npf_wgts"
              data-height="520px"
              data-w="d190862d64d81dadfab9679fed72ae68"
            ></div>
          </motion.div>
        </div>
      </section>

      {/* 4. Footer navigation buttons row matching Early Years page structure */}
      <section className="py-12 bg-[#FAF9F6] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="w-full sm:w-auto text-left order-2 sm:order-1">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
              >
                &larr; Admissions Overview
              </Link>
            </div>

            <Link
              to="/"
              className="text-decoration-none inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-dark-orange text-white text-[13px] font-bold tracking-wider transition-all shadow-md active:scale-95 cursor-pointer w-full sm:w-auto order-1 sm:order-2"
            >
              Return to Homepage
              <ArrowRight size={15} />
            </Link>

            <div className="w-full sm:w-auto text-right order-3">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
              >
                Contact Us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full border border-neutral-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative text-center flex flex-col items-center"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-brand-orange transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-6">
                <CheckCircle2 size={38} className="stroke-[2]" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3">
                Inquiry Received!
              </h3>

              <p className="text-[#4B5563] text-sm md:text-base leading-relaxed font-medium mb-6 font-gill">
                Thank you for your inquiry. Our admissions counselor will
                contact you shortly to share details regarding admissions, fees,
                and the next steps for prospective students.
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-brand-orange hover:bg-brand-dark-orange text-white text-[14px] font-bold py-3.5 px-6 rounded-full transition-all duration-300 active:scale-98 shadow-sm"
              >
                Close Window
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnquireNow;
