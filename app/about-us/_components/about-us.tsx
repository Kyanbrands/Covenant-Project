"use client";
import Image from "next/image";
import SectionPill from "./section-pill";
import ReusableBanner from "@/app/_components/reusable-banner";

const AboutHeroSection = () => {
  return (
    <ReusableBanner
      pillText={"About Us"}
      title=" Behind the Bank: 
            Our People, Our Purpose,
           Our Promise"
      firstImage={"/flot-one.svg"}
      secondImage={"/flot-2.svg"}
    />
  );
};

export default AboutHeroSection;
