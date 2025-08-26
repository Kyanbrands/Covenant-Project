import React from "react";
import Title from "./title";
import ProductCard from "./product-card";

const productsData = [
  {
    title: "Banking Services",
    text: "Enjoy reliable savings, current, and fixed deposit accounts tailored for individuals and businesses, with accessible customer service and seamless day-to-day banking.",
    image: "/Frame 268.svg",
  },
  {
    title: "Digital & Electronic Banking",
    text: "Access your account anytime with mobile and online banking — make transfers, pay bills, and manage your finances securely, wherever you are.",
    image: "/Frame 269.svg",
  },
  {
    title: "Loan & Credit Services",
    text: "We provide flexible loan options for salary earners, businesses, and individuals — with fair terms, fast approval, and minimal stress.",
    image: "/Frame 270.svg",
  },
  {
    title: "Investment & Financial Advisory",
    text: "Grow your money with our savings plans, fixed deposits, and expert advice — all designed to help you reach your financial goals confidently.",
    image: "/coin-wooden-table-blurred-nature 1.svg",
  },
  {
    title: "Merchant & Payment Services",
    text: "Accept payments easily with our POS solutions, transfer services, and tailored merchant support to help your business operate smoothly and grow.",
    image: "/person-paying-with-its-credit-card 1.svg",
  },
];

const ProductsSection = () => {
  return (
    <section className="bg-[#F1F5EB] py-6 lg:py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-6 px-4">
        <Title text="Products" borderColor="[#1D9B5E]/40" textColor="#1D9B5E" />
        <div className="max-w-[950px]">
          <h2 className="font-semibold text-[28px] text-[#020617]">
            Discover financial products designed to help you save, grow, and
            achieve more — with convenience, security, and trusted support every
            step.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {productsData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
