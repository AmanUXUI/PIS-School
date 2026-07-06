import React, { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  RotateCw,
  CheckCircle2,
  AlertCircle,
  X,
} from "lucide-react";

// Cascading States and Cities
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

export const ContactUs: FC = () => {
  // Form States
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaBgSeed, setCaptchaBgSeed] = useState<
    { x1: number; y1: number; x2: number; y2: number }[]
  >([
    { x1: 20, y1: 15, x2: 45, y2: 30 },
    { x1: 55, y1: 10, x2: 80, y2: 35 },
  ]);

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
      {/* 1. Header Hero Panel with Breadcrumbs (consistent with existing pages) */}
      <section className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="https://i.postimg.cc/8z6zBbmm/DSC09241-JPG.jpg"
            alt="School Contact Background"
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
            <span className="text-white/50">Contact Us</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold">Get In Touch</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight tracking-tight text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl">
              We would love to hear from you. Reach out to us for any
              information or queries!
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Columns: Contact Info & Send Us Your Thoughts Form */}
      <section className="py-16 md:py-24 bg-[#FDFCFB] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Details & Social */}
            <div className="lg:col-span-5 flex flex-col space-y-10">
              {/* Header Title */}
              {/* <div className="flex flex-col items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-6 w-full">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    Get In Touch
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight">
                  Contact Us
                </h2>
              </div> */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight  text-brand-navy mb-4">
                  Enquire Now
                </h1>
                <p className="text-lg md:text-xl leading-relaxed font-light font-gill max-w-2xl text-[#4B5563]">
                  Take the first step towards a vibrant academic journey for
                  your child.
                </p>
              </motion.div>

              {/* Core Details with beautiful layout and icons */}
              <div className="space-y-8 text-brand-navy">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/5 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                    <Phone size={20} className="stroke-[1.75]" />
                  </div>
                  <div className="flex flex-col pt-1.5">
                    <strong className="text-base font-serif font-bold text-brand-navy mb-1 leading-none transition-colors duration-300 group-hover:text-brand-orange">
                      Call Us
                    </strong>
                    <a
                      href="tel:+918266954007"
                      className="text-[16px] leading-[24px] font-medium font-gill text-[#4B5563] hover:text-brand-orange transition-colors"
                    >
                      +91 82669 54007
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/5 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                    <Mail size={20} className="stroke-[1.75]" />
                  </div>
                  <div className="flex flex-col pt-1.5">
                    <strong className="text-base font-serif font-bold text-brand-navy mb-1 leading-none transition-colors duration-300 group-hover:text-brand-orange">
                      Email Address
                    </strong>
                    <a
                      href="mailto:info@pavnaintlschool.com"
                      className="text-[16px] leading-[24px] font-medium font-gill text-[#4B5563] hover:text-brand-orange transition-colors break-all"
                    >
                      info@pavnaintlschool.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/5 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                    <MapPin size={20} className="stroke-[1.75]" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <strong className="text-base font-serif font-bold text-brand-navy mb-1 leading-none transition-colors duration-300 group-hover:text-brand-orange">
                      Our Location
                    </strong>
                    <p className="text-[15px] leading-[24px] font-medium font-gill text-[#4B5563] max-w-md">
                      Pavna International School Near Teerthdham Mangalayatan
                      Hanuman Chowki, Agra Road Hathras 204216 (U.P.) India
                    </p>
                  </div>
                </div>
              </div>

              {/* Circular Social Buttons Row exactly as the image and prompt */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {[
                  {
                    name: "Facebook",
                    icon: "fab fa-facebook-f",
                    url: "https://www.facebook.com/pisaligarh",
                  },
                  {
                    name: "Instagram",
                    icon: "fab fa-instagram",
                    url: "https://www.instagram.com/pisaligarh/",
                  },
                  {
                    name: "Google",
                    icon: "fab fa-google",
                    url: "https://www.google.com/maps/place/Pavna+International+School/@27.7628999,78.0117693,13z/data=!4m6!3m5!1s0x3974986b184d8723:0xaad7d1ee64a38a56!8m2!3d27.7628999!4d78.087987!16s%2Fg%2F11bzspvwn7?entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D",
                  },
                  {
                    name: "Linkedin",
                    icon: "fab fa-linkedin-in",
                    url: "https://www.linkedin.com/company/pavna-international-school/",
                  },
                  {
                    name: "Twitter",
                    icon: "fab fa-twitter",
                    url: "https://x.com/pisaligarh",
                  },
                  {
                    name: "Tumblr",
                    icon: "fab fa-tumblr",
                    url: "https://www.tumblr.com/pisaligarh",
                  },
                  {
                    name: "Pinterest",
                    icon: "fab fa-pinterest-p",
                    url: "https://in.pinterest.com/pisaligarh/",
                  },
                  {
                    name: "Youtube",
                    icon: "fab fa-youtube",
                    url: "https://www.youtube.com/@pisaligarh",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-brand-navy/60 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    title={social.name}
                  >
                    <i className={`${social.icon} text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Send Us Your Thoughts Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-neutral-100/80 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none"></div>
              {/* Form Title */}
              <div className="flex flex-col items-start w-fit max-w-full mb-8">
                <div className="flex items-center gap-3 mb-6 w-full">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    Admission & General Enquiry
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight">
                  Send Us Your Thoughts
                </h2>
              </div>
              <div
                className="npf_wgts"
                data-height="520px"
                data-w="d190862d64d81dadfab9679fed72ae68"
              ></div>{" "}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Success Modal Backdrop & Card */}
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
                Enquiry Submitted!
              </h3>

              <p className="text-[#4B5563] text-sm md:text-base leading-relaxed font-medium mb-6 font-gill">
                Thank you! Your enquiry has been submitted. Our admissions
                counselor will contact you shortly to guide you with the next
                steps of your journey at Pavna International School.
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

export default ContactUs;
