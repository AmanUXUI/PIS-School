import React, { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  ClipboardList
} from 'lucide-react';

const STATES_CITIES_MAP: Record<string, string[]> = {
  "Uttar Pradesh": ["Hathras", "Aligarh", "Agra", "Noida", "Ghaziabad", "Lucknow", "Kanpur"],
  "Delhi": ["New Delhi", "Dwarka", "Rohini"],
  "Haryana": ["Gurgaon", "Faridabad", "Rohtak", "Sonipat"],
  "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane"],
  "Karnataka": ["Bangalore", "Mysore", "Mangalore"],
  "Other": ["Other"]
};

const ADMISSION_GRADES = [
  "Playgroup", "Nursery", "LKG", "UKG", 
  "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", 
  "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", 
  "Grade 11", "Grade 12"
];

const SCHOOLING_OPTIONS = [
  "Day Schooling",
  "Day Boarding",
  "Full Boarding"
];

const COUNTRY_CODES = [
  { code: "+91", label: "IND (+91)" },
  { code: "+1", label: "USA (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+65", label: "SGP (+65)" }
];

const EnquireNow: FC = () => {
  // Form States
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    state: "",
    city: "",
    countryCode: "+91",
    mobileNumber: "",
    emailAddress: "",
    admissionFor: "",
    schoolingOption: "",
    captchaInput: "",
    agreeToInfo: false
  });

  // Captcha State
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaBgSeed, setCaptchaBgSeed] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);

  // Validation / Feedback States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Generate Captcha Code
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
        y2: Math.floor(Math.random() * 20) + 15
      });
    }
    setCaptchaBgSeed(circles);
    setErrors(prev => ({ ...prev, captcha: "" }));
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Handle Input Changes
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }

    if (field === "state") {
      setFormData(prev => ({ ...prev, state: value as string, city: "" }));
    }
  };

  // Form Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Student Name is required";
    if (!formData.age.trim()) newErrors.age = "Student Age is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Enter a valid 10-digit mobile number";
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = "Enter a valid email address";
    }

    if (!formData.admissionFor) newErrors.admissionFor = "Admission grade is required";
    if (!formData.schoolingOption) newErrors.schoolingOption = "Schooling option is required";
    
    if (!formData.captchaInput.trim()) {
      newErrors.captcha = "Captcha is required";
    } else if (formData.captchaInput.trim().toLowerCase() !== captchaCode.toLowerCase()) {
      newErrors.captcha = "Invalid captcha code";
    }

    if (!formData.agreeToInfo) {
      newErrors.agreeToInfo = "You must agree to receive information";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccessModal(true);
        setFormData({
          name: "",
          age: "",
          state: "",
          city: "",
          countryCode: "+91",
          mobileNumber: "",
          emailAddress: "",
          admissionFor: "",
          schoolingOption: "",
          captchaInput: "",
          agreeToInfo: false
        });
        generateCaptcha();
      }, 1500);
    }
  };

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
              Take the first step towards a vibrant academic journey for your child.
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
                <h3 className="text-xl font-serif font-bold text-brand-navy">Inquiry Details</h3>
                <p className="text-xs text-brand-gray font-gill font-medium">Please fill in the details of the prospective student</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Student Name & Student Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-brand-navy tracking-wide uppercase">Student Name *</label>
                  <input 
                    type="text"
                    placeholder="Enter student name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`w-full px-5 py-3.5 bg-[#FAF9F6] border rounded-2xl text-[15px] font-gill font-medium text-brand-navy placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 ${
                      errors.name 
                        ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
                        : "border-neutral-200 focus:border-brand-orange focus:ring-brand-orange/10"
                    }`}
                  />
                  {errors.name && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.name}</span>}
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-brand-navy tracking-wide uppercase">Student Age *</label>
                  <input 
                    type="number"
                    placeholder="Enter student age"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    className={`w-full px-5 py-3.5 bg-[#FAF9F6] border rounded-2xl text-[15px] font-gill font-medium text-brand-navy placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 ${
                      errors.age 
                        ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
                        : "border-neutral-200 focus:border-brand-orange focus:ring-brand-orange/10"
                    }`}
                  />
                  {errors.age && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.age}</span>}
                </div>
              </div>

              {/* State & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-brand-navy tracking-wide uppercase">State *</label>
                  <div className="relative">
                    <select
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      className={`w-full px-5 py-3.5 bg-[#FAF9F6] border rounded-2xl text-[15px] font-gill font-medium text-brand-navy transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 appearance-none cursor-pointer ${
                        errors.state 
                          ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
                          : "border-neutral-200 focus:border-brand-orange focus:ring-brand-orange/10"
                      }`}
                    >
                      <option value="" disabled className="text-neutral-400">Select State</option>
                      {Object.keys(STATES_CITIES_MAP).map(st => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-navy">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.state && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.state}</span>}
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-brand-navy tracking-wide uppercase">City *</label>
                  <div className="relative">
                    <select
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      disabled={!formData.state}
                      className={`w-full px-5 py-3.5 bg-[#FAF9F6] border rounded-2xl text-[15px] font-gill font-medium text-brand-navy transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 appearance-none cursor-pointer disabled:bg-neutral-50 disabled:opacity-70 ${
                        errors.city 
                          ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
                          : "border-neutral-200 focus:border-brand-orange focus:ring-brand-orange/10"
                      }`}
                    >
                      <option value="" disabled className="text-neutral-400">Select City</option>
                      {formData.state && STATES_CITIES_MAP[formData.state]?.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-navy">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.city && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.city}</span>}
                </div>
              </div>

              {/* Mobile Number Container */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-brand-navy tracking-wide uppercase">Mobile Number *</label>
                <div className={`flex items-stretch rounded-2xl border overflow-hidden transition-all duration-300 ${
                  errors.mobileNumber 
                    ? "border-red-500 focus-within:ring-1 focus-within:ring-red-100 focus-within:border-red-500" 
                    : "border-neutral-200 focus-within:ring-1 focus-within:ring-brand-orange/10 focus-within:border-brand-orange"
                }`}>
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleInputChange("countryCode", e.target.value)}
                    className="px-4 bg-[#FAF9F6] border-r border-neutral-200 text-[15px] font-gill font-medium text-brand-navy focus:outline-none appearance-none cursor-pointer"
                  >
                    {COUNTRY_CODES.map(c => (
                      <option key={c.code} value={c.code}>{c.code}</option>
                    ))}
                  </select>
                  <input 
                    type="tel"
                    placeholder="Enter mobile number"
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                    className="flex-1 px-5 py-3.5 bg-[#FAF9F6] focus:bg-white text-[15px] font-gill font-medium text-brand-navy placeholder-neutral-400 focus:outline-none"
                  />
                </div>
                {errors.mobileNumber && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.mobileNumber}</span>}
              </div>

              {/* Email Address */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-brand-navy tracking-wide uppercase">Email Address *</label>
                <input 
                  type="email"
                  placeholder="Enter email address"
                  value={formData.emailAddress}
                  onChange={(e) => handleInputChange("emailAddress", e.target.value)}
                  className={`w-full px-5 py-3.5 bg-[#FAF9F6] border rounded-2xl text-[15px] font-gill font-medium text-brand-navy placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 ${
                    errors.emailAddress 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
                      : "border-neutral-200 focus:border-brand-orange focus:ring-brand-orange/10"
                  }`}
                />
                {errors.emailAddress && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.emailAddress}</span>}
              </div>

              {/* Grade of Admission & Schooling Option */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-brand-navy tracking-wide uppercase">Seeking Admission For *</label>
                  <div className="relative">
                    <select
                      value={formData.admissionFor}
                      onChange={(e) => handleInputChange("admissionFor", e.target.value)}
                      className={`w-full px-5 py-3.5 bg-[#FAF9F6] border rounded-2xl text-[15px] font-gill font-medium text-brand-navy transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 appearance-none cursor-pointer pr-10 ${
                        errors.admissionFor 
                          ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
                          : "border-neutral-200 focus:border-brand-orange focus:ring-brand-orange/10"
                      }`}
                    >
                      <option value="" disabled className="text-neutral-400">Select Grade</option>
                      {ADMISSION_GRADES.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-navy">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.admissionFor && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.admissionFor}</span>}
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-brand-navy tracking-wide uppercase">Schooling Option *</label>
                  <div className="relative">
                    <select
                      value={formData.schoolingOption}
                      onChange={(e) => handleInputChange("schoolingOption", e.target.value)}
                      className={`w-full px-5 py-3.5 bg-[#FAF9F6] border rounded-2xl text-[15px] font-gill font-medium text-brand-navy transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 appearance-none cursor-pointer pr-10 ${
                        errors.schoolingOption 
                          ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
                          : "border-neutral-200 focus:border-brand-orange focus:ring-brand-orange/10"
                      }`}
                    >
                      <option value="" disabled className="text-neutral-400">Select Schooling Option</option>
                      {SCHOOLING_OPTIONS.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-navy">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.schoolingOption && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.schoolingOption}</span>}
                </div>
              </div>

              {/* Captcha display & input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-brand-navy tracking-wide uppercase">Verification Code</label>
                  <div className="relative flex items-center justify-between bg-[#FAF9F6] border border-neutral-200 rounded-2xl px-5 py-2.5 h-[54px] select-none overflow-hidden shadow-sm">
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        {captchaBgSeed.map((circle, idx) => (
                          <circle 
                            key={idx}
                            cx={circle.x1 * 2} 
                            cy={circle.y1 * 1.5} 
                            r={circle.x2 / 2} 
                            fill={idx % 2 === 0 ? "#F48120" : "#00B7DD"}
                          />
                        ))}
                      </svg>
                    </div>

                    <span 
                      className="text-xl md:text-2xl tracking-widest font-mono font-bold text-brand-navy relative z-10 flex space-x-1"
                      style={{ 
                        fontStyle: 'italic', 
                        textDecoration: 'line-through',
                        textDecorationColor: '#F48120'
                      }}
                    >
                      {captchaCode}
                    </span>

                    <button 
                      type="button"
                      onClick={generateCaptcha}
                      className="p-1 text-brand-navy/60 hover:text-brand-orange transition-colors duration-200 focus:outline-none relative z-10 group"
                      title="Refresh Captcha"
                    >
                      <RotateCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold text-brand-navy tracking-wide uppercase">Enter Captcha *</label>
                  <input 
                    type="text"
                    placeholder="Enter verification code"
                    value={formData.captchaInput}
                    onChange={(e) => handleInputChange("captchaInput", e.target.value)}
                    className={`w-full px-5 py-3.5 bg-[#FAF9F6] border rounded-2xl text-[15px] font-gill font-medium text-brand-navy placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 ${
                      errors.captcha 
                        ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
                        : "border-neutral-200 focus:border-brand-orange focus:ring-brand-orange/10"
                    }`}
                  />
                  {errors.captcha && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.captcha}</span>}
                </div>
              </div>

              {/* Information Agreement Checkbox */}
              <div className="flex flex-col space-y-1.5">
                <label className="flex items-start space-x-3 text-sm font-medium text-brand-black/90 cursor-pointer pt-2 select-none font-gill">
                  <input 
                    type="checkbox"
                    checked={formData.agreeToInfo}
                    onChange={(e) => handleInputChange("agreeToInfo", e.target.checked)}
                    className="mt-1 w-4.5 h-4.5 text-brand-orange focus:ring-brand-orange border-neutral-300 rounded accent-brand-orange cursor-pointer"
                  />
                  <span className="text-[#4B5563] text-[14px] leading-relaxed font-medium">
                    I agree to receive information regarding my submitted enquiry on <strong className="text-brand-navy font-bold">Pavna International School*</strong>
                  </span>
                </label>
                {errors.agreeToInfo && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.agreeToInfo}</span>}
              </div>

              {/* SUBMIT Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-orange hover:bg-brand-dark-orange text-white text-[13px] font-bold tracking-wider uppercase px-12 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>SUBMIT ENQUIRY</span>
                  )}
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      </section>

      {/* 4. Footer navigation buttons row matching Early Years page structure */}
      <section className="py-12 bg-[#FAF9F6] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <div className="w-full sm:w-auto text-left order-2 sm:order-1">
              <a 
                href="#admissions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
              >
                &larr; Admissions Overview
              </a>
            </div>

            <button 
              onClick={() => window.location.hash = ''} 
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-dark-orange text-white text-[13px] font-bold tracking-wider transition-all shadow-md active:scale-95 cursor-pointer w-full sm:w-auto order-1 sm:order-2"
            >
              Return to Homepage
              <ArrowRight size={15} />
            </button>

            <div className="w-full sm:w-auto text-right order-3">
              <a 
                href="#contact-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-sans"
              >
                Contact Us &rarr;
              </a>
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
                Thank you for your inquiry. Our admissions counselor will contact you shortly to share details regarding admissions, fees, and the next steps for prospective students.
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
