import React, { useState } from 'react';
import { motion } from 'motion/react';

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
    image: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/hjlfvs07nd8qj2p1ibmh",
    initials: "MK"
  },
  {
    name: "Mahendra Singh Dhoni",
    title: "Former Captain, Indian Cricket Team",
    image: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
    initials: "MSD"
  },
  {
    name: "Kapil Dev",
    title: "Cricketing Legend",
    image: "https://www.celebrityspeakersindia.com/uploads/8/1/1/5/8115412/s875466462545645924_p5_i2_w620.jpeg",
    initials: "KD"
  },
  {
    name: "Sushil Kumar",
    title: "Olympic Medalist Wrestler",
    image: "https://img.olympics.com/images/image/private//t_s_w440/f_auto/primary/wlj4twjphrpfz5bqviyv",
    initials: "SK"
  },
  {
    name: "Saina Nehwal",
    title: "Olympic Medalist, International Badminton Player",
    image: "https://cdn.britannica.com/00/256400-050-257C7E7A/india-saina-nehwal-with-bronze-medal-womens-singles-badminton-match-at-london-summer-olympic-games.jpg",
    initials: "SN"
  },
  {
    name: "Vijender Singh",
    title: "Olympic Medalist Boxer; Professional Boxer",
    image: "https://images.yourstory.com/cs/2/3fb20ae02dc911e9af58c17e6cc3d915/Imageou82-1596101659734.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75",
    initials: "VS"
  },
  {
    name: "Sunita Rani",
    title: "International Athlete; Arjuna Awardee",
    image: "https://images.tribuneindia.com/cms/gall_content/2018/4/2018_4$largeimg02_Monday_2018_022503868.jpg",
    initials: "SR"
  },
  {
    name: "Dhanraj Pillay",
    title: "Former Captain, Indian Hockey Team",
    image: "https://images.news18.com/ibnlive/uploads/2021/08/1628216779_dhanraj-pillai.jpg",
    initials: "DP"
  },
  {
    name: "Maninder Singh",
    title: "Former Indian Cricketer",
    image: "https://www.dronacharyacricketacademy.com/images/coach-11.jpg",
    initials: "MS"
  },
  {
    name: "Mohinder Amarnath",
    title: "Former Indian Cricketer; World Cup Winner (1983)",
    image: "https://m.media-amazon.com/images/M/MV5BZGEyNjJjMTEtNzBhYi00NjUzLTk2MTAtY2Q5MGZhYWMzNDEzXkEyXkFqcGc@._V1_.jpg",
    initials: "MA"
  },
  {
    name: "Chetan Sharma",
    title: "Former Indian Cricketer; Former Chief Selector, BCCI",
    image: "https://media.crictracker.com/media/attachments/1690528474906_Chetan-Sharma.jpeg",
    initials: "CS"
  }
];

