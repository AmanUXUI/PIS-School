import React, { FC } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Navigation, ExternalLink } from "lucide-react";

export const GetInTouch: FC = () => {
  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      {/* 1. Header Hero Panel with Breadcrumbs (consistent with existing pages) */}
      <section className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="/images/DSC09241.webp"
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

      {/* 2. Main Contact Info */}
      <section className="py-16 md:py-24 bg-[#FDFCFB] relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-100/80 shadow-md hover:shadow-lg transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header Title */}
            <div className="flex flex-col items-center text-center w-full mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-brand-orange"></div>
                <span className="text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                  Get In Touch
                </span>
                <div className="w-12 h-[2px] bg-brand-orange"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-navy leading-tight tracking-tight">
                Contact Us
              </h2>
            </div>

            {/* Core Details with beautiful layout and icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-brand-navy mb-12">
              <div className="flex flex-col items-center text-center p-6 bg-[#FAF9F6] rounded-2xl border border-neutral-100/50 group hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-brand-orange/5 flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-sm">
                  <Phone size={22} className="stroke-[1.75]" />
                </div>
                <strong className="text-lg font-serif font-bold text-brand-navy mb-2 transition-colors duration-300 group-hover:text-brand-orange">
                  Call Us
                </strong>
                <a
                  href="tel:+918266954007"
                  className="text-[16px] font-medium font-gill text-[#4B5563] hover:text-brand-orange transition-colors"
                >
                  +91 82669 54007
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-[#FAF9F6] rounded-2xl border border-neutral-100/50 group hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-brand-orange/5 flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-sm">
                  <Mail size={22} className="stroke-[1.75]" />
                </div>
                <strong className="text-lg font-serif font-bold text-brand-navy mb-2 transition-colors duration-300 group-hover:text-brand-orange">
                  Email Address
                </strong>
                <a
                  href="mailto:info@pavnaintlschool.com"
                  className="text-[16px] font-medium font-gill text-[#4B5563] hover:text-brand-orange transition-colors break-all"
                >
                  info@pavnaintlschool.com
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-[#FAF9F6] rounded-2xl border border-neutral-100/50 group hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-brand-orange/5 flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-sm">
                  <MapPin size={22} className="stroke-[1.75]" />
                </div>
                <strong className="text-lg font-serif font-bold text-brand-navy mb-2 transition-colors duration-300 group-hover:text-brand-orange">
                  Our Location
                </strong>
                <p className="text-[14px] leading-relaxed font-medium font-gill text-[#4B5563]">
                  <strong className="text-brand-navy block font-bold mb-1">
                    Pavna International School, Sasni
                  </strong>
                  Aligarh–Agra Highway, Sasni, Hathras, UP – 204216
                </p>
              </div>
            </div>

            {/* Circular Social Buttons Row centered */}
            <div className="flex flex-col items-center justify-center border-t border-neutral-100 pt-8">
              <span className="text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-navy/50 mb-4">
                Connect With Us On Socials
              </span>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  {
                    name: "Facebook",
                    icon: "fab fa-facebook-f",
                    url: "https://www.facebook.com/share/184LZ5d13u/",
                  },
                  {
                    name: "Instagram",
                    icon: "fab fa-instagram",
                    url: "https://www.instagram.com/pisaligarh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                  },
                  {
                    name: "Linkedin",
                    icon: "fab fa-linkedin-in",
                    url: "https://www.linkedin.com/company/pavna-international-school/",
                  },
                  {
                    name: "Youtube",
                    icon: "fab fa-youtube",
                    url: "https://youtube.com/@pisaligarh?si=Mf4qM92ykFoa6cfr",
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
          </div>
        </div>
      </section>

      {/* 3. Interactive Map Section */}
      <section className="pb-24 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden p-3 sm:p-5 relative group">
            {/* Embedded Interactive Map */}
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden bg-neutral-100 border border-neutral-100">
              <iframe
                src="https://maps.google.com/maps?q=Pavna%20International%20School,%20Sasni,%20Uttar%20Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="Google Maps Location for Pavna International School, Sasni"
              />
            </div>

            {/* Elegant directions floating panel */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6 px-4 py-2">
              <div className="text-left">
                <h3 className="text-lg font-serif font-bold text-brand-navy mb-1 flex items-center gap-2">
                  <Navigation
                    size={18}
                    className="text-brand-orange animate-pulse"
                  />
                  Find Our Sasni Campus
                </h3>
                <p className="text-sm text-[#4B5563] font-medium font-gill">
                  Get directions and see live navigation for our Sasni Campus on
                  Google Maps.
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/LZP3Kx8fB2rtXqCE7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-orange hover:bg-brand-dark-orange text-white text-[13px] font-bold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 cursor-pointer font-gill"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink size={14} className="stroke-[2]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
