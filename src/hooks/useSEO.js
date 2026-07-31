import { useEffect } from "react";

const SITE_URL = "https://www.pavnaintlschool.com";
const DEFAULT_TITLE = "Pavna International School";
const DEFAULT_DESCRIPTION =
  "Pavna International School offers Cambridge Pathway education from Early Years to A Level with a strong focus on holistic learning.";
const DEFAULT_KEYWORDS =
  "Pavna International School, Cambridge School, International School, Boarding School, Aligarh, Hathras";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/Banner-Desktop.webp`;
const PATH_METADATA = {
  "/": {
    title: "Best International School in Uttar Pradesh | Pavna PIS",
    description:
      "Pavna International School in Sasni offers Cambridge Pathway education, holistic development, and modern campus facilities.",
  },
  "/admissions": {
    title: "Admissions | Pavna International School",
    description:
      "Start your child’s admissions journey at Pavna International School and explore enrollment steps, eligibility, and support.",
  },
  "/campus-life": {
    title: "Campus Life | Pavna International School",
    description:
      "Explore student life, sports, arts, clubs, and co-curricular experiences at Pavna International School.",
  },
  "/blog": {
    title: "Blog | Pavna International School",
    description:
      "Read campus stories, academic insights, school events, and student achievements from Pavna International School.",
  },
  "/contact-us": {
    title: "Contact Us | Pavna International School",
    description:
      "Contact Pavna International School for admissions, general enquiries, and campus visit information.",
  },
};

const BASE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Pavna International School",
      url: SITE_URL,
      logo: `${SITE_URL}/images/image.webp`,
      sameAs: [
        "https://www.facebook.com/share/184LZ5d13u/",
        "https://www.instagram.com/pisaligarh",
        "https://youtube.com/@pisaligarh",
      ],
    },
    {
      "@type": "WebSite",
      name: "Pavna International School",
      url: SITE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/blog?query={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export function useSEO({ title, description, keywords }) {
  useEffect(() => {
    const pathname = window.location.pathname || "/";
    const canonical = `${SITE_URL}${pathname}`;
    const pathMetadata = PATH_METADATA[pathname] || {};
    const safeTitle = title?.trim() || pathMetadata.title || DEFAULT_TITLE;
    const safeDescription =
      description?.trim() || pathMetadata.description || DEFAULT_DESCRIPTION;
    const safeKeywords = keywords?.trim() || DEFAULT_KEYWORDS;

    document.title = safeTitle;
    updateOrCreateMeta("name", "description", safeDescription);
    updateOrCreateMeta("name", "keywords", safeKeywords);

    updateOrCreateMeta("property", "og:title", safeTitle);
    updateOrCreateMeta("property", "og:description", safeDescription);
    updateOrCreateMeta("property", "og:type", "website");
    updateOrCreateMeta("property", "og:url", canonical);
    updateOrCreateMeta("property", "og:image", DEFAULT_OG_IMAGE);

    updateOrCreateMeta("name", "twitter:card", "summary_large_image");
    updateOrCreateMeta("name", "twitter:title", safeTitle);
    updateOrCreateMeta("name", "twitter:description", safeDescription);
    updateOrCreateMeta("name", "twitter:image", DEFAULT_OG_IMAGE);

    upsertCanonical(canonical);
    upsertJsonLd(pathname);
  }, [title, description, keywords]);
}

function updateOrCreateMeta(attribute, value, content) {
  const selector = `meta[${attribute}="${value}"]`;
  let element = document.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertCanonical(url) {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", url);
}

function upsertJsonLd(pathname) {
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: pathname
      .split("/")
      .filter(Boolean)
      .map((segment, index, all) => ({
        "@type": "ListItem",
        position: index + 1,
        name: segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        item: `${SITE_URL}/${all.slice(0, index + 1).join("/")}`,
      })),
  };

  const jsonLd = {
    ...BASE_JSON_LD,
    "@graph": [
      ...BASE_JSON_LD["@graph"],
      ...(pathname === "/" ? [] : [breadcrumb]),
    ],
  };

  let script = document.getElementById("pis-structured-data");
  if (!script) {
    script = document.createElement("script");
    script.id = "pis-structured-data";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(jsonLd);
}