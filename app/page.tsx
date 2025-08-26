import React from "react";
import HeroSection from "./_components/hero-section";
import WhyChooseUs from "./_components/why-choose-us";
import NumbersSection from "./_components/numbers-section";
import ProductsSection from "./_components/products-section";
import Testimonials from "./_components/testimonials";
import NewsSection from "./_components/news-section";
import Gallery from "./_components/gallery";
import FAQSection from "./_components/faq-section";
import Carousel from "./_components/carousel";

const page = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <NumbersSection />
      <ProductsSection />
      <Testimonials />
      <NewsSection />
      <Gallery />
      <FAQSection />
      <Carousel />
    </div>
  );
};

export default page;
