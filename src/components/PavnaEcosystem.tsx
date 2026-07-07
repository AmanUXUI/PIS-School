import { FC, useState } from "react";

// Types for data structures
interface EcosystemContent {
  traditional: string[];
  pavna: string[];
}

interface SectionData {
  id: "students" | "parents" | "teachers";
  title: string;
  circleClass: string;
  mobileImage: string;
  content: EcosystemContent;
}

const ecosystemData: SectionData[] = [
  {
    id: "students",
    title: "Students",
    circleClass:
      "bg-[rgba(243,121,32,0.8)] border-4 border-[#ccc2ad] top-0 left-1/2 -translate-x-1/2 pt-16 justify-center",
    mobileImage: "https://iili.io/qtGMKI2.webp",
    content: {
      traditional: [
        "Homework, assignments and assessment prep",
        "Academic rigor is centered around rote learning",
      ],
      pavna: [
        "Learner led communities",
        "Socio-Emotional learnings being imparted. Meaningful and impactful conversations",
      ],
    },
  },
  {
    id: "parents",
    title: "Parents",
    circleClass:
      "bg-[rgba(253,185,19,0.8)] border-4 border-[#ccca97] bottom-4 left-2 pt-24 pl-10 justify-start",
    mobileImage: "https://iili.io/qtGM2e4.webp",
    content: {
      traditional: ["PTMs and Report cards"],
      pavna: [
        "Parent learning interventions",
        "Parents co-architecting via feedback loops and co-curricular participation",
      ],
    },
  },
  {
    id: "teachers",
    title: "Teachers",
    circleClass:
      "bg-[rgba(0,174,239,0.8)] border-4 border-[#82b7cc] bottom-4 right-2 pt-24 pl-28 justify-start",
    mobileImage: "https://iili.io/qtGM3ml.webp",
    content: {
      traditional: [
        "Fixed curriculum",
        "Academic rigor is centered around rote learning",
      ],
      pavna: [
        "Expertise Learning - The Cambridge curriculum emphasizes learning by doing through hands-on activities, real-world projects, and reflective learning",
        "SEEL (Social Emotional and Ethical Learning) - focus on self and environment and community engagement",
        "Co-Curricular, Super-Curricular activities as essentials",
      ],
    },
  },
];

