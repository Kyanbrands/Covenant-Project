"use client";
import Image from "next/image";
import ReusableBanner from "@/app/_components/reusable-banner";
import PageBanner from "../../_components/reusable-hero-banner";

const pageTitle = (
  <>
    Your Most Important Questions,
    <br />
    Answered Quickly and Clearly
  </>
);
const FaqHeroSection = () => {
  return <PageBanner pillText={"FAQs"} title={pageTitle} />;
};

export default FaqHeroSection;
