import React from "react";
import Image from "next/image";

interface PageBannerProps {
  pillText: string;
  title: React.ReactNode;
  backgroundSvg?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  pillText,
  title,
  backgroundSvg = "/Vector.svg",
}) => {
  return (
    <section className="relative bg-[#031407] overflow-hidden min-h-[650px] z-10  px-6 ">
      <Image
        src={backgroundSvg}
        alt="Background pattern"
        fill
        className="absolute inset-0 z-0 object-cover"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        {/* Pill Badge */}
        <span className="mt-4 inline-flex items-center rounded-full bg-[#001102] px-4 py-1.5 text-sm font-medium text-green-200 ring-1 ring-inset ring-green-400/20">
          <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
          {pillText}
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mt-8">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageBanner;
