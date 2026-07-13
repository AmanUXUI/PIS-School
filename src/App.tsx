import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export default function App() {
  // const [currentHash, setCurrentHash] = useState(window.location.hash);

  // const validHashes = [
  //   "",
  //   "#",
  //   "#about-overview",
  //   "#academic-team",
  //   "#chairmans-message",
  //   "#principals-message",
  //   // "#minds-behind-pis",
  //   "#curriculum",
  //   "#early-years",
  //   "#primary",
  //   "#lower-secondary",
  //   "#upper-secondary",
  //   "#advance-as-a-level",
  //   "#campus-life",
  //   "#admissions",
  //   "#boarding",
  //   "#careers",
  //   "#enquire-now",
  //   "#contact-us",
  //   "#lets-talk",
  //   "#get-in-touch",
  //   "#blog",
  //   "#newsletter",
  // ];

  // useEffect(() => {
  //   const handleHashChange = () => {
  //     setCurrentHash(window.location.hash);
  //     window.scrollTo(0, 0);
  //   };

  //   window.addEventListener("hashchange", handleHashChange);
  //   handleHashChange();

  //   return () => window.removeEventListener("hashchange", handleHashChange);
  // }, []);

  // const isAboutOverview = currentHash === "#about-overview";
  // const isAcademicTeam = currentHash === "#academic-team";
  // const isChairmansMessage = currentHash === "#chairmans-message";
  // const isPrincipalsMessage = currentHash === "#principals-message";
  // // const isMindsBehindPIS = currentHash === "#minds-behind-pis";
  // const isCurriculum = currentHash === "#curriculum";
  // const isEarlyYears = currentHash === "#early-years";
  // const isPrimary = currentHash === "#primary";
  // const isLowerSecondary = currentHash === "#lower-secondary";
  // const isUpperSecondary = currentHash === "#upper-secondary";
  // const isAdvanceYears = currentHash === "#advance-as-a-level";
  // const isCampusLife = currentHash === "#campus-life";
  // const isAdmissions = currentHash === "#admissions";
  // const isBoarding = currentHash === "#boarding";
  // const isCareers = currentHash === "#careers";
  // const isBlog = currentHash === "#blog";
  // const getinTounch = currentHash === "#get-in-touch";
  // const isNewsletter = currentHash === "#newsletter";
  // const isContactUs =
  //   currentHash === "#contact-us" || currentHash === "#lets-talk";

  // const isArticle =
  //   currentHash !== "" &&
  //   currentHash !== "#" &&
  //   !validHashes.includes(currentHash);

  // const is404 = false;
  return (
    <>
      <RouterProvider router={router} />

      {/* <div className="relative min-h-screen">
        <Navbar />
        <main>
          {isAboutOverview ? (
            <AboutOverview />
          ) : isAcademicTeam ? (
            <AcademicTeam />
          ) : isChairmansMessage ? (
            <ChairmansMessage />
          ) : isPrincipalsMessage ? (
            <PrincipalsMessage />
          ) : isCurriculum ? (
            <CurriculumPage />
          ) : isEarlyYears ? (
            <EarlyYears />
          ) : isCampusLife ? (
            <CampusLife />
          ) : isPrimary ? (
            <PrimaryYears />
          ) : isLowerSecondary ? (
            <LowerSecondary />
          ) : isUpperSecondary ? (
            <UpperSecondary />
          ) : isAdvanceYears ? (
            <AdvanceYears />
          ) : isAdmissions ? (
            <Admissions />
          ) : isBoarding ? (
            <BoardingPage />
          ) : isCareers ? (
            <Careers />
          ) : isBlog ? (
            <Blog />
          ) : getinTounch ? (
            <GetInTouch />
          ) : isContactUs ? (
            <ContactUs />
          ) : isArticle ? (
            <ArticlePage />
          ) : isNewsletter ? (
            <Newsletter />
          ) : is404 ? (
            <NotFound />
          ) : (
            <>
              <HeroSlider />
              <CambridgeSection />
              <AboutSection />
              <WhatSetsUsApart />
              <ImageGallery />
              <BoardingSection />
              <PavnaPromise />
              <LeadershipSlider />
              <LifeAtPavnaGallery />
              <ParentTestimonials />
              <DistinguishedGuests />
              <FooterBanner />
              <FAQSection />
            </>
          )}
        </main>
        <Footer />
      </div> */}
    </>
  );
}
