import React from "react";
import Title from "./title";
import Image from "next/image";

const NumbersSection = () => {
  return (
    <section className="py-6 lg:py-16 bg-[#033224]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-6 px-4">
        <Title
          text="Convenant MFB In Numbers"
          borderColor="[#A2DE49]"
          textColor="#A2DE49"
        />
        <div className="max-w-[950px]">
          <h2 className="font-semibold text-xl lg:text-[28px] text-[#F1F5EB]">
            Our numbers tell the story. From lives impacted to transactions
            processed, these figures reflect our commitment to trust, growth and
            every service
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-around w-full max-w-[1000px]">
          <Image src={"/clients.svg"} alt="Clients" width={161} height={157} />
          <Image
            src={"/Group 256.svg"}
            alt="Clients"
            width={161}
            height={157}
          />
          <Image
            src={"/clients (1).svg"}
            alt="Clients"
            width={161}
            height={157}
          />
          <Image
            src={"/clients (2).svg"}
            alt="Clients"
            width={161}
            height={157}
          />
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
