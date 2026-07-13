import React, { useState } from "react";
import { motion } from "motion/react";

interface Guest {
  name: string;
  title: string;
  image?: string;
  initials?: string;
  imageClass?: string;
}

const SPORTS_GUESTS: Guest[] = [
  {
    name: "Mary Kom",
    title: "Olympic Medalist; World Champion Boxer",
    image: "/images/image_7.webp",
    initials: "MK",
  },
  {
    name: "Mahendra Singh Dhoni",
    title: "Former Captain, Indian Cricket Team",
    image: "/images/Indian-cricketer-Mahendra-Singh-Dhoni-2011.webp",
    initials: "MSD",
  },
  {
    name: "Kapil Dev",
    title: "Cricketing Legend",
    image: "/images/image_8.webp",
    initials: "KD",
  },
  {
    name: "Sushil Kumar",
    title: "Olympic Medalist Wrestler",
    image: "/images/image_9.webp",
    initials: "SK",
  },
  {
    name: "Saina Nehwal",
    title: "Olympic Medalist, International Badminton Player",
    image: "/images/image_10.webp",
    initials: "SN",
  },
  {
    name: "Vijender Singh",
    title: "Olympic Medalist Boxer; Professional Boxer",
    image: "/images/image_11.webp",
    initials: "VS",
  },
  {
    name: "Sunita Rani",
    title: "International Athlete; Arjuna Awardee",
    image: "/images/image_12.webp",
    initials: "SR",
  },
  {
    name: "Dhanraj Pillay",
    title: "Former Captain, Indian Hockey Team",
    image: "/images/image_13.webp",
    initials: "DP",
  },
  {
    name: "Maninder Singh",
    title: "Former Indian Cricketer",
    image: "/images/image_14.webp",
    initials: "MS",
  },
  {
    name: "Mohinder Amarnath",
    title: "Former Indian Cricketer; World Cup Winner (1983)",
    image: "/images/image_15.webp",
    initials: "MA",
  },
  {
    name: "Chetan Sharma",
    title: "Former Indian Cricketer; Former Chief Selector, BCCI",
    image: "/images/image_16.webp",
    initials: "CS",
  },
];

const VIP_GUESTS: Guest[] = [
  {
    name: "Dr. A.P.J. Abdul Kalam",
    title: "Former President of India; Eminent Scientist",
    image: "/images/image_17.webp",
    initials: "APJ",
  },
  {
    name: "Rajnath Singh",
    title: "Defence Minister of India",
    image: "/images/image_18.webp",
    initials: "RS",
  },
  {
    name: "Kiran Bedi",
    title: "Former IPS Officer; Eminent Civil Servant",
    image: "/images/image_19.webp",
    initials: "KB",
  },
  {
    name: "Sudha Murthy",
    title: "Author & Prolific Philanthropist",
    image: "/images/image-20.webp",
    initials: "SM",
  },
  {
    name: "Indra Nooyi",
    title: "Business Executive; Former CEO of PepsiCo",
    image: "/images/image_21.webp",
    initials: "IN",
  },
  {
    name: "Kalyan Singh",
    title: "Former Chief Minister, Uttar Pradesh",
    image: "/images/image_22.webp",
    initials: "KS",
  },
  {
    name: "Shobhana Narayan",
    title: "Renowned Kathak Dancer; Senior Civil Servant",
    image: "/images/image_23.webp",
    initials: "SN",
  },
  {
    name: "Dr. Shayama Chona",
    title: "Educationist, Padma Bhushan & Padma Shri Awardee",
    image: "/images/image_24.webp",
    initials: "SC",
    imageClass: "scale-[1.25]",
  },
  {
    name: "Gopaldas Neeraj",
    title: "Renowned Poet & Lyricist; Padma Shri & Padma Bhushan Awardee",
    image: "/images/image_25.webp",
    initials: "GN",
  },
  {
    name: "Sahab Singh Verma",
    title: "Former Chief Minister, Delhi",
    image: "/image/image_26.webp",
    initials: "SSV",
  },
  {
    name: "Madan Lal Khurana",
    title: "Former Chief Minister, Delhi",
    image: "/images/image_27.webp",
    initials: "MLK",
  },
  {
    name: "Salman Khurshid",
    title: "Former Minister of External Affairs of India",
    image: "/images/image_28.webp",
    initials: "SK",
  },
  {
    name: "Lal Krishna Advani",
    title: "Former Deputy Prime Minister of India",
    image: "/images/image_29.webp",
    initials: "LKA",
  },
  {
    name: "Mulayam Singh Yadav",
    title: "Former Defence Minister of India",
    image: "/images/image_30.webp",
    initials: "MSY",
  },
  {
    name: "Akhilesh Yadav",
    title: "Former Chief Minister, Uttar Pradesh",
    image: "/images/image_31.webp",
    initials: "AY",
  },
  {
    name: "Lalu Prasad Yadav",
    title: "Former Railway Minister of India",
    image: "/images/image_32.webp",
    initials: "LPY",
  },
  {
    name: "Sachin Pilot",
    title: "Former Deputy Chief Minister, Rajasthan",
    image: "/images/image_33.webp",
    initials: "SP",
  },
  {
    name: "Nanaji Deshmukh",
    title: "Social Activist; Nationalist Leader",
    image: "/images/image_34.webp",
    initials: "ND",
  },
  {
    name: "Murli Manohar Joshi",
    title: "Former Union Minister; Eminent Scholar & Leader",
    image: "/images/image_35.webp",
    initials: "MMJ",
  },
];

