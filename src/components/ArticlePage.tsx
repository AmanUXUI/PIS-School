import { FC, useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calendar, ArrowLeft } from "lucide-react";
import { BLOG_POSTS, getPostContent, getSlug } from "./Blog";

const ArticlePage: FC = () => {
  const [postId, setPostId] = useState<string | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#blog/")) {
        setPostId(hash.replace("#blog/", ""));
      } else {
        setPostId(null);
      }
    };
    window.addEventListener("hashchange", handleHash);
    handleHash();
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const activePost = postId
    ? BLOG_POSTS.find((p) => getSlug(p.title) === postId || p.id === postId)
    : null;

  if (!activePost) {
    return (
      <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy pt-32 pb-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">
            Article Not Found
          </h2>
          <p className="text-neutral-500 mb-8">
            The requested article could not be located or has been moved.
          </p>
          <button
            onClick={() => (window.location.hash = "#blog")}
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

  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy pt-28 md:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => (window.location.hash = "#blog")}
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
            {contentText.split("\n\n").map((paragraph, pIdx) => {
              const isHeading =
                !paragraph.trim().endsWith(".") &&
                paragraph.trim().length < 120;
              return (
                <p
                  key={pIdx}
                  className={
                    isHeading
                      ? "font-bold text-brand-navy text-xl md:text-2xl pt-4"
                      : "text-neutral-700"
                  }
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Divider */}
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
                    window.location.hash = `#blog/${getSlug(related.title)}`;
                    window.scrollTo(0, 0);
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