const PavnaEcosystem: FC = () => {
  // Tracks active section for desktop layout
  const [activeSection, setActiveSection] = useState<
    "students" | "parents" | "teachers"
  >("students");

  return (
    <div className="relative overflow-hidden flex flex-col items-center py-8 md:py-10 bg-[#fdfdfd] font-sans">
      {/* Paper Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Container */}
      <div className="relative w-full px-3 xl:px-4 flex flex-col z-[1] max-w-[1300px]">
        {/* Heading */}
        <h3 className="text-[#201a5b] text-center text-[33px] md:text-[42px] font-bold py-4">
          Pavna School Ecosystem
        </h3>

        {/* ============================================== */}
        {/* ===== DESKTOP LAYOUT (lg:flex) =============== */}
        {/* ============================================== */}
        <div className="hidden lg:flex w-full justify-center items-center gap-4 relative mt-16 h-[520px] scale-[0.95] origin-top z-[1]">
          <img
            src="https://imgh.in/host/8ydgny"
            alt="Pavna School Ecosystem Desktop"
          />
        </div>

        {/* ============================================== */}
        {/* ===== MOBILE / TABLET LAYOUT (lg:hidden) ===== */}
        {/* ============================================== */}
        <div className="flex lg:hidden flex-col items-center gap-4 relative z-[1] mt-4 w-full">
          <img
            src="https://iili.io/qtGMzdb.png"
            className="mb-2 max-w-full"
            alt="Ecosystem Diagram Map"
          />

          <div className="w-full flex flex-col gap-5 max-w-[400px]">
            {ecosystemData.map((section) => (
              <div
                key={section.id}
                className="transition-all opacity-100 px-2 w-full"
              >
                <img
                  src={section.mobileImage}
                  className="w-full px-5 md:px-0"
                  alt={section.title}
                />

                {/* Information Info Box Container */}
                <div className="rounded-lg border border-black/15 bg-[#fcfcfc] p-4 relative flex flex-col items-start gap-2 -mt-[12%] shadow-sm mx-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="75"
                    height="73"
                    viewBox="0 0 75 73"
                    fill="none"
                    className={`absolute -top-7 left-1/2 -translate-x-1/2`}
                  >
                    <g clipPath="url(#clipMobileIcon)">
                      <path
                        d="M39.842 61.8323C37.9727 60.0172 36.1858 58.269 34.394 56.528C34.0382 56.1794 33.7868 55.9338 33.2726 55.5614C32.8934 55.2812 32.0775 54.7027 31.8886 55.1326C31.7726 55.5068 31.7413 55.7913 32.3043 56.4502C33.7665 58.1452 35.4592 59.6393 37.1312 61.1296C38.6084 62.4448 39.7536 63.4276 41.1249 64.5228C41.7654 65.0342 42.2417 64.9167 42.5454 64.3016C42.8178 63.7495 43.108 63.1884 43.2625 62.5874C43.832 60.4243 44.3391 58.2503 44.872 56.0727C44.94 55.8028 45.0102 55.5977 45.0423 55.261C45.0769 54.8523 45.126 54.5589 44.7257 54.4119C44.3461 54.2688 44.0672 54.711 43.9754 54.9645C43.1583 57.0638 41.5506 61.4283 41.4081 61.6368C40.7807 60.3222 40.1725 59.1157 39.6305 57.8806C35.8971 49.2657 32.81 40.5229 31.8548 31.37C31.0986 24.1249 31.2401 16.9974 32.5278 9.99924C32.601 9.58524 32.6376 9.15674 32.6643 8.74261C32.7092 8.18267 32.6286 7.8745 32.3266 7.80522C31.7486 7.74779 31.6167 8.1112 31.4845 8.38997C31.2121 8.94207 31.0637 9.56836 30.9171 10.1748C29.0472 18.315 29.2072 26.6714 30.5104 35.1445C31.8473 43.841 35.1228 52.0693 39.1128 60.1213C39.3394 60.5397 39.8034 61.6161 39.842 61.8323Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clipMobileIcon">
                        <rect
                          width="55.387"
                          height="50.1567"
                          fill="white"
                          transform="matrix(0.825678 0.564142 0.564142 -0.825678 0 41.4133)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <h3 className="text-[#9b8c8c] text-[18px] font-bold mb-1 leading-[35px]">
                    Traditional Schools:
                  </h3>
                  <ul className="pl-4 list-none text-[#9b8c8c] text-base line-height-[1.375]">
                    {section.content.traditional.map((item, index) => (
                      <li
                        key={index}
                        className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.375rem] before:w-1 before:h-1 before:bg-[#8c8c8c] before:rounded-full"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-[18px] font-bold text-[#202547] mb-2 leading-[35px]">
                    Pavna international school:
                  </h3>
                  <ul className="pl-4 list-none text-[#333333] text-base line-height-[1.375]">
                    {section.id === "teachers" ? (
                      <>
                        <li className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.4rem] before:w-1.5 before:h-1.5 before:bg-[#202547] before:rounded-full">
                          <strong className="text-[#00a99d]">
                            Expertise Learning -
                          </strong>{" "}
                          The Cambridge curriculum emphasizes "learning by
                          doing" through hands-on activities, real-world
                          projects, and reflective learning.
                        </li>
                        <li className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.4rem] before:w-1.5 before:h-1.5 before:bg-[#202547] before:rounded-full">
                          <strong className="text-[#00a99d]">
                            SEEL (Social Emotional and Ethical Learning) -
                          </strong>{" "}
                          focus on self and environment and community engagement
                        </li>
                        <li className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.4rem] before:w-1.5 before:h-1.5 before:bg-[#202547] before:rounded-full">
                          Co-Curricular, Super-Curricular activities as
                          essentials
                        </li>
                      </>
                    ) : (
                      section.content.pavna.map((item, index) => (
                        <li
                          key={index}
                          className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.4rem] before:w-1.5 before:h-1.5 before:bg-[#202547] before:rounded-full"
                        >
                          {item}
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PavnaEcosystem;