const ALL_GUESTS: Guest[] = [...SPORTS_GUESTS, ...VIP_GUESTS];

const GuestCard: React.FC<{ guest: Guest }> = ({ guest }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const initials =
    guest.initials ||
    guest.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 3);

  return (
    <div className="relative flex-shrink-0 w-[285px] h-[350px] rounded-[4px] overflow-hidden group bg-brand-navy border border-white/10 hover:border-brand-orange/40 transition-all duration-500">
      {/* Background/Image Content */}
      {guest.image && !imgFailed ? (
        <>
          <div className="absolute inset-0 bg-brand-navy/60 z-0" />
          <img
            src={guest.image}
            alt={guest.name}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 z-0 ${guest.imageClass || "scale-100"} ${guest.name === "Dr. Shayama Chona" ? "group-hover:scale-[1.32]" : "group-hover:scale-105"}`}
            onError={() => setImgFailed(true)}
          />
        </>
      ) : (
        /* Executive Monogram & Abstract Background for Noble Status */
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy to-[#130F3B] flex flex-col items-center justify-center p-6 z-0 overflow-hidden">
          {/* Subtle architectural decorative watermark */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none border-[12px] border-white m-4 rounded-[4px]" />

          <div className="w-20 h-20 rounded-full border border-brand-orange/20 bg-white/5 flex items-center justify-center mb-6 relative group-hover:border-brand-orange/60 transition-colors duration-500">
            <span className="text-brand-orange text-2xl font-bold tracking-tight font-sans">
              {initials}
            </span>
            <div className="absolute -inset-1 border border-brand-orange/5 rounded-full animate-pulse opacity-40" />
          </div>
        </div>
      )}

      {/* Modern Gradient Overlays for High Text Contrast */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent z-10 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-300 z-10" />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform group-hover:-translate-y-1 transition-transform duration-300">
        <h3 className="text-white text-base font-bold mb-1 tracking-wide leading-snug group-hover:text-brand-yellow transition-colors duration-300">
          {guest.name}
        </h3>

        <p className="text-gray-300 text-[11px] font-medium leading-relaxed mt-1.5 h-8 line-clamp-2">
          {guest.title}
        </p>
      </div>
    </div>
  );
};

export default function DistinguishedGuests() {
  return (
    <section className="py-16 md:py-24 bg-[#FDFCFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-fit max-w-full mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4 w-full">
              <div className="flex-1 h-[2px] bg-[#f48120] max-w-[48px]"></div>
              <span className="shrink-0 text-[#f48120] text-[11px] leading-[28px] tracking-[1.65px] uppercase font-bold">
                Distinguished Guests
              </span>
              <div className="flex-1 h-[2px] bg-[#f48120] max-w-[48px]"></div>
            </div>

            <h2 className="text-[32px] md:text-[42px] lg:text-[42px] md:leading-[50px] lg:leading-[50px] font-bold text-brand-navy mb-4 tracking-tight">
              Distinguished Guests At Pavna School Legacy
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill max-w-2xl mx-auto"
          >
            We are deeply privileged to have hosted a sterling array of olympic
            champions, national leaders, iconic authors, and pioneering thinkers
            who inspire our pupils.
          </motion.p>
        </div>
      </div>

      {/* Single Continuous Slider with Combined Guests */}
      <div className="w-full overflow-hidden marquee-hover py-4 relative">
        <div className="flex gap-6 animate-marquee-slow w-max select-none">
          {/* Normal track */}
          {ALL_GUESTS.map((guest, idx) => (
            <GuestCard key={`guest-primary-${idx}`} guest={guest} />
          ))}
          {/* Loop track duplicate */}
          {ALL_GUESTS.map((guest, idx) => (
            <GuestCard key={`guest-secondary-${idx}`} guest={guest} />
          ))}
        </div>
      </div>
    </section>
  );
}
