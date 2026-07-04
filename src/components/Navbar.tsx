import { useState, useEffect } from 'react';
import { CONTENT } from '../constants';
import { Menu, X, ChevronDown, User, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const getItemDescription = (name: string): string => {
  const descriptions: Record<string, string> = {
    "About PIS": "Our vision, mission & heritage",
    "Academic Team": "Meet our dedicated educators",
    "Chairman's Message": "Leadership perspective & foresight",
    "Principal's Message": "Welcome from our Head of School",
    "Minds Behind PIS": "Advisors steering excellence",
    "Early Years (Age 3 To 5 Years)": "Play-based inquiry & foundation",
    "Primary (Age 5 To 11 Years)": "Core skills & creative learning",
    "Lower Secondary (Age 11 to 14 Years)": "Structured disciplines & active discovery",
    "Upper Secondary - IGCSE (Age 14 To 16 Years)": "Cambridge qualifications for 14-16",
    "Advance - AS & A Level (Age 16 To 18 Years)": "Pre-university international standard",
    "Let's Talk": "Connect directly with our advisors",
    "Careers": "Grow your teaching career with us",
    "Enquire Now": "Start your admissions journey today"
  };
  return descriptions[name] || "Learn more about our programs";
};

const itemMediaMap: Record<string, { image: string; title: string; subtitle: string }> = {
  // Academics
  "Early Years (Age 3 To 5 Years)": {
    image: "https://i.postimg.cc/G27wmxSp/Early-Years.jpg",
    title: "Early Years",
    subtitle: "Play-based inquiry & foundation"
  },
  "Primary (Age 5 To 11 Years)": {
    image: "https://i.postimg.cc/j5g0S4k5/Primary.jpg",
    title: "Primary Years",
    subtitle: "Core skills & creative learning"
  },
  "Lower Secondary (Age 11 to 14 Years)": {
    image: "https://i.postimg.cc/XJHSYkDq/Low-Secondary.jpg",
    title: "Lower Secondary",
    subtitle: "Structured disciplines & active discovery"
  },
  "Upper Secondary - IGCSE (Age 14 To 16 Years)": {
    image: "https://i.postimg.cc/mDXfgy6L/Upper-Secondary.jpg",
    title: "Upper Secondary",
    subtitle: "Cambridge qualifications for 14-16"
  },
  "Advance - AS & A Level (Age 16 To 18 Years)": {
    image: "https://i.postimg.cc/QtxZDymR/Advance.jpg",
    title: "Advance Years",
    subtitle: "Pre-university international standard"
  },
  
  // Contact Us
  "Let's Talk": {
    image: "https://i.postimg.cc/13RChW47/DSC08428-JPG.jpg",
    title: "Let's Talk",
    subtitle: "Connect directly with advisors"
  },
  "Careers": {
    image: "https://i.postimg.cc/MpZP2sXP/DSC08748-JPG.jpg",
    title: "Careers",
    subtitle: "Grow your teaching career with us"
  },
  "Enquire Now": {
    image: "https://i.postimg.cc/qMqw1NY4/DSC08559-JPG.jpg",
    title: "Enquire Now",
    subtitle: "Start your admissions journey"
  }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const isLinkActive = (link: typeof CONTENT.navLinks[0]) => {
    if (link.href === currentHash && link.href !== "#") return true;
    if (link.groups) {
      return link.groups.some(group => 
        group.items.some(item => item.href === currentHash)
      );
    }
    return false;
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-12 border-b border-black/5",
        isScrolled ? "bg-white shadow-sm py-3" : "bg-white py-4"
      )}
      id="navbar"
      onMouseLeave={() => {
        setActiveDropdown(null);
        setHoveredItem(null);
      }}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <img 
            src="https://i.postimg.cc/v84rD5Yc/cropped-PS-INTERNATIONAL-1-1-scaled-1-2048x684.jpg" 
            alt="Pavna School Logo" 
            className="h-10 md:h-14 w-auto object-contain cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7 h-full">
          {CONTENT.navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group h-full flex items-center"
              onMouseEnter={() => {
                if (link.hasDropdown) {
                  setActiveDropdown(link.name);
                  setHoveredItem(null);
                } else {
                  setActiveDropdown(null);
                  setHoveredItem(null);
                }
              }}
            >
              <a 
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  "flex items-center gap-1 transition-all",
                  link.name === "Apply Online"
                    ? "bg-brand-orange text-white hover:bg-brand-dark-orange py-2 px-5 rounded-[4px] font-bold text-[13px] hover:shadow-md"
                    : link.name === "Pay Fees Online"
                      ? "border border-brand-orange text-brand-orange hover:bg-brand-orange/5 py-[7px] px-5 rounded-[4px] font-bold text-[13px]"
                      : cn(
                          "text-[12px] font-bold transition-colors py-4",
                          (activeDropdown === link.name || isLinkActive(link)) ? "text-brand-orange" : "text-brand-navy hover:text-brand-orange"
                        )
                )}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={12} className={cn("transition-transform", activeDropdown === link.name ? "rotate-180" : "")} />}
              </a>

              {/* Desktop Dropdown Content */}
              <AnimatePresence>
                {activeDropdown === link.name && link.hasDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 bg-white border border-neutral-100/90 shadow-[0_20px_50px_rgba(32,26,91,0.12)] hidden lg:flex rounded-2xl overflow-hidden mt-1 p-2"
                    style={{ 
                      width: 'max-content',
                    }}
                  >
                    <div className="flex items-stretch gap-2">
                      {/* Left Side: Navigation Links & Subheadings */}
                      <div className="p-5 flex-1" style={{ minWidth: link.groups && link.groups.length > 1 ? '480px' : '280px' }}>
                        <div className="grid gap-6" style={{ gridTemplateColumns: link.groups && link.groups.length > 1 ? '1fr 1fr' : '1fr' }}>
                          {link.groups?.map((group) => (
                            <div key={group.title} className="flex flex-col gap-3">
                              <h5 className="text-[10px] font-sans font-bold tracking-[2px] uppercase text-brand-orange/90 px-3">
                                {group.title}
                              </h5>
                              <div className="flex flex-col gap-1">
                                {group.items.map((item) => (
                                  <a 
                                    key={item.name} 
                                    href={item.href} 
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    className={cn(
                                      "text-[13px] font-bold transition-all duration-300 py-2.5 px-3.5 rounded-xl hover:bg-[#FAF9F5]/70 flex items-center justify-between group/link",
                                      item.href === currentHash ? "text-brand-orange bg-[#FAF9F5]/70" : "text-brand-navy"
                                    )}
                                  >
                                    <div className="flex flex-col text-left">
                                      <span className="leading-tight transition-colors duration-300">{item.name}</span>
                                      <span className="text-[10.5px] font-medium text-neutral-400 mt-0.5 group-hover/link:text-brand-orange/60 transition-colors">
                                        {getItemDescription(item.name)}
                                      </span>
                                    </div>
                                    <div className="w-5 h-5 rounded-full bg-brand-orange/0 group-hover/link:bg-brand-orange/10 flex items-center justify-center transition-all">
                                      <ArrowRight size={11} className="text-brand-orange opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Side: Featured Rich Media Block */}
                      {link.image && (() => {
                        const hoveredData = hoveredItem ? itemMediaMap[hoveredItem] : null;
                        const currentImage = hoveredData?.image || link.image;
                        const currentTitle = hoveredData?.title || (link.name === "Curriculum" ? "Shaping Greatness" : link.name === "About" ? "BeYourself Motto" : "Empowering Minds");
                        const currentSubtitle = hoveredData?.subtitle || "Pavna International";

                        return (
                          <div className="w-[210px] shrink-0 rounded-xl overflow-hidden relative m-1 self-stretch min-h-[220px] flex flex-col justify-end p-5 group/image bg-brand-navy">
                            <motion.img 
                              key={currentImage}
                              initial={{ opacity: 0, scale: 1.08 }}
                              animate={{ opacity: 0.75, scale: 1.05 }}
                              transition={{ duration: 0.35, ease: "easeOut" }}
                              src={currentImage} 
                              alt={currentTitle} 
                              className="absolute inset-0 w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#201A5B] via-[#201A5B]/50 to-transparent z-10" />
                            <div className="absolute inset-0 bg-brand-orange/5 mix-blend-color z-10" />
                            
                            <div className="relative z-20 flex flex-col items-start text-left">
                              <span className="bg-white/10 backdrop-blur-md text-white text-[9px] uppercase tracking-[2px] font-extrabold px-2.5 py-1 rounded-full border border-white/20 mb-2 transition-all">
                                {hoveredData ? "Program" : link.name}
                              </span>
                              <h4 className="text-white text-[13.5px] font-sans font-bold leading-tight tracking-tight mb-0.5">
                                {currentTitle}
                              </h4>
                              <p className="text-white/60 text-[9.5px] font-medium transition-all">
                                {currentSubtitle}
                              </p>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Action Button removed */}

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-brand-navy" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>



      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-brand-black border-t border-gray-100 shadow-xl p-6 lg:hidden max-h-[80vh] overflow-y-auto">
          {CONTENT.navLinks.map((link) => {
            if (link.name === "Apply Online") {
              return (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-brand-orange text-white px-5 py-3 rounded-[4px] font-bold text-center mt-4 text-sm shadow-sm"
                >
                  {link.name}
                </a>
              );
            }
            if (link.name === "Pay Fees Online") {
              return (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 border border-brand-orange text-brand-orange px-5 py-2.5 rounded-[4px] font-bold text-center mt-2.5 text-sm"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <div key={link.name} className="flex flex-col">
                <button 
                  className={cn(
                    "flex items-center justify-between text-lg font-medium py-3 text-left w-full",
                    isLinkActive(link) ? "text-brand-orange font-bold" : "text-brand-navy hover:text-brand-orange"
                  )}
                  onClick={() => {
                    if (link.hasDropdown) {
                      setActiveDropdown(activeDropdown === link.name ? null : link.name);
                    } else {
                      window.location.hash = link.href.replace('#', '');
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={20} className={cn("transition-transform", activeDropdown === link.name ? "rotate-180" : "")} />}
                </button>
                
                {link.hasDropdown && activeDropdown === link.name && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="pl-4 flex flex-col gap-3 border-l-2 border-brand-orange/20 mb-2 mt-1"
                  >
                    {link.groups?.map(group => (
                      <div key={group.title} className="flex flex-col gap-1.5">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-brand-orange/70">
                          {group.title}
                        </p>
                        {group.items.map(item => (
                          <a 
                            key={item.name} 
                            href={item.href} 
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "py-1 text-sm block transition-colors",
                              item.href === currentHash ? "text-brand-orange font-bold" : "text-brand-navy/80 hover:text-brand-orange"
                            )}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}
