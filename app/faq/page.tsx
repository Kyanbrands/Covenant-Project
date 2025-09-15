import React from "react";
import FaqHeroSection from "./_components/faq-hero";
import FaqPageContent from "./_components/faq-page-content";
import Carousel from "../_components/carousel";

function page() {
  return (
    <div>
      <FaqHeroSection />
      <FaqPageContent />
      <Carousel />
    </div>
  );
}

export default page;
