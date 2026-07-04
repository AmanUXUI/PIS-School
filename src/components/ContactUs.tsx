import React, { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  RotateCw, 
  CheckCircle2, 
  AlertCircle,
  X
} from 'lucide-react';

// Cascading States and Cities
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

export const ContactUs: FC = () => {
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
  const [captchaBgSeed, setCaptchaBgSeed] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([
    { x1: 20, y1: 15, x2: 45, y2: 30 },
    { x1: 55, y1: 10, x2: 80, y2: 35 }
  ]);

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

    // Generate random background visual circles
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
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }

    // Cascading logic: clear city if state changes
    if (field === "state") {
      setFormData(prev => ({ ...prev, state: value as string, city: "" }));
    }
  };

  // Form Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.age.trim()) newErrors.age = "Age is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    
    // Mobile Validation
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Enter a valid 10-digit mobile number";
    }

    // Email Validation
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = "Enter a valid email address";
    }

    if (!formData.admissionFor) newErrors.admissionFor = "Admission grade is required";
    if (!formData.schoolingOption) newErrors.schoolingOption = "Schooling option is required";
    
    // Captcha Validation
    if (!formData.captchaInput.trim()) {
      newErrors.captcha = "Captcha is required";
    } else if (formData.captchaInput.trim().toLowerCase() !== captchaCode.toLowerCase()) {
      newErrors.captcha = "Invalid captcha code";
    }

    // Agreement Validation
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
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccessModal(true);
        // Reset form
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
            <span className="hover:text-brand-orange transition-colors cursor-pointer" onClick={() => window.location.hash = ''}>Home</span>
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
              We would love to hear from you. Reach out to us for any information or queries!
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
              <div className="flex flex-col items-start w-fit max-w-full">
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
              </div>

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
                      Pavna International School Near Teerthdham Mangalayatan Hanuman Chowki, Agra Road Hathras 204216 (U.P.) India
                    </p>
                  </div>
                </div>
              </div>

              {/* Circular Social Buttons Row exactly as the image and prompt */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {[
                  { name: "Facebook", icon: "fab fa-facebook-f", url: "https://www.facebook.com/pisaligarh" },
                  { name: "Instagram", icon: "fab fa-instagram", url: "https://www.instagram.com/pisaligarh/" },
                  { name: "Google", icon: "fab fa-google", url: "https://www.google.com/maps/place/Pavna+International+School/@27.7628999,78.0117693,13z/data=!4m6!3m5!1s0x3974986b184d8723:0xaad7d1ee64a38a56!8m2!3d27.7628999!4d78.087987!16s%2Fg%2F11bzspvwn7?entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D" },
                  { name: "Linkedin", icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/company/pavna-international-school/" },
                  { name: "Twitter", icon: "fab fa-twitter", url: "https://x.com/pisaligarh" },
                  { name: "Tumblr", icon: "fab fa-tumblr", url: "https://www.tumblr.com/pisaligarh" },
                  { name: "Pinterest", icon: "fab fa-pinterest-p", url: "https://in.pinterest.com/pisaligarh/" },
                  { name: "Youtube", icon: "fab fa-youtube", url: "https://www.youtube.com/@pisaligarh" }
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

              {/* Interactive Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Name & Age */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1">
                    <input 
                      type="text"
                      placeholder="Name *"
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

                  <div className="flex flex-col space-y-1">
                    <input 
                      type="number"
                      placeholder="Age *"
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

                {/* Row 2: State & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1">
                    <select
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      className={`w-full px-5 py-3.5 bg-[#FAF9F6] border rounded-2xl text-[15px] font-gill font-medium text-brand-navy transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 appearance-none cursor-pointer ${
                        errors.state 
                          ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
                          : "border-neutral-200 focus:border-brand-orange focus:ring-brand-orange/10"
                      }`}
                    >
                      <option value="" disabled className="text-neutral-400">State *</option>
                      {Object.keys(STATES_CITIES_MAP).map(st => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                    {errors.state && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.state}</span>}
                  </div>

                  <div className="flex flex-col space-y-1">
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
                      <option value="" disabled className="text-neutral-400">City *</option>
                      {formData.state && STATES_CITIES_MAP[formData.state]?.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.city && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.city}</span>}
                  </div>
                </div>

                {/* Row 3: Mobile Country Code Prefix & Mobile Number Input */}
                <div className="flex flex-col space-y-1">
                  <div className={`flex items-stretch rounded-2xl border overflow-hidden transition-all duration-300 ${
                    errors.mobileNumber 
                      ? "border-red-500 focus-within:ring-1 focus-within:ring-red-100 focus-within:border-red-500" 
                      : "border-neutral-200 focus-within:ring-1 focus-within:ring-brand-orange/10 focus-within:border-brand-orange"
                  }`}>
                    
                    {/* Country code selector */}
                    <select
                      value={formData.countryCode}
                      onChange={(e) => handleInputChange("countryCode", e.target.value)}
                      className="px-4 bg-[#FAF9F6] border-r border-neutral-200 text-[15px] font-gill font-medium text-brand-navy focus:outline-none appearance-none cursor-pointer"
                    >
                      {COUNTRY_CODES.map(c => (
                        <option key={c.code} value={c.code}>{c.code}</option>
                      ))}
                    </select>

                    {/* Number input */}
                    <input 
                      type="tel"
                      placeholder="Mobile Number *"
                      value={formData.mobileNumber}
                      onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                      className="flex-1 px-5 py-3.5 bg-[#FAF9F6] focus:bg-white text-[15px] font-gill font-medium text-brand-navy placeholder-neutral-400 focus:outline-none"
                    />
                  </div>
                  {errors.mobileNumber && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.mobileNumber}</span>}
                </div>

                {/* Row 4: Email Address */}
                <div className="flex flex-col space-y-1">
                  <input 
                    type="email"
                    placeholder="Email Address *"
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

                {/* Row 5: Seeking Admission For & Schooling Option */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1">
                    <select
                      value={formData.admissionFor}
                      onChange={(e) => handleInputChange("admissionFor", e.target.value)}
                      className={`w-full px-5 py-3.5 bg-[#FAF9F6] border rounded-2xl text-[15px] font-gill font-medium text-brand-navy transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 appearance-none cursor-pointer pr-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%23201A5B%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-[size:1.25rem_1.25rem] bg-no-repeat ${
                        errors.admissionFor 
                          ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
                          : "border-neutral-200 focus:border-brand-orange focus:ring-brand-orange/10"
                      }`}
                    >
                      <option value="" disabled className="text-neutral-400">Seeking Admission For *</option>
                      {ADMISSION_GRADES.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                    {errors.admissionFor && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.admissionFor}</span>}
                  </div>

                  <div className="flex flex-col space-y-1">
                    <select
                      value={formData.schoolingOption}
                      onChange={(e) => handleInputChange("schoolingOption", e.target.value)}
                      className={`w-full px-5 py-3.5 bg-[#FAF9F6] border rounded-2xl text-[15px] font-gill font-medium text-brand-navy transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 appearance-none cursor-pointer pr-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%23201A5B%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-[size:1.25rem_1.25rem] bg-no-repeat ${
                        errors.schoolingOption 
                          ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
                          : "border-neutral-200 focus:border-brand-orange focus:ring-brand-orange/10"
                      }`}
                    >
                      <option value="" disabled className="text-neutral-400">Selecting Schooling Option *</option>
                      {SCHOOLING_OPTIONS.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.schoolingOption && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.schoolingOption}</span>}
                  </div>
                </div>

                {/* Row 6: Captcha Generator Box & Input */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Captcha display with random styling */}
                  <div className="relative flex items-center justify-between bg-[#FAF9F6] border border-neutral-200 rounded-2xl px-5 py-2.5 h-[54px] select-none overflow-hidden shadow-sm">
                    
                    {/* SVG background with colorful shapes matching the image style */}
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

                    {/* Generated Captcha characters */}
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

                    {/* Refresh captcha */}
                    <button 
                      type="button"
                      onClick={generateCaptcha}
                      className="p-1 text-brand-navy/60 hover:text-brand-orange transition-colors duration-200 focus:outline-none relative z-10 group"
                      title="Refresh Captcha"
                    >
                      <RotateCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                    </button>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <input 
                      type="text"
                      placeholder="Captcha"
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

                {/* Row 7: Information Agreement Checkbox */}
                <div className="flex flex-col space-y-1">
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

                {/* Row 8: SUBMIT button centered */}
                <div className="flex justify-center pt-4">
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
                Thank you! Your enquiry has been submitted. Our admissions counselor will contact you shortly to guide you with the next steps of your journey at Pavna International School.
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
