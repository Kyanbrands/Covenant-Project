import React from "react";
import Image from "next/image";

const OneCodeAway = () => (
  <section className=" relative mt-8 lg:mt-34 px-4 lg:px-0">
    <div
      style={{
        backgroundImage: 'url("/outline-bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative overflow-visible flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full rounded-[12px] lg:rounded-[48px] min-h-[400px]  shadow-lg"
    >
      <div className="flex justify-between items-center px-4 lg:px-16">
        <div className="max-w-[400px] flex flex-col justify-center items-start w-full h-full lg:px-8">
          <h2 className="text-[#A2DE49] font-bold text-3xl lg:text-[45px] mb-4">
            Your Bank is One Code Away
          </h2>
          <p className="text-[#F1F5EB] text-base tracking-wide lg:text-base mb-8 max-w-md">
            With *6710#, your account is always within reach — fast, secure
            banking from any mobile phone.
          </p>
        </div>

        <div className="hidden lg:block lg:absolute z-20 bottom-34 right-8 h-full">
          <Image
            src="/smiling-girl.svg"
            alt="girl smiling"
            height={516}
            width={604}
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="bg-[#A2DE49] rounded-b-[12px] lg:rounded-b-[48px] absolute bottom-0 w-full py-4 lg:py-6 px-4 lg:px-14">
        <p className="text-[#001102] text-base lg:text-xl tracking-widest">
          www.covenantmfb.com.ng
        </p>
      </div>
    </div>
  </section>
);

export default OneCodeAway;
