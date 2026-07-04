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
          {/* SVG Connecting Arrows */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute pointer-events-none h-[430px] w-[650px] top-[10%] left-[18%] z-10 translate-x-[3%] translate-y-[12%]"
            viewBox="0 0 635 557"
            fill="none"
          >
            <g clipPath="url(#clip0_604_6404)">
              <path
                d="M608.051 89.7978C604.423 96.4258 600.917 102.772 597.436 109.126C596.737 110.389 596.245 111.282 595.608 113.008C595.123 114.285 594.148 117.015 595.529 117.216C596.691 117.254 597.527 117.125 598.939 115.043C602.561 109.648 605.421 103.76 608.286 97.934C610.814 92.7876 612.668 88.8258 614.656 84.1444C615.585 81.9579 614.857 80.7128 612.854 80.3317C611.056 79.9903 609.219 79.606 607.379 79.6327C600.747 79.6904 594.135 79.9314 587.491 80.1031C586.666 80.119 586.024 80.0789 585.039 80.2465C583.846 80.4619 582.969 80.5487 582.881 81.7833C582.786 82.9568 584.276 83.4003 585.074 83.4636C591.729 84.1487 605.49 85.3177 606.201 85.5576C602.974 88.3217 600.039 90.9489 596.968 93.4127C575.507 110.466 553.149 125.805 527.862 135.482C507.846 143.143 487.425 148.197 466.426 149.939C465.186 150.05 463.935 150.275 462.733 150.517C461.101 150.82 460.29 151.281 460.342 152.181C460.655 153.845 461.799 153.937 462.702 154.094C464.5 154.435 466.407 154.373 468.255 154.319C492.988 153.336 516.662 146.497 539.725 136.364C563.396 125.966 584.133 110.492 603.778 93.1504C604.783 92.1954 607.467 90.0714 608.051 89.7978Z"
                fill="black"
              />
            </g>
            <path
              d="M132.635 31.9629C140.097 32.5843 147.255 33.2109 154.409 33.8095C155.835 33.9354 156.842 34.0226 158.653 33.8796C160 33.7878 162.851 33.5302 162.442 32.0752C161.981 30.9088 161.509 30.14 159.048 29.6751C152.69 28.5077 146.217 28.3152 139.795 28.0886C134.125 27.8926 129.799 27.8315 124.774 27.9607C122.427 28.0212 121.626 29.2982 122.14 31.4494C122.602 33.3799 123.043 35.3694 123.851 37.1768C126.731 43.7094 129.765 50.14 132.751 56.6326C133.117 57.4415 133.355 58.0946 133.925 58.9942C134.626 60.0775 135.077 60.9052 136.216 60.44C137.304 60.0088 137.065 58.3369 136.781 57.519C134.554 50.6313 129.73 36.5007 129.64 35.6896C133.483 37.6439 137.079 39.3705 140.587 41.305C164.956 54.8954 188.179 70.1407 207.597 90.8152C222.968 107.18 236.186 125.113 246.695 145.099C247.323 146.276 248.057 147.412 248.786 148.492C249.752 149.971 250.51 150.567 251.29 150.113C252.642 149.058 252.235 147.886 251.991 146.922C251.529 144.991 250.66 143.134 249.824 141.33C238.4 117.312 222.202 96.9616 203.326 78.6899C183.953 59.9351 161.302 46.3536 137.449 34.6876C136.168 34.1211 133.129 32.4181 132.635 31.9629Z"
              fill="black"
            />
            <g clipPath="url(#clip1_604_6404)">
              <path
                d="M66.9251 402.367C81.1357 408.372 84.7523 412.244 98.3799 417.997C101.101 419.134 109.29 422.851 112.542 424.756C114.97 426.15 121.479 428.814 119.741 430.645C118.103 431.989 115.252 429.137 110.391 427.552C97.8509 423.405 95.0023 421.316 82.9809 415.68C72.3681 410.697 66.3741 408.217 57.1728 403.34C52.8756 401.062 51.8172 398.877 54.2178 396.085C56.3735 393.581 62.7488 389.208 65.4617 387.214C75.1896 379.965 65.9998 386.343 75.8972 379.254C77.1192 378.366 90.0323 366.375 91.6922 365.538C93.7182 364.544 95.1103 363.706 96.9026 365.475C98.6223 367.143 89.7734 372.945 88.697 373.924C79.9369 382.32 61.6795 395.293 60.9674 396.443C69.3878 397.051 87.6427 400.759 95.4317 401.086C149.639 403.123 199.489 399.123 249.322 385.78C288.769 375.219 351.376 349.69 358.884 340.285C360.838 339.082 363.421 337.626 365.496 336.662C368.278 335.314 369.304 335.988 370.44 337.405C372.227 340.267 370.316 340.599 369.214 341.836C366.509 343.387 365.773 343.405 363.011 345.369C326.975 363.954 282.811 385.692 235.599 395.887C187.145 406.354 133.219 409.003 81.2643 404.521C78.5149 404.189 68.1436 402.135 66.9251 402.367Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_604_6404">
                <rect
                  width="160.494"
                  height="149.146"
                  fill="white"
                  transform="matrix(0.319447 -0.947604 -0.947604 -0.319447 582.766 217.092)"
                />
              </clipPath>
              <clipPath id="clip1_604_6404">
                <rect
                  width="328.833"
                  height="268.598"
                  fill="white"
                  transform="translate(279.551 573.379) rotate(-148.225)"
                />
              </clipPath>
            </defs>
          </svg>

          {/* Left Column (Students & Parents Text Blocks) */}
          <div className="flex flex-col justify-between relative z-[1] -mr-4 h-[400px] w-[320px]">
            {/* Students Card Segment */}
            <div
              onMouseEnter={() => setActiveSection("students")} // Added hover trigger here
              className={`transition-all duration-300 flex flex-col items-start gap-3 z-[2] -mt-24 p-3 rounded-xl border cursor-pointer ${
                activeSection === "students"
                  ? "bg-white shadow-md border-neutral-100 opacity-100 scale-[1.02]"
                  : "border-transparent opacity-60"
              }`}
            >
              <h3 className="text-[#9b8c8c] text-[18px] font-bold leading-[35px]">
                Traditional Schools:
              </h3>
              <ul className="pl-4 list-none relative text-[#9b8c8c] text-base line-height-[1.375]">
                {ecosystemData[0].content.traditional.map((item, index) => (
                  <li
                    key={index}
                    className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.375rem] before:w-1 before:h-1 before:bg-[#8c8c8c] before:rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="text-[18px] font-bold leading-[35px] text-[#202547]">
                Pavna Schools:
              </h3>
              <ul className="pl-4 list-none relative text-[#333333] text-base line-height-[1.375]">
                {ecosystemData[0].content.pavna.map((item, index) => (
                  <li
                    key={index}
                    className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.4rem] before:w-1.5 before:h-1.5 before:bg-[#202547] before:rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Parents Card Segment */}
            <div
              onMouseEnter={() => setActiveSection("parents")} // Added hover trigger here
              className={`transition-all duration-300 flex flex-col items-start gap-2 z-[2] -mb-8 p-3 rounded-xl border cursor-pointer ${
                activeSection === "parents"
                  ? "bg-white shadow-md border-neutral-100 opacity-100 scale-[1.02]"
                  : "border-transparent opacity-60"
              }`}
            >
              <h3 className="text-[#9b8c8c] text-[18px] font-bold leading-[35px]">
                Traditional Schools:
              </h3>
              <ul className="pl-4 list-none relative text-[#9b8c8c] text-base line-height-[1.375]">
                {ecosystemData[1].content.traditional.map((item, index) => (
                  <li
                    key={index}
                    className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.375rem] before:w-1 before:h-1 before:bg-[#8c8c8c] before:rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="text-[18px] font-bold leading-[35px] text-[#202547]">
                Pavna Schools:
              </h3>
              <ul className="pl-4 list-none relative text-[#333333] text-base line-height-[1.375]">
                {ecosystemData[1].content.pavna.map((item, index) => (
                  <li
                    key={index}
                    className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.4rem] before:w-1.5 before:h-1.5 before:bg-[#202547] before:rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center: Venn Diagram Elements Wrapper */}
          <div className="w-[460px] h-[460px] shrink-0 relative z-[1]">
            {ecosystemData.map((sec) => (
              <div
                key={sec.id}
                onMouseEnter={() => setActiveSection(sec.id)} // Circles still handle hover if needed
                className={`w-[250px] h-[250px] rounded-full flex absolute cursor-pointer transition-all duration-300 z-10 ${sec.circleClass} `}
              >
                <span className="font-bold text-2xl tracking-wide text-[#202547]">
                  {sec.title}
                </span>
              </div>
            ))}

            {/* Center Absolute Logo Shield */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-3 flex items-center justify-center pointer-events-none z-[30] w-32 h-32">
              <img
                src="https://iili.io/qtjzssa.png"
                alt="Pavna Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column (Teachers Content Window) */}
          <div className="flex flex-col justify-start relative z-[1] pt-5 -ml-4 h-[400px] w-[340px]">
            <div
              onMouseEnter={() => setActiveSection("teachers")} // Added hover trigger here
              className={`transition-all duration-300 flex flex-col items-start gap-2 p-3 rounded-xl border cursor-pointer ${
                activeSection === "teachers"
                  ? "bg-white shadow-md border-neutral-100 opacity-100 scale-[1.02]"
                  : "border-transparent opacity-60"
              }`}
            >
              <h3 className="text-[#9b8c8c] text-[18px] font-bold leading-[35px]">
                Traditional Schools:
              </h3>
              <ul className="pl-4 list-none relative text-[#9b8c8c] text-base line-height-[1.375]">
                {ecosystemData[2].content.traditional.map((item, index) => (
                  <li
                    key={index}
                    className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.375rem] before:w-1 before:h-1 before:bg-[#8c8c8c] before:rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="text-[18px] font-bold leading-[35px] text-[#202547]">
                Pavna Schools:
              </h3>
              <ul className="pl-4 list-none relative text-[#333333] text-base line-height-[1.375]">
                <li className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.4rem] before:w-1.5 before:h-1.5 before:bg-[#202547] before:rounded-full">
                  <strong className="text-[#00a99d] underline underline-offset-2 decoration-1">
                    Expertise Learning -
                  </strong>{" "}
                  The Cambridge curriculum emphasizes "learning by doing"
                  through hands-on activities, real-world projects, and
                  reflective learning.
                </li>
                <li className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.4rem] before:w-1.5 before:h-1.5 before:bg-[#202547] before:rounded-full">
                  <strong className="text-[#00a99d] underline underline-offset-2 decoration-1">
                    SEEL (Social Emotional and Ethical Learning) -
                  </strong>{" "}
                  focus on self and environment and community engagement
                </li>
                <li className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.4rem] before:w-1.5 before:h-1.5 before:bg-[#202547] before:rounded-full">
                  Co-Curricular, Super-Curricular activities as essentials
                </li>
              </ul>
            </div>
          </div>
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
                    Pavna Schools:
                  </h3>
                  <ul className="pl-4 list-none text-[#333333] text-base line-height-[1.375]">
                    {section.id === "teachers" ? (
                      <>
                        <li className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.4rem] before:w-1.5 before:h-1.5 before:bg-[#202547] before:rounded-full">
                          <strong className="text-[#00a99d] underline underline-offset-2 decoration-1">
                            Expertise Learning -
                          </strong>{" "}
                          The Cambridge curriculum emphasizes "learning by
                          doing" through hands-on activities, real-world
                          projects, and reflective learning.
                        </li>
                        <li className="relative mb-1.5 before:content-[''] before:absolute before:-left-4 before:top-[0.4rem] before:w-1.5 before:h-1.5 before:bg-[#202547] before:rounded-full">
                          <strong className="text-[#00a99d] underline underline-offset-2 decoration-1">
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
