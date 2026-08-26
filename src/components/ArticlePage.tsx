import { FC, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Calendar, ArrowLeft, HelpCircle, ChevronDown } from "lucide-react";
import { BLOG_POSTS, getPostContent, getSlug } from "./Blog";
import { motion, AnimatePresence } from "motion/react";
import { useSEO } from "../hooks/useSEO";

const POST_BACKLINKS: Record<
  string,
  { phrase: string; href: string; internal?: boolean }[]
> = {
  "cambridge-early-years-programme": [
    {
      phrase: "Cambridge Lower Secondary",
      href: "/lower-secondary",
      internal: true,
    },
    {
      phrase: "Cambridge A Level Curriculum",
      href: "/curriculum",
      internal: true,
    },
    {
      phrase: "Cambridge international school in Uttar Pradesh",
      href: "/",
      internal: true,
    },
    {
      phrase: "Cambridge Primary School in Sasni",
      href: "/primary",
      internal: true,
    },
  ],
  "cambridge-early-years-programme-fees": [
    {
      phrase: "Cambridge Curriculum",
      href: "/curriculum",
      internal: true,
    },
    {
      phrase: "Best Cambridge School in Uttar Pradesh",
      href: "/",
      internal: true,
    },
    {
      phrase: "Cambridge Primary School in Sasni",
      href: "/",
      internal: true,
    },
    {
      phrase: "Cambridge Primary ",
      href: "/primary",
      internal: true,
    },
    {
      phrase: "Cambridge Primary School",
      href: "/primary",
      internal: true,
    },
    {
      phrase: "Cambridge IGCSE",
      href: "/upper-secondary",
      internal: true,
    },
  ],
};
const FAQ_DATA_BY_SLUG: Record<string, { question: string; answer: string }[]> =
  {
    "cambridge-early-years-programme-benefits-subjects-and-approach-to-learning":
      [
        {
          question:
            "1. In what age range is the Cambridge Early Years Programme for?",
          answer:
            "It is a programme for children aged 3–5 years, prior to entry to Cambridge Primary.",
        },
        {
          question: "2. Is the Cambridge Early Years Programme exam based?",
          answer:
            "No. Assessment is ongoing and based on developmental progress, not on formal testing.",
        },
        {
          question:
            "3. How is Early Years related to Cambridge Primary and beyond?",
          answer:
            "It develops fundamental skills in literacy, numeracy and social development which transfer directly into Cambridge Primary, Cambridge Lower Secondary and ultimately Cambridge IGCSE and A Level.",
        },
        {
          question:
            "4. Do you have a Cambridge international school near Sasni, Uttar Pradesh?",
          answer:
            "Yes, there is a Cambridge Primary School in Sasni that provides this curriculum in the Hathras district.",
        },
        {
          question:
            "5. Why opt for a Cambridge Preschool rather than a traditional preschool?",
          answer:
            "A Cambridge Preschool uses a curriculum that is benchmarked internationally, has clearly defined learning areas, trained teachers and a defined academic progression pathway.",
        },
      ],
    "cambridge-early-years-programme-fees-what-parents-should-expect": [
      {
        question:
          "1. To which age group does the Cambridge Early Years Programme apply?",
        answer:
          "It is designed for children aged 3–5 years, before entering Cambridge Primary.",
      },
      {
        question:
          "2. Do Cambridge Early Years fees include books and materials?",
        answer:
          "Most schools will incorporate the learning resource fee into the school's yearly fee; however, it is advisable to check this in the fee breakdown, as some schools may have a separate fee.",
      },
      {
        question:
          "3. Does the Cambridge Early Years Programme cost more than a normal preschool?",
        answer:
          "It can be, as it consists of Cambridge-approved training, materials, and accreditation costs. The fees are, however, different from one school to another and from one place to another.",
      },
      {
        question:
          "4. If a child takes Cambridge Primary at the same school, does this guarantee them a place at Cambridge Primary?",
        answer:
          "Not automatically. In most schools, the standard progression is followed, although this may vary based on the school's policy.",
      },
      {
        question:
          "5. How can parents compare the fees charged by various Cambridge schools?",
        answer:
          "Ask each school to specify fees for each individual item, and not just the total fee.",
      },
    ],
  };

