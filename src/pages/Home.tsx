import React from "react";
import HeroSlider from "../components/HeroSlider";
import CambridgeSection from "../components/CambridgeSection";
import AboutSection from "../components/AboutSection";
import WhatSetsUsApart from "../components/WhatSetsUsApart";
import ImageGallery from "../components/ImageGallery";
import BoardingSection from "../components/BoardingSection";
import PavnaPromise from "../components/PavnaPromise";
import LeadershipSlider from "../components/LeadershipSlider";
import LifeAtPavnaGallery from "../components/LifeAtPavnaGallery";
import ParentTestimonials from "../components/ParentTestimonials";
import DistinguishedGuests from "../components/DistinguishedGuests";
import FooterBanner from "../components/FooterBanner";
import FAQSection from "../components/FAQSection";
import { useSEO } from "../hooks/useSEO";

const Home = () => {
  useSEO({
    title: "Best International School in Uttar Pradesh | Pavna PIS",
    description:
      "Pavna International School, Sasni is a top international & boarding school in Uttar Pradesh, offering Cambridge Pathway curriculum from Early Years to A Level.",
    keywords:
      "Best International School in Uttar Pradesh, Top International Boarding Schools in Uttar Pradesh, Cambridge Pathway",
  });
  return (
    <div>
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
    </div>
  );
};

export default Home;