const VIP_GUESTS: Guest[] = [
  {
    name: "Dr. A.P.J. Abdul Kalam",
    title: "Former President of India; Eminent Scientist",
    image: "https://www.tallengestore.com/cdn/shop/products/DrAPJAbdulKalam-ex-PresidentofIndia-MissileManOfIndia-Portrait.jpg?v=1688682507",
    initials: "APJ"
  },
  {
    name: "Rajnath Singh",
    title: "Defence Minister of India",
    image: "https://cdn.wionews.com/sites/default/files/2022/05/12/261796-rajnath-sigh.jpg",
    initials: "RS"
  },
  {
    name: "Kiran Bedi",
    title: "Former IPS Officer; Eminent Civil Servant",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Dr._Kiran_Bedi_in_2017_%28cropped%29.jpg/250px-Dr._Kiran_Bedi_in_2017_%28cropped%29.jpg",
    initials: "KB"
  },
  {
    name: "Sudha Murthy",
    title: "Author & Prolific Philanthropist",
    image: "https://in-focusindia.com/wp-content/uploads/2025/04/1-6.jpg",
    initials: "SM"
  },
  {
    name: "Indra Nooyi",
    title: "Business Executive; Former CEO of PepsiCo",
    image: "https://www.globalindian.com/wp-content/uploads/2022/07/card_indra-nooyi_amrita.jpg",
    initials: "IN"
  },
  {
    name: "Kalyan Singh",
    title: "Former Chief Minister, Uttar Pradesh",
    image: "https://im.rediff.com/news/2021/aug/21kalyan-singh.jpg",
    initials: "KS"
  },
  {
    name: "Shobhana Narayan",
    title: "Renowned Kathak Dancer; Senior Civil Servant",
    image: "https://img.etimg.com/thumb/msid-88867233,width-650,height-488,imgsize-146238,resizemode-75/shovana-narayan-wearing-jewellery-from-zoyas-rouge-collection.jpg",
    initials: "SN"
  },
  {
    name: "Dr. Shayama Chona",
    title: "Educationist, Padma Bhushan & Padma Shri Awardee",
    image: "https://i.postimg.cc/02gKr06L/Guest-Image.png",
    initials: "SC",
    imageClass: "scale-[1.25]"
  },
  {
    name: "Gopaldas Neeraj",
    title: "Renowned Poet & Lyricist; Padma Shri & Padma Bhushan Awardee",
    image: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTIzNzVhZTEwLTRkOTctMTFlZi1hNjQ3LTQ3NDllNWIwYjdlMS5qcGc=",
    initials: "GN"
  },
  {
    name: "Sahab Singh Verma",
    title: "Former Chief Minister, Delhi",
    image: "https://akm-img-a-in.tosshub.com/sites/indiacontent/0/images/product/public/26102018/00/00/00/26/67/11/266711/659-F88sa3-000772.jpg",
    initials: "SSV"
  },
  {
    name: "Madan Lal Khurana",
    title: "Former Chief Minister, Delhi",
    image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-216995,resizemode-75,msid-66399592/news/politics-and-nation/delhi-to-observe-2-day-mourning-over-ex-cm-madan-lal-khuranas-death.jpg",
    initials: "MLK"
  },
  {
    name: "Salman Khurshid",
    title: "Former Minister of External Affairs of India",
    image: "https://chamberofsalmankhurshid.com/wp-content/uploads/2022/12/SK4.jpg",
    initials: "SK"
  },
  {
    name: "Lal Krishna Advani",
    title: "Former Deputy Prime Minister of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/L.K._Advani.jpg",
    initials: "LKA"
  },
  {
    name: "Mulayam Singh Yadav",
    title: "Former Defence Minister of India",
    image: "https://images.deccanchronicle.com/dc-Cover-9gtllojgng4sqcotmmhv39kqm6-20170301003325.Medi.jpeg",
    initials: "MSY"
  },
  {
    name: "Akhilesh Yadav",
    title: "Former Chief Minister, Uttar Pradesh",
    image: "https://samajwadiparty.in/_assets/img/president.jpg",
    initials: "AY"
  },
  {
    name: "Lalu Prasad Yadav",
    title: "Former Railway Minister of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Lalu_Prasad_Yadav_addressing_the_EEC_-_2006_%28cropped%29.jpg",
    initials: "LPY"
  },
  {
    name: "Sachin Pilot",
    title: "Former Deputy Chief Minister, Rajasthan",
    image: "https://www.livemint.com/lm-img/img/2023/07/08/original/PTI07-08-2023-000124B-0_1688819408368.jpg",
    initials: "SP"
  },
  {
    name: "Nanaji Deshmukh",
    title: "Social Activist; Nationalist Leader",
    image: "https://organiser.org/wp-content/uploads/NBImages/2021/02/27/2_10_10_24_Nanaji_1.jpg",
    initials: "ND"
  },
  {
    name: "Murli Manohar Joshi",
    title: "Former Union Minister; Eminent Scholar & Leader",
    image: "https://www.thehitavada.com/Encyc/2019/11/10/2_10_21_39_joshi_1_H@@IGHT_547_W@@IDTH_835.jpg",
    initials: "MMJ"
  }
];

const ALL_GUESTS: Guest[] = [
  ...SPORTS_GUESTS,
  ...VIP_GUESTS
];

const GuestCard: React.FC<{ guest: Guest }> = ({ guest }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const initials = guest.initials || guest.name.split(' ').map(n => n[0]).join('').substring(0, 3);

  return (
    <div className="relative flex-shrink-0 w-[285px] h-[350px] rounded-[4px] overflow-hidden group bg-brand-navy border border-white/10 hover:border-brand-orange/40 transition-all duration-500">
      {/* Background/Image Content */}
      {guest.image && !imgFailed ? (
        <>
          <div className="absolute inset-0 bg-brand-navy/60 z-0" />
          <img 
            src={guest.image}
            alt={guest.name}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 z-0 ${guest.imageClass || 'scale-100'} ${guest.name === 'Dr. Shayama Chona' ? 'group-hover:scale-[1.32]' : 'group-hover:scale-105'}`}
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
}

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
              <span className="shrink-0 text-[#f48120] text-[11px] leading-[28px] tracking-[1.65px] uppercase font-bold">Distinguished Guests</span>
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
            We are deeply privileged to have hosted a sterling array of olympic champions, national leaders, iconic authors, and pioneering thinkers who inspire our pupils.
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
