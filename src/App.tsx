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

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // Immediately scroll to top when changing routes
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Check initial hash state
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isAboutOverview = currentHash === "#about-overview";
  const isAcademicTeam = currentHash === "#academic-team";
  const isChairmansMessage = currentHash === "#chairmans-message";
  const isPrincipalsMessage = currentHash === "#principals-message";
  const isMindsBehindPIS = currentHash === "#minds-behind-pis";
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
  const isEnquireNow = currentHash === "#enquire-now";
  const isContactUs =
    currentHash === "#contact-us" || currentHash === "#lets-talk";

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
        ) : isMindsBehindPIS ? (
          <MindsBehindPIS />
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
        ) : isEnquireNow ? (
          <EnquireNow />
        ) : isContactUs ? (
          <ContactUs />
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
