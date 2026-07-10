import { FC, useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  CheckCircle2,
  Sparkles,
  Download,
  BookOpen,
  Calendar,
  Clock,
  ArrowUpRight,
} from "lucide-react";

interface NewsletterIssue {
  id: string;
  title: string;
  issueNo: string;
  summary?: string;
  image?: string;
  downloadUrl: string;
}

const NEWSLETTER_ISSUES: NewsletterIssue[] = [
  {
    id: "issue-1",
    title: "Issue 01 | The Newsletter",
    issueNo: "Issue 01",
    downloadUrl:
      "https://pavnaintlschool.com/uploads/docs/pavna-news_april2022.pdf",
  },
  {
    id: "issue-2",
    title: "Issue 02 | The Newsletter",
    issueNo: "Issue 02",
    downloadUrl:
      "https://pavnaintlschool.com/uploads/docs/Pavna-Newsletter-The-Communique-Issue-02.pdf",
  },
  {
    id: "issue-3",
    title: "Issue 03 | The Newsletter",
    issueNo: "Issue 03",
    downloadUrl:
      "https://pavnaintlschool.com/uploads/docs/PAVNA-NEWSLETTER-03.pdf",
  },
  {
    id: "issue-4",
    title: "Issue 04 | The Newsletter",
    issueNo: "Issue 04",
    downloadUrl:
      "https://pavnaintlschool.com/uploads/docs/NEWSLETTER-ISSUE-4-WEB-EDITION_compressed.pdf",
  },
  {
    id: "issue-5",
    title: "Issue 05 | The Newsletter",
    issueNo: "Issue 05",
    downloadUrl:
      "https://pavnaintlschool.com/uploads/docs/NEWSLETTER-ISSUE-5-WEB-EDITION_compressed.pdf",
  },
  {
    id: "issue-6",
    title: "Issue 06 | The Newsletter",
    issueNo: "Issue 06",
    downloadUrl:
      "https://pavnaintlschool.com/uploads/docs/A4-NEWSLETTER-ISSUE-06.pdf",
  },
  {
    id: "issue-7",
    title: "Issue 07 | The Newsletter",
    issueNo: "Issue 07",
    downloadUrl:
      "https://pavnaintlschool.com/uploads/docs/THE-COMMUNIQUE-ISSUE-7.pdf",
  },
];

const Newsletter: FC = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [subscribeError, setSubscribeError] = useState<string>("");
  const [showSubscribedModal, setShowSubscribedModal] =
    useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setSubscribeError("");

    if (!emailInput.trim()) {
      setSubscribeError("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.trim())) {
      setSubscribeError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    // Simulate API registration
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSubscribedModal(true);
      setEmailInput("");
    }, 1200);
  };

  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      {/* 1. Page Header Section */}
      <section className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="/images/DSC08428.webp"
            alt="PIS Newsletter Background"
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
            <span className="text-white/50">News & Media</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold font-sans">
              Newsletter
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-4">
              School Newsletter
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl">
              Access current monthly briefs, historical campus circulars,
              parenting tips, and comprehensive updates from Pavna International
              School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Newsletter Issues Archive Grid */}
      <section className="py-16 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] tracking-[2px] uppercase font-bold text-brand-orange mb-3 block font-sans">
              RECENT RELEASES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-4">
              PIS Chronicle Archive
            </h2>
            <p className="text-neutral-500 text-[15px] font-medium leading-relaxed">
              Select and browse through our monthly publication journals
              highlighting classroom excellence, student profiles, and parent
              circular guidance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {NEWSLETTER_ISSUES.map((issue, index) => (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-neutral-100/90 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                {/* Left side: Icon + Title & Date */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                      {issue.title}
                    </h3>
                    {/* <div className="flex items-center gap-2 text-xs text-neutral-400 mt-1 font-sans font-semibold">
                      <Calendar size={12} />
                      <span>{issue.date}</span>
                    </div> */}
                  </div>
                </div>

                {/* Right side: Download Button */}
                <div className="shrink-0 flex items-center">
                  <a
                    href={issue.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-dark-orange text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow active:scale-95 group/btn cursor-pointer"
                  >
                    <span>View Document</span>
                    {/* <Download
                      size={14}
                      className="transition-transform duration-300 group-hover/btn:translate-y-0.5"
                    /> */}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Elegant Success Modal */}
      <AnimatePresence>
        {showSubscribedModal && (
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
              className="bg-white rounded-3xl p-8 max-w-sm w-full border border-neutral-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-5 border border-green-100">
                <CheckCircle2 size={34} className="stroke-[2]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy mb-2">
                Subscription Confirmed!
              </h3>

              <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed font-medium mb-6">
                Thank you! You have successfully subscribed to the Pavna
                International School Newsletter. Welcome to our community
                updates!
              </p>

              <button
                onClick={() => setShowSubscribedModal(false)}
                className="w-full bg-brand-orange hover:bg-brand-dark-orange text-white text-[13px] font-bold py-3.5 px-6 rounded-2xl transition-all duration-300 active:scale-98 shadow-sm cursor-pointer"
              >
                Great, Thank You!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Newsletter;
