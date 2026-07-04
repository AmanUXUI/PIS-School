import { FC, useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Clock,
  MapPin,
  Mail,
  Phone,
  RotateCw,
  Sparkles,
  BookOpen,
  Brain,
  ShieldCheck,
  Smile,
  FileText,
  UploadCloud,
  CheckCircle2,
  X
} from 'lucide-react';

const Careers: FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    message: "",
    address: "",
    resumeFile: null as File | null,
    captchaInput: ""
  });

  const [fileName, setFileName] = useState("No file chosen");

  // Captcha State
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaBgSeed, setCaptchaBgSeed] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);

  // Feedback States
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: "File size exceeds 5MB limit" }));
        setFileName("No file chosen");
        setFormData(prev => ({ ...prev, resumeFile: null }));
        return;
      }
      const fileExt = file.name.split('.').pop()?.toLowerCase();
      if (fileExt !== 'pdf' && fileExt !== 'doc' && fileExt !== 'docx') {
        setErrors(prev => ({ ...prev, resume: "Only PDF and DOC formats are supported" }));
        setFileName("No file chosen");
        setFormData(prev => ({ ...prev, resumeFile: null }));
        return;
      }

      setFileName(file.name);
      setFormData(prev => ({ ...prev, resumeFile: file }));
      setErrors(prev => ({ ...prev, resume: "" }));
    } else {
      setFileName("No file chosen");
      setFormData(prev => ({ ...prev, resumeFile: null }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?\d{10,14}$/.test(formData.phone.trim().replace(/[\s-()]/g, ""))) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = "Job Title is required";
    }

    if (!formData.resumeFile) {
      newErrors.resume = "Please upload your resume";
    }

    if (!formData.captchaInput.trim()) {
      newErrors.captcha = "Captcha is required";
    } else if (formData.captchaInput.trim().toLowerCase() !== captchaCode.toLowerCase()) {
      newErrors.captcha = "Invalid captcha code";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccessModal(true);
        // Reset Form
        setFormData({
          name: "",
          email: "",
          phone: "",
          jobTitle: "",
          message: "",
          address: "",
          resumeFile: null,
          captchaInput: ""
        });
        setFileName("No file chosen");
        generateCaptcha();
      }, 1500);
    }
  };

  return (
    <div id="careers-page-container" className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      
      {/* 1. Header Hero Panel with Breadcrumbs (consistent with Early Years) */}
      <section id="careers-hero-section" className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img 
            src="/src/assets/images/school_robotics_teacher_lab_1780940479915.png" 
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
            <span className="text-white/50">Join Us</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold">Careers</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-4">
              Work With Us
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl">
              Pavna International School
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Welcome Intro Section (consistent with Early Years: Childhood Development) */}
      <section id="careers-intro-section" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex flex-col items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-6 w-full">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    Pavna International School
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-6">
                  Your Journey to Build the Future of India Starts Here!
                </h2>
              </div>
              
              <div className="text-[#4B5563] text-[16px] sm:text-[18px] leading-[28px] font-medium font-gill space-y-6">
                <p>
                  Welcome to Pavna International School’s career page. Here you can view our current vacancies and can also find all of the information you need about working for one of the seasoned groups running multiple education institutions.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-100 group">
                <img 
                  src="https://i.postimg.cc/DzXsyNw5/DSC06204-JPG-(1).jpg" 
                  alt="Pavna International School Campus Learning" 
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Form and Contact Details Section (consistent with Early Years / Admissions inputs) */}
      <section id="careers-form-section" className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy mb-4">
                Submit Your Application
              </h3>
              <p className="text-[#4B5563] text-sm sm:text-base font-gill font-medium">
                Please fill in the form below carefully. Our HR team will evaluate your profile and reach out to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
              
              {/* Name */}
              <div className="flex flex-col space-y-2">
                <label className="text-[14px] font-serif font-bold text-brand-navy">
                  Name
                </label>
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

              {/* Email */}
              <div className="flex flex-col space-y-2">
                <label className="text-[14px] font-serif font-bold text-brand-navy">
                  Email
                </label>
                <input 
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full px-5 py-3.5 bg-[#FAF9F6] border rounded-2xl text-[15px] font-gill font-medium text-brand-navy placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 ${
                    errors.email 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
                      : "border-neutral-200 focus:border-brand-orange focus:ring-brand-orange/10"
                  }`}
                />
                {errors.email && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.email}</span>}
              </div>

              {/* Phone */}
              <div className="flex flex-col space-y-2">
                <label className="text-[14px] font-serif font-bold text-brand-navy">
                  Phone
                </label>
                <input 
                  type="tel"
                  placeholder="Phone *"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`w-full px-5 py-3.5 bg-[#FAF9F6] border rounded-2xl text-[15px] font-gill font-medium text-brand-navy placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 ${
                    errors.phone 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
                      : "border-neutral-200 focus:border-brand-orange focus:ring-brand-orange/10"
                  }`}
                />
                {errors.phone && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.phone}</span>}
              </div>

              {/* Job Title */}
              <div className="flex flex-col space-y-2">
                <label className="text-[14px] font-serif font-bold text-brand-navy">
                  Job Title
                </label>
                <input 
                  type="text"
                  placeholder="Job Title"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                  className={`w-full px-5 py-3.5 bg-[#FAF9F6] border rounded-2xl text-[15px] font-gill font-medium text-brand-navy placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 ${
                    errors.jobTitle 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-100" 
                      : "border-neutral-200 focus:border-brand-orange focus:ring-brand-orange/10"
                  }`}
                />
                {errors.jobTitle && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.jobTitle}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label className="text-[14px] font-serif font-bold text-brand-navy">
                  Message
                </label>
                <textarea 
                  rows={4}
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full px-5 py-3.5 bg-[#FAF9F6] border border-neutral-200 rounded-2xl text-[15px] font-gill font-medium text-brand-navy placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 focus:border-brand-orange focus:ring-brand-orange/10"
                />
              </div>

              {/* Address */}
              <div className="flex flex-col space-y-2">
                <label className="text-[14px] font-serif font-bold text-brand-navy">
                  Address
                </label>
                <textarea 
                  rows={3}
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="w-full px-5 py-3.5 bg-[#FAF9F6] border border-neutral-200 rounded-2xl text-[15px] font-gill font-medium text-brand-navy placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:bg-white focus:ring-1 focus:border-brand-orange focus:ring-brand-orange/10"
                />
              </div>

              {/* Resume File Upload */}
              <div className="flex flex-col space-y-2">
                <label className="text-[14px] font-serif font-bold text-brand-navy">
                  Resume
                </label>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 bg-[#FAF9F6] border border-dashed border-neutral-200 rounded-2xl transition-all duration-300 hover:border-brand-orange/40">
                  <label className="cursor-pointer bg-brand-navy hover:bg-brand-navy/90 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-all duration-300 shrink-0 inline-flex items-center gap-2 shadow-sm hover:shadow-md active:scale-98">
                    <UploadCloud size={16} />
                    <span>Choose File</span>
                    <input 
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-medium text-brand-navy truncate font-gill">
                      {fileName}
                    </p>
                    <p className="text-[12px] text-neutral-400 mt-0.5 font-gill leading-none">
                      Max File Upload Size: 5MB | File Type: pdf, doc
                    </p>
                  </div>
                </div>
                {errors.resume && <span className="text-red-500 text-xs font-semibold pl-1 font-gill">{errors.resume}</span>}
              </div>

              {/* Interactive Captcha Verification for SPAM protection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="relative flex items-center justify-between bg-[#FAF9F6] border border-neutral-200 rounded-2xl px-5 py-2.5 h-[54px] select-none overflow-hidden shadow-sm">
                  <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      {captchaBgSeed.map((circle, idx) => (
                        <ellipse
                          key={idx}
                          cx={circle.x1 * 4}
                          cy={circle.y1 * 1.5}
                          rx={circle.x2}
                          ry={circle.y2}
                          fill={idx % 2 === 0 ? "#F48120" : "#201A5B"}
                        />
                      ))}
                    </svg>
                  </div>

                  <span className="font-mono text-xl font-bold tracking-widest text-brand-navy select-none line-through decoration-brand-orange/40 filter blur-[0.25px] relative z-10 pt-1">
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

                <div className="flex flex-col space-y-1">
                  <input 
                    type="text"
                    placeholder="Captcha *"
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

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-orange hover:bg-brand-dark-orange text-white text-[13px] font-sans font-bold uppercase tracking-widest py-4 px-16 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <RotateCw size={16} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

      {/* Success Modal Container */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
            />
            
            {/* Modal Body */}
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full border border-neutral-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative text-center flex flex-col items-center z-10"
            >
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-brand-orange transition-colors duration-200"
              >
                <X size={20} />
              </button>

              <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
                <CheckCircle2 size={36} className="stroke-[1.5]" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3">
                Application Submitted!
              </h3>
              
              <p className="text-[#4B5563] text-sm md:text-base leading-relaxed font-medium mb-6 font-gill">
                Thank you for applying to Pavna International School. Your application details and resume have been successfully recorded. Our HR team will evaluate your profile and contact you soon.
              </p>

              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-brand-orange hover:bg-brand-dark-orange text-white text-[14px] font-bold py-3.5 px-6 rounded-full transition-all duration-300 active:scale-98 shadow-sm"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Careers;
