import { FC, useState } from "react";
import { motion } from "motion/react";
import {
  HelpCircle,
  ClipboardList,
  Users,
  CheckCircle,
  CreditCard,
  ArrowRight,
  ShieldCheck,
  Award,
  Building2,
  Copy,
  Check,
  Info,
  Mail,
} from "lucide-react";

const Admissions: FC = () => {
  const [activeFeeTab, setActiveFeeTab] = useState<"day-boarders" | "boarders">(
    "day-boarders",
  );
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const steps = [
    {
      num: "01",
      title: "Submit an Enquiry",
      desc: "Fill out the online enquiry form or connect with our admissions team to learn more about our programmes.",
      icon: HelpCircle,
    },
    {
      num: "02",
      title: "Registration",
      desc: "Complete the registration form and submit the required documents along with the registration fee.",
      icon: ClipboardList,
    },
    {
      num: "03",
      title: "Assessment & Interaction",
      desc: "Students participate in an age-appropriate assessment and interaction to evaluate their readiness.",
      icon: Users,
    },
    {
      num: "04",
      title: "Admission Confirmation",
      desc: "Successful applicants receive an admission offer based on the assessment and seat availability.",
      icon: Award,
    },
    {
      num: "05",
      title: "Fee Payment & Enrolment",
      desc: "Complete the admission formalities and fee payment to secure your child's place at Pavna International School.",
      icon: CreditCard,
    },
  ];

  const policies = [
    "Admissions are offered subject to seat availability.",
    "Students are required to complete an age-appropriate assessment and interaction.",
    "Admission is confirmed only after successful document verification and fee payment.",
    "Parents must provide accurate academic, personal, and medical information during the admission process.",
    "The school reserves the right to accept or decline applications based on eligibility and school policies.",
    "All admissions are governed by the rules and guidelines of the school's Admission Committee.",
    "Parents are encouraged to review the school's academic policies, fee structure, and code of conduct before confirming admission.",
  ];

  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      {/* 1. Header Hero Panel with Breadcrumbs */}
      <section className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="https://i.postimg.cc/qMqw1NY4/DSC08559-JPG.jpg"
            alt="School Admissions Background"
            className="w-full h-full object-cover scale-105 filter blur-[2px]"
            referrerPolicy="no-referrer"
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
            <span className="text-brand-orange font-bold">Admission</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-gill font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-4">
              Admission
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl">
              A premium, simple, and transparent gateway to a world of endless
              possibilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Why Choose Pavna International School? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="flex flex-col items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-6 w-full">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    Future-Ready Minds
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-6">
                  Why Choose Pavna International School?
                </h2>

                <a
                  href="https://pavnaintlschool.campuscare.cloud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[4px] bg-brand-orange hover:bg-brand-dark-orange text-white text-[13px] font-bold tracking-wider transition-all shadow-md active:scale-95 cursor-pointer font-gill"
                >
                  Apply Now
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              <p>
                At Pavna International School, we believe every child deserves
                an education that inspires excellence, curiosity, and
                confidence. Our globally recognised Cambridge curriculum,
                experienced educators, and student-centred approach create an
                engaging learning environment where academic achievement goes
                hand in hand with character development.
              </p>
              <p>
                Beyond the classroom, students benefit from world-class
                infrastructure, Olympic-grade sports facilities, innovative
                learning spaces, and a wide range of co-curricular
                opportunities. With a strong emphasis on safety, values, and
                holistic development, Pavna International School empowers every
                learner to become a confident, compassionate, and future-ready
                global citizen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Admission Process */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-100/85">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="flex flex-col items-start w-fit max-w-full">
              <div className="flex items-center gap-3 mb-6 w-full">
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                  Admission Process
                </span>
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6">
                A Simple & Transparent Admission Journey
              </h2>
            </div>

            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              Joining Pavna International School is designed to be a seamless
              experience for every family. From your first enquiry to your
              child's first day at school, our admissions team is here to guide
              you at every step.
            </p>
          </div>

          {/* 5 Steps Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((el, i) => {
              const IconComp = el.icon;
              return (
                <motion.div
                  key={el.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-white p-6 rounded-2xl border border-neutral-100/80 shadow-sm hover:border-brand-orange hover:shadow-[0_12px_24px_-10px_rgba(244,129,32,0.18)] transition-all duration-500 group flex flex-col h-full relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/5 flex items-center justify-center text-brand-orange shrink-0 transition-all duration-500 group-hover:bg-brand-orange group-hover:text-white">
                      <IconComp size={22} className="stroke-[1.75]" />
                    </div>
                  </div>

                  <h3 className="text-[17px] font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors duration-300">
                    {el.title}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed font-medium font-gill">
                    {el.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Admission Policies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-12">
              <div className="flex flex-col items-start w-fit max-w-full">
                <div className="flex items-center gap-3 mb-6 w-full">
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                  <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                    Admission Policies
                  </span>
                  <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy leading-tight tracking-tight mb-6 max-w-2xl">
                  Fair, Transparent & Student-Centric
                </h2>
              </div>
              <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill mb-6 max-w-3xl">
                At Pavna International School, we follow a transparent admission
                policy to ensure equal opportunities for every student while
                maintaining our academic standards.
              </p>

              <a
                href="https://pavnaintlschool.campuscare.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[4px] bg-brand-orange hover:bg-brand-dark-orange text-white text-[13px] font-bold tracking-wider transition-all shadow-md active:scale-95 cursor-pointer font-gill"
              >
                Apply Now
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="lg:col-span-12 max-w-4xl space-y-4">
              {policies.map((policy, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="bg-[#FAF9F6] p-5 rounded-2xl border border-neutral-100/85 flex gap-4 hover:border-brand-orange/40 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="w-6 h-6 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={14} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-brand-navy text-[15px] sm:text-[16px] font-medium font-gill leading-relaxed">
                      {policy}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Fee Structure & Financials Section */}
      <section
        className="py-16 md:py-24 bg-[#FAF9F6] border-t border-b border-gray-200/40 relative overflow-hidden"
        id="fee-structure"
      >
        {/* Subtle background embellishments */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="flex flex-col items-start w-fit max-w-full">
              <div className="flex items-center gap-3 mb-6 w-full">
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
                <span className="shrink-0 text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange">
                  Investment in Excellence
                </span>
                <div className="w-12 h-[2px] bg-brand-orange shrink-0"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6">
                Fee Structure & Financials
              </h2>
            </div>
            <p className="text-[#4B5563] text-[16px] leading-[24px] font-medium font-gill">
              Our fee structure is transparent, comprehensive, and
              student-centric. We believe in providing complete clarity on all
              academic investments to ensure a smooth planning process for
              families.
            </p>
          </div>

          {/* Toggle Tab Switcher */}
          <div className="flex justify-center mb-10">
            <div className="bg-white p-1 rounded-full border border-neutral-200/85 shadow-sm flex items-center">
              <button
                onClick={() => setActiveFeeTab("day-boarders")}
                className={`relative px-8 py-3 rounded-full text-[11px] font-gill font-bold tracking-wider uppercase transition-all duration-300 select-none cursor-pointer ${
                  activeFeeTab === "day-boarders"
                    ? "text-white"
                    : "text-brand-navy/75 hover:text-brand-orange"
                }`}
              >
                {activeFeeTab === "day-boarders" && (
                  <motion.div
                    layoutId="activeFeeTabBg"
                    className="absolute inset-0 bg-brand-navy rounded-full z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">Day Boarders</span>
              </button>

              <button
                onClick={() => setActiveFeeTab("boarders")}
                className={`relative px-8 py-3 rounded-full text-[11px] font-gill font-bold tracking-wider uppercase transition-all duration-300 select-none cursor-pointer ${
                  activeFeeTab === "boarders"
                    ? "text-white"
                    : "text-brand-navy/75 hover:text-brand-orange"
                }`}
              >
                {activeFeeTab === "boarders" && (
                  <motion.div
                    layoutId="activeFeeTabBg"
                    className="absolute inset-0 bg-brand-navy rounded-full z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">Boarders</span>
              </button>
            </div>
          </div>

          {/* Fee Table - Desktop View */}
          <div className="hidden md:block bg-white border border-neutral-200/70 rounded-2xl shadow-sm overflow-hidden mb-16">
            {activeFeeTab === "day-boarders" ? (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-navy text-white text-[11px] font-gill font-bold uppercase tracking-wider">
                    <th className="py-5 px-6 border-b border-white/10">
                      Particulars
                    </th>
                    <th className="py-5 px-6 border-b border-white/10">
                      To be Paid
                    </th>
                    <th className="py-5 px-6 border-b border-white/10 text-center bg-brand-navy/95">
                      <div className="font-gill font-bold text-[13px] text-brand-orange">
                        EY 1 - Stage 3
                      </div>
                      <div className="text-[10px] text-white/70 font-medium font-gill tracking-normal normal-case mt-0.5">
                        (Play Group - Class II)
                      </div>
                    </th>
                    <th className="py-5 px-6 border-b border-white/10 text-center">
                      <div className="font-gill font-bold text-[13px] text-white">
                        Stage 4 - Stage 9
                      </div>
                      <div className="text-[10px] text-white/70 font-medium font-gill tracking-normal normal-case mt-0.5">
                        (Class III - VIII)
                      </div>
                    </th>
                    <th className="py-5 px-6 border-b border-white/10 text-center">
                      <div className="font-gill font-bold text-[13px] text-white">
                        Stage 10 - Stage 13
                      </div>
                      <div className="text-[10px] text-white/70 font-medium font-gill tracking-normal normal-case mt-0.5">
                        (Class IX - XII)
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-sm">
                  <tr className="hover:bg-neutral-50/40 transition-colors">
                    <td className="py-5 px-6 font-serif font-bold text-brand-navy text-[15px]">
                      Registration Fee
                    </td>
                    <td className="py-5 px-6 text-neutral-500 font-medium font-gill text-[14px]">
                      One Time*
                    </td>
                    <td className="py-5 px-6 text-center font-bold text-brand-navy font-mono bg-neutral-50/20 text-[15px]">
                      ₹10,000
                    </td>
                    <td className="py-5 px-6 text-center font-bold text-brand-navy font-mono text-[15px]">
                      ₹10,000
                    </td>
                    <td className="py-5 px-6 text-center font-bold text-brand-navy font-mono text-[15px]">
                      ₹10,000
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-50/40 transition-colors">
                    <td className="py-5 px-6 font-serif font-bold text-brand-navy text-[15px]">
                      Admission Fee
                    </td>
                    <td className="py-5 px-6 text-neutral-500 font-medium font-gill text-[14px]">
                      One Time*
                    </td>
                    <td className="py-5 px-6 text-center font-bold text-brand-navy font-mono bg-neutral-50/20 text-[15px]">
                      ₹35,000
                    </td>
                    <td className="py-5 px-6 text-center font-bold text-brand-navy font-mono text-[15px]">
                      ₹35,000
                    </td>
                    <td className="py-5 px-6 text-center font-bold text-brand-navy font-mono text-[15px]">
                      ₹35,000
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-50/40 transition-colors">
                    <td
                      className="py-5 px-6 font-serif font-bold text-brand-navy text-[15px] border-b-0"
                      rowSpan={2}
                    >
                      Composite Fee
                    </td>
                    <td className="py-5 px-6 text-brand-orange font-bold uppercase text-[11px] tracking-wider">
                      Quarterly
                    </td>
                    <td className="py-5 px-6 text-center font-extrabold text-brand-orange font-mono bg-brand-orange/[0.03] text-[16px]">
                      ₹87,750
                    </td>
                    <td className="py-5 px-6 text-center font-extrabold text-brand-navy font-mono text-[16px]">
                      ₹93,750
                    </td>
                    <td className="py-5 px-6 text-center font-extrabold text-brand-navy font-mono text-[16px]">
                      ₹1,00,000
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-50/40 transition-colors">
                    <td className="py-5 px-6 text-brand-orange font-bold uppercase text-[11px] tracking-wider">
                      Annual
                    </td>
                    <td className="py-5 px-6 text-center font-extrabold text-brand-orange font-mono bg-brand-orange/[0.03] text-[16px]">
                      ₹3,51,000
                    </td>
                    <td className="py-5 px-6 text-center font-extrabold text-brand-navy font-mono text-[16px]">
                      ₹3,75,000
                    </td>
                    <td className="py-5 px-6 text-center font-extrabold text-brand-navy font-mono text-[16px]">
                      ₹4,00,000
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-navy text-white text-[11px] font-gill font-bold uppercase tracking-wider">
                    <th className="py-5 px-6 border-b border-white/10">
                      Particulars
                    </th>
                    <th className="py-5 px-6 border-b border-white/10">
                      To be Paid
                    </th>
                    <th className="py-5 px-6 border-b border-white/10 text-center bg-brand-navy/95">
                      <div className="font-gill font-bold text-[13px] text-brand-orange">
                        Stage 7 - Stage 9
                      </div>
                      <div className="text-[10px] text-white/70 font-medium font-gill tracking-normal normal-case mt-0.5">
                        (Class VI - VIII)
                      </div>
                    </th>
                    <th className="py-5 px-6 border-b border-white/10 text-center">
                      <div className="font-gill font-bold text-[13px] text-white">
                        Stage 10 - Stage 13
                      </div>
                      <div className="text-[10px] text-white/70 font-medium font-gill tracking-normal normal-case mt-0.5">
                        (Class IX - XII)
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-sm">
                  <tr className="hover:bg-neutral-50/40 transition-colors">
                    <td className="py-5 px-6 font-serif font-bold text-brand-navy text-[15px]">
                      Registration Fee
                    </td>
                    <td className="py-5 px-6 text-neutral-500 font-medium font-gill text-[14px]">
                      One Time*
                    </td>
                    <td className="py-5 px-6 text-center font-bold text-brand-navy font-mono bg-neutral-50/20 text-[15px]">
                      ₹10,000
                    </td>
                    <td className="py-5 px-6 text-center font-bold text-brand-navy font-mono text-[15px]">
                      ₹10,000
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-50/40 transition-colors">
                    <td className="py-5 px-6 font-serif font-bold text-brand-navy text-[15px]">
                      Admission Fee
                    </td>
                    <td className="py-5 px-6 text-neutral-500 font-medium font-gill text-[14px]">
                      One Time*
                    </td>
                    <td className="py-5 px-6 text-center font-bold text-brand-navy font-mono bg-neutral-50/20 text-[15px]">
                      ₹35,000
                    </td>
                    <td className="py-5 px-6 text-center font-bold text-brand-navy font-mono text-[15px]">
                      ₹35,000
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-50/40 transition-colors">
                    <td
                      className="py-5 px-6 font-serif font-bold text-brand-navy text-[15px] border-b-0"
                      rowSpan={2}
                    >
                      Composite Fee
                    </td>
                    <td className="py-5 px-6 text-brand-orange font-bold uppercase text-[11px] tracking-wider">
                      Quarterly
                    </td>
                    <td className="py-5 px-6 text-center font-extrabold text-brand-orange font-mono bg-brand-orange/[0.03] text-[16px]">
                      ₹1,62,500
                    </td>
                    <td className="py-5 px-6 text-center font-extrabold text-brand-navy font-mono text-[16px]">
                      ₹1,68,750
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-50/40 transition-colors">
                    <td className="py-5 px-6 text-brand-orange font-bold uppercase text-[11px] tracking-wider">
                      Annual
                    </td>
                    <td className="py-5 px-6 text-center font-extrabold text-brand-orange font-mono bg-brand-orange/[0.03] text-[16px]">
                      ₹6,50,000
                    </td>
                    <td className="py-5 px-6 text-center font-extrabold text-brand-navy font-mono text-[16px]">
                      ₹6,75,000
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          {/* Fee Table - Mobile Responsive Card View */}
          <div className="block md:hidden space-y-6 mb-12">
            {activeFeeTab === "day-boarders" ? (
              <>
                {/* EY 1 - Stage 3 */}
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/70 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-brand-orange" />
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-orange">
                      Category 01
                    </span>
                    <h4 className="text-[18px] font-serif font-bold text-brand-navy">
                      EY 1 - Stage 3
                    </h4>
                    <p className="text-xs text-neutral-400 font-medium font-gill">
                      (Play Group - Class II)
                    </p>
                  </div>
                  <div className="space-y-3 text-sm border-t border-neutral-100 pt-4 font-gill">
                    <div className="flex justify-between">
                      <span className="text-neutral-500 font-medium">
                        Registration Fee{" "}
                        <span className="text-[10px] text-neutral-400">
                          (One Time)
                        </span>
                      </span>
                      <span className="font-bold text-brand-navy font-mono">
                        ₹10,000
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 font-medium">
                        Admission Fee{" "}
                        <span className="text-[10px] text-neutral-400">
                          (One Time)
                        </span>
                      </span>
                      <span className="font-bold text-brand-navy font-mono">
                        ₹35,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-brand-orange/[0.03] p-2.5 rounded-lg border border-brand-orange/5">
                      <span className="text-brand-orange font-bold text-xs uppercase tracking-wider">
                        Composite (Quarterly)
                      </span>
                      <span className="font-extrabold text-brand-orange font-mono text-base">
                        ₹87,750
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-brand-orange/[0.03] p-2.5 rounded-lg border border-brand-orange/5">
                      <span className="text-brand-orange font-bold text-xs uppercase tracking-wider">
                        Composite (Annual)
                      </span>
                      <span className="font-extrabold text-brand-orange font-mono text-base">
                        ₹3,51,000
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stage 4 - Stage 9 */}
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/70 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-brand-navy" />
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                      Category 02
                    </span>
                    <h4 className="text-[18px] font-serif font-bold text-brand-navy">
                      Stage 4 - Stage 9
                    </h4>
                    <p className="text-xs text-neutral-400 font-medium font-gill">
                      (Class III - VIII)
                    </p>
                  </div>
                  <div className="space-y-3 text-sm border-t border-neutral-100 pt-4 font-gill">
                    <div className="flex justify-between">
                      <span className="text-neutral-500 font-medium">
                        Registration Fee{" "}
                        <span className="text-[10px] text-neutral-400">
                          (One Time)
                        </span>
                      </span>
                      <span className="font-bold text-brand-navy font-mono">
                        ₹10,000
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 font-medium">
                        Admission Fee{" "}
                        <span className="text-[10px] text-neutral-400">
                          (One Time)
                        </span>
                      </span>
                      <span className="font-bold text-brand-navy font-mono">
                        ₹35,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                      <span className="text-brand-navy font-bold text-xs uppercase tracking-wider">
                        Composite (Quarterly)
                      </span>
                      <span className="font-extrabold text-brand-navy font-mono text-base">
                        ₹93,750
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                      <span className="text-brand-navy font-bold text-xs uppercase tracking-wider">
                        Composite (Annual)
                      </span>
                      <span className="font-extrabold text-brand-navy font-mono text-base">
                        ₹3,75,000
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stage 10 - Stage 13 */}
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/70 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-brand-navy" />
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                      Category 03
                    </span>
                    <h4 className="text-[18px] font-serif font-bold text-brand-navy">
                      Stage 10 - Stage 13
                    </h4>
                    <p className="text-xs text-neutral-400 font-medium font-gill">
                      (Class IX - XII)
                    </p>
                  </div>
                  <div className="space-y-3 text-sm border-t border-neutral-100 pt-4 font-gill">
                    <div className="flex justify-between">
                      <span className="text-neutral-500 font-medium">
                        Registration Fee{" "}
                        <span className="text-[10px] text-neutral-400">
                          (One Time)
                        </span>
                      </span>
                      <span className="font-bold text-brand-navy font-mono">
                        ₹10,000
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 font-medium">
                        Admission Fee{" "}
                        <span className="text-[10px] text-neutral-400">
                          (One Time)
                        </span>
                      </span>
                      <span className="font-bold text-brand-navy font-mono">
                        ₹35,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                      <span className="text-brand-navy font-bold text-xs uppercase tracking-wider">
                        Composite (Quarterly)
                      </span>
                      <span className="font-extrabold text-brand-navy font-mono text-base">
                        ₹1,00,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                      <span className="text-brand-navy font-bold text-xs uppercase tracking-wider">
                        Composite (Annual)
                      </span>
                      <span className="font-extrabold text-brand-navy font-mono text-base">
                        ₹4,00,000
                      </span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Stage 7 - Stage 9 */}
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/70 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-brand-orange" />
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-orange">
                      Category 01
                    </span>
                    <h4 className="text-[18px] font-serif font-bold text-brand-navy">
                      Stage 7 - Stage 9
                    </h4>
                    <p className="text-xs text-neutral-400 font-medium font-gill">
                      (Class VI - VIII)
                    </p>
                  </div>
                  <div className="space-y-3 text-sm border-t border-neutral-100 pt-4 font-gill">
                    <div className="flex justify-between">
                      <span className="text-neutral-500 font-medium">
                        Registration Fee{" "}
                        <span className="text-[10px] text-neutral-400">
                          (One Time)
                        </span>
                      </span>
                      <span className="font-bold text-brand-navy font-mono">
                        ₹10,000
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 font-medium">
                        Admission Fee{" "}
                        <span className="text-[10px] text-neutral-400">
                          (One Time)
                        </span>
                      </span>
                      <span className="font-bold text-brand-navy font-mono">
                        ₹35,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-brand-orange/[0.03] p-2.5 rounded-lg border border-brand-orange/5">
                      <span className="text-brand-orange font-bold text-xs uppercase tracking-wider">
                        Composite (Quarterly)
                      </span>
                      <span className="font-extrabold text-brand-orange font-mono text-base">
                        ₹1,62,500
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-brand-orange/[0.03] p-2.5 rounded-lg border border-brand-orange/5">
                      <span className="text-brand-orange font-bold text-xs uppercase tracking-wider">
                        Composite (Annual)
                      </span>
                      <span className="font-extrabold text-brand-orange font-mono text-base">
                        ₹6,50,000
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stage 10 - Stage 13 */}
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/70 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-brand-navy" />
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                      Category 02
                    </span>
                    <h4 className="text-[18px] font-serif font-bold text-brand-navy">
                      Stage 10 - Stage 13
                    </h4>
                    <p className="text-xs text-neutral-400 font-medium font-gill">
                      (Class IX - XII)
                    </p>
                  </div>
                  <div className="space-y-3 text-sm border-t border-neutral-100 pt-4 font-gill">
                    <div className="flex justify-between">
                      <span className="text-neutral-500 font-medium">
                        Registration Fee{" "}
                        <span className="text-[10px] text-neutral-400">
                          (One Time)
                        </span>
                      </span>
                      <span className="font-bold text-brand-navy font-mono">
                        ₹10,000
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 font-medium">
                        Admission Fee{" "}
                        <span className="text-[10px] text-neutral-400">
                          (One Time)
                        </span>
                      </span>
                      <span className="font-bold text-brand-navy font-mono">
                        ₹35,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                      <span className="text-brand-navy font-bold text-xs uppercase tracking-wider">
                        Composite (Quarterly)
                      </span>
                      <span className="font-extrabold text-brand-navy font-mono text-base">
                        ₹1,68,750
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                      <span className="text-brand-navy font-bold text-xs uppercase tracking-wider">
                        Composite (Annual)
                      </span>
                      <span className="font-extrabold text-brand-navy font-mono text-base">
                        ₹6,75,000
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Fee Payment Schedule */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] leading-none tracking-[2px] uppercase font-bold text-brand-orange shrink-0">
                Installment Timeline
              </span>
              <div className="h-[1px] bg-neutral-200/80 grow" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-brand-navy mb-8">
              Fee Payment Schedule
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { term: "1st Installment", timing: "April (1st week)" },
                { term: "2nd Installment", timing: "July (1st week)" },
                { term: "3rd Installment", timing: "October (1st week)" },
                { term: "4th Installment", timing: "January (1st week)" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-neutral-200/60 shadow-sm flex flex-col justify-between relative group hover:border-brand-orange/40 transition-all duration-500"
                >
                  <div className="absolute top-4 right-4 text-xs font-gill font-bold text-neutral-100 group-hover:text-brand-orange/20 transition-colors duration-500">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-gill font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      {item.term}
                    </h4>
                    <p className="text-brand-navy font-serif font-bold text-[18px] group-hover:text-brand-orange transition-colors duration-300">
                      {item.timing}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note & Guidelines Block */}
          <div className="bg-[#111A2E] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-white/5 flex flex-col justify-between mb-16">
            <div>
              <h4 className="text-lg font-serif font-bold text-[#F48120] mb-6 flex items-center gap-2">
                <Info size={18} className="stroke-[2]" />
                Important Note
              </h4>

              <ul className="space-y-5 text-sm text-white/85 font-gill leading-relaxed">
                <li className="flex gap-3 items-start">
                  <span className="text-[#F48120] font-bold mt-1 text-base leading-none">
                    •
                  </span>
                  <span>
                    The examination fees per subject for the Cambridge
                    International examinations i.e. Checkpoint(s), IGCSE, AS and
                    A Levels, will be charged extra on an actual basis.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#F48120] font-bold mt-1 text-base leading-none">
                    •
                  </span>
                  <span>
                    The registration fee and admission fee are one time and
                    non-refundable.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold font-gill mb-1.5">
                For queries & verification
              </div>
              <a
                href="mailto:accounts@pavnaintlschool.com"
                className="text-white hover:text-brand-orange font-bold text-[15px] flex items-center gap-2.5 transition-colors group"
              >
                <Mail
                  size={16}
                  className="text-brand-orange group-hover:scale-110 transition-transform"
                />
                accounts@pavnaintlschool.com
              </a>
            </div>
          </div>

          {/* Page Turn / Navigation Action Buttons */}
          <div className="mt-16 border-t border-neutral-200/50 pt-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Previous Link */}
              <div className="w-full sm:w-auto text-left order-2 sm:order-1">
                <a
                  href="#boarding"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-gill"
                >
                  &larr; Boarding
                </a>
              </div>

              {/* Home Return */}
              <button
                onClick={() => (window.location.hash = "")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-dark-orange text-white text-[13px] font-bold tracking-wider transition-all shadow-md active:scale-95 cursor-pointer w-full sm:w-auto order-1 sm:order-2"
              >
                Return to Homepage
                <ArrowRight size={15} />
              </button>

              {/* Next Link */}
              {/* <div className="w-full sm:w-auto text-right order-3">
                <a 
                  href="#blog"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer bg-white w-full sm:w-auto font-gill"
                >
                  News & Media &rarr;
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
