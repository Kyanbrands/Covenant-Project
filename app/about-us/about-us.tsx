'use client';
import Image from 'next/image';

const AboutHeroSection = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-[#F1FEF4] py-20">
      <Image
        src="/path1.svg"
        alt="Stylized world map"
        fill
        className="absolute inset-0 z-0 object-cover hidden lg:block"
        priority
      />

      <Image
        src="/Group1.svg"
        alt="A vertical timeline of Covenant MFB's history."
        fill
        className="absolute inset-0 z-0 object-contain  block lg:hidden"
        priority
      />

      <div className="relative z-10 flex w-full max-w-6xl items-center justify-center text-center">
        <div className="px-4">
          <span className="mb-4 inline-flex items-center rounded-full border border-green-300 bg-white/80 px-3 py-1.5 text-xs font-medium text-green-700 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
            <span className="mr-2 hidden h-2 w-2 rounded-full bg-green-500 sm:block"></span>
            About Us
          </span>
          <h1 className="font-britti tracking-tight text-[#0D1A26] text-3xl leading-tight sm:text-4xl lg:text-5xl font-bold">
            <span className="hidden sm:block">
              Behind the Bank: <br />
            </span>
            Our People, Our Purpose, <br />
            Our Promise
          </h1>
        </div>
        
      </div>
    </section>
  );
};

export default AboutHeroSection;