function renderParagraphWithBacklinks(
  text: string,
  backlinks: { phrase: string; href: string; internal?: boolean }[],
  usedPhrases: Set<string>,
): React.ReactNode {
  const sorted = [...backlinks].sort(
    (a, b) => b.phrase.length - a.phrase.length,
  );
  const pattern = sorted
    .map((bl) => bl.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const regex = new RegExp(`(${pattern})`, "g");

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const phrase = match[0];
    const bl = backlinks.find((b) => b.phrase === phrase);
    if (!bl || usedPhrases.has(phrase)) {
      parts.push(text.slice(lastIndex, match.index + phrase.length));
      lastIndex = match.index + phrase.length;
      continue;
    }

    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    usedPhrases.add(phrase);

    if (bl.internal) {
      parts.push(
        <Link
          key={`${phrase}-${match.index}`}
          to={bl.href}
          className="text-brand-orange underline underline-offset-2 hover:text-brand-dark-orange transition-colors font-semibold"
        >
          {phrase}
        </Link>,
      );
    } else {
      parts.push(
        <a
          key={`${phrase}-${match.index}`}
          href={bl.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange underline underline-offset-2 hover:text-brand-dark-orange transition-colors font-semibold"
        >
          {phrase}
        </a>,
      );
    }

    lastIndex = match.index + phrase.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
const POST_SEO: Record<
  string,
  { title: string; description: string; keywords: string; canonical: string }
> = {
  "cambridge-early-years-programme-benefits-subjects-and-approach-to-learning":
    {
      title: "Cambridge Early Years Programme: Benefits & Approach",
      description:
        "Explore the Cambridge Early Years Programme, its subjects, benefits, and learning approach at a Cambridge Preschool in Sasni, Uttar Pradesh",
      keywords:
        "Cambridge international school, Cambridge A Level Curriculum, Cambridge Preschool, Cambridge Primary School in sasni, Cambridge Lower Secondary, Cambridge International Education, Cambridge international school Uttar Pradesh",
      canonical:
        "https://pavnaintlschool.com/cambridge-early-years-programme-benefits-subjects-and-approach-to-learning",
    },
  "cambridge-early-years-programme": {
    title: "Cambridge Early Years Programme: Benefits & Approach",
    description:
      "Explore the Cambridge Early Years Programme, its subjects, benefits, and learning approach at a Cambridge Preschool in Sasni, Uttar Pradesh",
    keywords:
      "Cambridge international school, Cambridge A Level Curriculum, Cambridge Preschool, Cambridge Primary School in sasni, Cambridge Lower Secondary, Cambridge International Education, Cambridge international school Uttar Pradesh",
    canonical: "https://pavnaintlschool.com/cambridge-early-years-programme",
  },
  "cambridge-early-years-programme-fees-what-parents-should-expect": {
    title: "Cambridge Early Years Fees: A Parent's Guide",
    description:
      "Planning your child's early education? Understand Cambridge Early Years Programme fees, what they cover, and how to choose the right Cambridge school.",
    keywords:
      "Cambridge Curriculum , Cambridge Primary School , Cambridge IGCSE , Best Cambridge School in Uttar Pradesh. , Cambridge Primary School in sasni ",
    canonical:
      "https://pavnaintlschool.com/cambridge-early-years-programme-fees-what-parents-should-expect",
  },
};
const ArticlePage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const activePost = id
    ? BLOG_POSTS.find((p) => getSlug(p.title) === id || p.id === id)
    : null;
  const currentSlug = id || (activePost ? activePost.id : "");

  const seoData = POST_SEO[currentSlug]
    ? POST_SEO[currentSlug]
    : {
        title: "",
        description: activePost?.excerpt || "",
        keywords: "Pavna International School",
        canonical: `https://pavnaintlschool.com/${activePost?.id}`,
      };
  useSEO(seoData);
  if (!activePost) {
    return (
      <div className="bg-[#FDFCFB] min-h-[90vh] flex flex-col justify-center items-center text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy pt-32 pb-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">
            Article Not Found
          </h2>
          <p className="text-neutral-500 mb-8">
            The requested article could not be located or has been moved.
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-dark-orange text-white text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-full transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Back to Publications</span>
          </button>
        </div>
      </div>
    );
  }
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.id !== activePost.id && p.category === activePost.category,
  ).slice(0, 3);
  const contentText = getPostContent(activePost);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy pt-28 md:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate("/blog")}
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-brand-orange text-xs font-bold tracking-wider uppercase mb-8 transition-colors cursor-pointer group"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          <span>Back to Publications</span>
        </button>

        {/* Article Header */}
        <div className="mb-8">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full font-sans mb-4 animate-fade-in">
            {activePost.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-navy leading-tight mb-4">
            {activePost.title}
          </h1>
          <div className="flex items-center gap-4 text-xs font-semibold text-neutral-400 font-sans">
            <span className="flex items-center gap-1">
              <Calendar size={13} />
              {activePost.date}
            </span>
          </div>
        </div>

        {/* Large Cover Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-md bg-neutral-900 border border-neutral-100">
          <img
            src={activePost.image}
            alt={activePost.title}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              const categoryFallbacks: Record<string, string> = {
                Academics: "https://i.postimg.cc/W3nQr8nr/DSC06164-JPG.jpg",
                Events:
                  "https://pavnaintlschool.com/wp-content/uploads/2023/09/Pavna-Investiture-Ceremony-2-1024x535.jpg",
                "Campus Life":
                  "https://i.postimg.cc/Njqr9kPn/enviroment-jpg.jpg",
                Achievements: "https://i.postimg.cc/1zpxRsVB/DSC08709-JPG.jpg",
              };
              target.onerror = null;
              target.src =
                categoryFallbacks[activePost.category] ||
                "https://i.postimg.cc/pXdscR2c/admin-block-1-jpg.jpg";
            }}
          />
        </div>

        {/* Article Body */}
        <div className="mb-16">
          <div className="text-base md:text-lg font-serif leading-relaxed space-y-6">
            {(() => {
              const backlinks = POST_BACKLINKS[activePost.id] ?? [];
              const usedPhrases = new Set<string>();
              return contentText.split("\n\n").map((paragraph, pIdx) => {
                const trimmed = paragraph.trim();
                const isHeading =
                  !trimmed.endsWith(".") &&
                  trimmed.length < 120 &&
                  !trimmed.includes("•");
                if (isHeading) {
                  return (
                    <h3
                      key={pIdx}
                      className="font-bold text-brand-navy text-xl md:text-2xl pt-4"
                    >
                      {trimmed}
                    </h3>
                  );
                }
                if (trimmed.includes("•")) {
                  const lines = trimmed
                    .split("\n")
                    .filter((item) => item.trim().length > 0);

                  return (
                    <div key={pIdx} className="space-y-3 my-4">
                      {lines.map((line, lIdx) => {
                        const lineTrimmed = line.trim();
                        if (lineTrimmed.startsWith("•")) {
                          const cleanItem = lineTrimmed.replace(/^•\s*/, "");
                          const dashParts = cleanItem.split(" - ");

                          if (dashParts.length > 1) {
                            const titlePart = dashParts[0]
                              .replace(/\*\*/g, "")
                              .trim();
                            const descPart = dashParts
                              .slice(1)
                              .join(" - ")
                              .trim();

                            return (
                              <li
                                key={lIdx}
                                className="flex items-start gap-2.5 text-neutral-700 leading-normal pl-2 list-none"
                              >
                                <span className="text-brand-navy font-bold text-lg select-none">
                                  •
                                </span>
                                <span>
                                  <strong className="font-bold text-brand-navy">
                                    {titlePart}
                                  </strong>{" "}
                                  - {descPart}
                                </span>
                              </li>
                            );
                          }

                          return (
                            <li
                              key={lIdx}
                              className="flex items-start gap-2.5 text-neutral-700 leading-normal pl-2 list-none"
                            >
                              <span className="text-brand-navy font-bold text-lg select-none">
                                •
                              </span>
                              <span>{cleanItem.replace(/\*\*/g, "")}</span>
                            </li>
                          );
                        }

                        return (
                          <p key={lIdx} className="text-neutral-700">
                            {lineTrimmed}
                          </p>
                        );
                      })}
                    </div>
                  );
                }
                return (
                  <p
                    key={pIdx}
                    className={
                      isHeading
                        ? "font-bold text-brand-navy text-xl md:text-2xl pt-4"
                        : "text-neutral-700"
                    }
                  >
                    {backlinks.length > 0
                      ? renderParagraphWithBacklinks(
                          trimmed,
                          backlinks,
                          usedPhrases,
                        )
                      : trimmed}
                  </p>
                );
              });
            })()}
          </div>
        </div>
        {[
          "cambridge-early-years-programme-benefits-subjects-and-approach-to-learning",
          "cambridge-early-years-programme-fees-what-parents-should-expect",
        ].includes(id ?? "") && (
          <section id="faq-section" className="relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-8" id="faq-header-wrapper">
                <div className="flex flex-col w-fit max-w-full">
                  <h2
                    className="text-3xl sm:text-4xl md:leading-[50px] font-bold text-brand-navy tracking-tight"
                    id="faq-title"
                  >
                    Frequently Asked Questions
                  </h2>
                </div>
              </div>
              <div className="space-y-4" id="faq-accordion-container">
                {(FAQ_DATA_BY_SLUG[id ?? ""] || []).map((item, index) => {
                  const isOpen = activeIndex === index;
                  return (
                    <div
                      key={index}
                      className="bg-[#FAF9F5] rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 shadow-[0_4px_15px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_25px_rgba(32,26,91,0.03)]"
                      id={`faq-item-${index}`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left p-6 sm:p-7 flex items-start gap-4 justify-between font-gill hover:bg-white/50 transition-colors focus:outline-none cursor-pointer"
                        aria-expanded={isOpen}
                        id={`faq-btn-${index}`}
                      >
                        <div className="flex gap-3 items-center">
                          <HelpCircle
                            className="w-5 h-5 text-brand-orange shrink-0 mt-0.5"
                            id={`faq-icon-help-${index}`}
                          />
                          <span
                            className="font-bold text-brand-navy text-[14px] sm:text-[18px] leading-tight"
                            id={`faq-question-text-${index}`}
                          >
                            {item.question.replace(/^\d+\.\s*/, "")}
                          </span>
                        </div>
                        <span
                          className={`w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 text-brand-navy transition-transform duration-300 ${
                            isOpen
                              ? "rotate-180 bg-brand-orange/10 border-brand-orange/20 text-brand-orange"
                              : ""
                          }`}
                          id={`faq-indicator-${index}`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            id={`faq-content-motion-${index}`}
                          >
                            <div
                              className="p-6 sm:p-7 pt-0 border-t border-gray-100/50 text-[#4A5568] leading-relaxed text-[13.5px] sm:text-[16px]"
                              id={`faq-answer-inner-${index}`}
                            >
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <div className="border-t border-neutral-100 my-16" />

        {/* Related publications */}
        {relatedPosts.length > 0 && (
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-navy mb-8">
              More from {activePost.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <div
                  key={related.id}
                  onClick={() => {
                    // 7. हैश के बिना क्लीन रीडायरेक्शन
                    navigate(`/blog/${getSlug(related.title)}`);
                  }}
                  className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-40 bg-neutral-900 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const categoryFallbacks: Record<string, string> = {
                          Academics:
                            "https://i.postimg.cc/W3nQr8nr/DSC06164-JPG.jpg",
                          Events:
                            "https://pavnaintlschool.com/wp-content/uploads/2023/09/Pavna-Investiture-Ceremony-2-1024x535.jpg",
                          "Campus Life":
                            "https://i.postimg.cc/Njqr9kPn/enviroment-jpg.jpg",
                          Achievements:
                            "https://i.postimg.cc/1zpxRsVB/DSC08709-JPG.jpg",
                        };
                        target.onerror = null;
                        target.src =
                          categoryFallbacks[related.category] ||
                          "https://i.postimg.cc/pXdscR2c/admin-block-1-jpg.jpg";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-serif font-bold text-brand-navy leading-snug line-clamp-2 group-hover:text-brand-orange transition-colors mb-2">
                      {related.title}
                    </h4>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase font-sans">
                      {related.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
