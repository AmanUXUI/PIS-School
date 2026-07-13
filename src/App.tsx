import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import LeadershipSlider from "./components/LeadershipSlider";
import CambridgeSection from "./components/CambridgeSection";
import AboutSection from "./components/AboutSection";
import WhatSetsUsApart from "./components/WhatSetsUsApart";
import ImageGallery from "./components/ImageGallery";
import BoardingSection from "./components/BoardingSection";
import PavnaPromise from "./components/PavnaPromise";
import ParentTestimonials from "./components/ParentTestimonials";
import FAQSection from "./components/FAQSection";
import DistinguishedGuests from "./components/DistinguishedGuests";
import LifeAtPavnaGallery from "./components/LifeAtPavnaGallery";
import FooterBanner from "./components/FooterBanner";
import Footer from "./components/Footer";
import AboutOverview from "./components/AboutOverview";
import AcademicTeam from "./components/AcademicTeam";
import ChairmansMessage from "./components/ChairmansMessage";
import PrincipalsMessage from "./components/PrincipalsMessage";
import EarlyYears from "./components/EarlyYears";
import PrimaryYears from "./components/PrimaryYears";
import LowerSecondary from "./components/LowerSecondary";
import UpperSecondary from "./components/UpperSecondary";
import AdvanceYears from "./components/AdvanceYears";
import MindsBehindPIS from "./components/MindsBehindPIS";
import CampusLife from "./components/CampusLife";
import Admissions from "./components/Admissions";
import BoardingPage from "./components/BoardingPage";
import ContactUs from "./components/ContactUs";
import Careers from "./components/Careers";
import EnquireNow from "./components/EnquireNow";
import CurriculumPage from "./components/CurriculumPage";
import NotFound from "./components/NotFound";
import GetInTouch from "./components/GetinTounch";
import Blog from "./components/Blog";
import ArticlePage from "./components/ArticlePage";
import Newsletter from "./components/Newsletter";
export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  const validHashes = [
    "",
    "#",
    "#about-overview",
    "#academic-team",
    "#chairmans-message",
    "#principals-message",
    // "#minds-behind-pis",
    "#curriculum",
    "#early-years",
    "#primary",
    "#lower-secondary",
    "#upper-secondary",
    "#advance-as-a-level",
    "#campus-life",
    "#admissions",
    "#boarding",
    "#careers",
    "#enquire-now",
    "#contact-us",
    "#lets-talk",
    "#get-in-touch",
    "#blog",
    "#newsletter",
  ];

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isAboutOverview = currentHash === "#about-overview";
  const isAcademicTeam = currentHash === "#academic-team";
  const isChairmansMessage = currentHash === "#chairmans-message";
  const isPrincipalsMessage = currentHash === "#principals-message";
  // const isMindsBehindPIS = currentHash === "#minds-behind-pis";
  const isCurriculum = currentHash === "#curriculum";
  const isEarlyYears = currentHash === "#early-years";
  const isPrimary = currentHash === "#primary";
  const isLowerSecondary = currentHash === "#lower-secondary";
  const isUpperSecondary = currentHash === "#upper-secondary";
  const isAdvanceYears = currentHash === "#advance-as-a-level";
  const isCampusLife = currentHash === "#campus-life";
  const isAdmissions = currentHash === "#admissions";
  const isBoarding = currentHash === "#boarding";
  const isCareers = currentHash === "#careers";
  const isBlog = currentHash === "#blog";
  const getinTounch = currentHash === "#get-in-touch";
  const isNewsletter = currentHash === "#newsletter";
  const isContactUs =
    currentHash === "#contact-us" || currentHash === "#lets-talk";

  const isArticle =
    currentHash !== "" &&
    currentHash !== "#" &&
    !validHashes.includes(currentHash);

  const is404 = false;
  return (
    <div className="relative min-h-screen">
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
    </div>
  );
}
