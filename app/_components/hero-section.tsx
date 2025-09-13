import { Button } from "@/components/ui/button";
import { ArrowRight, MenuIcon, Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/hero-banner.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center ",
      }}
      className="min-h-[400px] md:min-h-[550px] px-6 lg:px-4 flex flex-col items-center justify-center gap-8 md:gap-12 "
    >
      <div className="flex items-center justify-center w-full mt-[7rem] lg:mt-[4rem]  ">
        <p className="text-[#FFFFFF] font-medium text-sm bg-[#FFFFFF]/10 py-[6px] pr-4 pl-1 w-fit rounded-full h-fit">
          <span className="bg-[#D2F801] text-[#0F2028] rounded-full py-1 px-3 mr-2">
            New
          </span>
          Payment cards upgraded
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-0 justify-between w-full mt-0 lg:mt-6">
        {/* <div> */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-[#FFFFFF] max-w-[560px] mt-2 lg:mt-6 space-y-[11px] mx-auto">
            <h2 className="text-[32px] lg:text-[60px] leading-tight font-bold">
              Empowering Dreams,
              <br className="hidden lg:block" />{" "}
              <span className="text-[#A2DD49]">Financing Growth</span>
            </h2>
            <p className="text-[#FFFFFF]/70 font-medium text-base lg:text-lg">
              For over 2 decades, Covenant Microfinance Bank Ltd. has empowered
              individuals and businesses to achieve their financial goals
              through tailored banking solutions, accessible loans, and smart
              financial tools.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Button className="bg-[#1D9B5E] text-[#ffffff] rounded-full text-base w-full lg:w-48 h-13 lg:h-14 flex items-center justify-center">
                Learn More
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
              <Button className="bg-[#ffffff] text-[#0A1519]/70 rounded-full text-base w-full lg:w-48 h-13 lg:h-14 flex items-center justify-center">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="">
          <Image
            src={"/items.svg"}
            alt="Items"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
