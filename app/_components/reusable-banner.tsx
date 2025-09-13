"use client";
import Image from "next/image";
import SectionPill from "../about-us/_components/section-pill";

interface ReusableBannerProps {
  pillText: string;
  title: string;
  firstImage: string;
  secondImage: string;
}

const ReusableBanner = ({
  pillText,
  title,
  firstImage,
  secondImage,
}: ReusableBannerProps) => {
  return (
    <section className="flex min-h-[600px]  w-full bg-[url('/path2830.png')] items-center justify-center bg-[#F1FEF4]  ">
      <div className="relative z-10  px-6 w-full max-w-6xl items-center justify-center text-center ">
        <Image
          src={secondImage}
          alt="A vertical timeline of Covenant MFB's history."
          width={250}
          height={250}
          className=" z-0  absolute  md:left-[620px] lg:left-[850px] bottom-[-130px]  hidden md:block "
          priority
        />
        {/* Mobile */}
        <Image
          src={firstImage}
          alt="A vertical timeline of Covenant MFB's history."
          width={150}
          height={150}
          className=" z-0  object-bottom absolute right-[290px] bottom-[-100px] block md:hidden "
          priority
        />
        <div className=" relative">
          <SectionPill>{pillText}</SectionPill>

          <h1 className="font-britti tracking-tight text-[#0D1A26] leading-tight text-2xl lg:text-[40px] max-w-[230px] lg:max-w-[430px] mx-auto font-bold">
            {title}
          </h1>
        </div>
        <Image
          src={firstImage}
          alt="A vertical timeline of Covenant MFB's history."
          width={250}
          height={250}
          className=" z-0 left-[60px] absolute bottom-[-150px]    hidden md:block "
          priority
        />
        {/* Mobile */}
        <Image
          src={secondImage}
          alt="A vertical timeline of Covenant MFB's history."
          width={120}
          height={120}
          className=" z-0 absolute left-[290px] bottom-[-100px] object-contain object-bottom block md:hidden "
          priority
        />
      </div>
    </section>
  );
};

export default ReusableBanner;
