import Link from "next/link";
import React from "react";
import NewsHeroSection from "../_components/news-hero";
import BlogList from "../_components/blog-list";
import Carousel from "../_components/carousel";

const page = () => {
  return (
    <div>
      <NewsHeroSection />
      <BlogList />
      <Carousel />
    </div>
  );
};

export default page;
