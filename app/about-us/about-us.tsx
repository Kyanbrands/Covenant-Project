"use client";
import Image from "next/image";
import SectionPill from "../../components/ui/section-pill";

const AboutHeroSection = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-[#F1FEF4] py-20">
      <Image
        src="/path1.svg"
        alt="Stylized world map"
        fill
        className="absolute inset-0 z-0 object-contain hidden md:block"
        priority
      />

      <Image
        src="/Group1.svg"
        alt="A vertical timeline of Covenant MFB's history."
        fill
        className="absolute inset-0 z-0 object-contain object-bottom  block md:hidden"
        priority
      />

      <div className="relative z-10 flex w-full max-w-6xl items-center justify-center text-center md:hidden">
        <div className="px-4">
          <SectionPill>About Us</SectionPill>

          <h1 className="font-britti tracking-tight text-[#0D1A26] text-3xl leading-tight sm:text-4xl font-bold">
            <span className="hidden sm:block">
              Behind the Bank: <br />
            </span>
            Our People,
            <br />
            Our Purpose, <br />
            Our Promise
          </h1>
        </div>
      </div>

      <div className="relative z-10 hidden w-full max-w-6xl items-center justify-center text-center md:flex">
        <div className="px-4">
          <SectionPill>About Us</SectionPill>

          <h1 className="font-britti tracking-tight text-[#0D1A26] text-4xl leading-tight sm:text-4xl lg:text-7xl font-bold">
            Behind the Bank: <br />
            Our People, Our Purpose, <br />
            Our Promise
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
