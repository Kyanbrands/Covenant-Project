'use client';
import Image from 'next/image';

const AboutHeroSection = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-[#F1FEF4] py-20">
        
        <Image
            src="/path.svg"
            alt="Stylized world map"
            fill
            className="absolute inset-0 z-0 object-cover"
            priority
        />

       
        <div className="relative z-10 flex w-full max-w-6xl items-center justify-around  gap-4 lg:gap-8 align-items">
          
          <div className="w-[30%] sm:w-[35%] lg:w-[30%]">
            <Image
              src="/Illustaration.svg"
              alt="Illustration of team members on the left"
              width={400}
              height={300}
              className="h-auto w-full"
              priority
            />
          </div>
          
          <div className="px-4 text-center flex-shrink">
            <span className="mb-4 inline-flex items-center rounded-full border border-green-300 bg-white/80 px-3 py-1.5 text-xs font-medium text-green-700 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
              <span className="mr-2 hidden h-2 w-2 rounded-full bg-green-500 sm:block"></span>
              About Us
            </span>
            <h1 className="font-britti tracking-tight text-[#0D1A26] text-3xl leading-tight sm:text-4xl lg:text-5xl font-bold">
              Behind the Bank: <br />
              Our People, Our Purpose, <br />
              Our Promise
            </h1>
          </div>

          <div className="w-[30%] sm:w-[35%] lg:w-[30%]">
            <Image
              src="/Illustration2.svg"
              alt="Illustration of team members on the right"
              className="h-auto w-full "
              width={400}
              height={300}
              priority
            />
          </div>
        </div>
       
    </section>
  );
};

export default AboutHeroSection;