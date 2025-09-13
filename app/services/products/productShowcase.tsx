"use client";

import Image from "next/image";
import Link from "next/link";
import SectionPill from "@/components/ui/section-pill";

const productsData = [
  {
    title: "Accounts",
    description:
      "Enjoy flexible and secure accounts designed for individuals and businesses. From savings to current and fixed deposits, manage your money with ease and convenience.",
    imageSrc: "/Frame1.png",
    link: "/services/products/accounts",
  },
  {
    title: "Loans",
    description:
      "Access quick, reliable loans with flexible repayment options. Whether personal, business, or project financing, our loan products are designed to support you.",
    imageSrc: "/Frame2.png",
    link: "/services/products/loans",
  },
  {
    title: "Mobile Banking",
    description:
      "Bank on the go with our mobile services. Transfer funds, pay bills, and manage your account 24/7 from your phone — simple, fast, and secure.",
    imageSrc: "/Frame3.png",
    link: "/services/products/mobile-banking",
  },
  {
    title: "Digital Banking",
    description:
      "Experience the ease of banking online. From internal transfers to secure electronic payments, our digital platforms keep you connected to your money anytime, anywhere.",
    imageSrc: "/Frame4.png",
    link: "/services/products/digital-banking",
  },
  {
    title: "ATM",
    description:
      "Withdraw cash, check balances, and make quick transactions at any of our ATMs nationwide. Convenient, secure access to your money whenever you need it.",
    imageSrc: "/Frame5.png",
    link: "/services/products/atm",
  },
  {
    title: "POS",
    description:
      "Grow your business with reliable POS services. Accept payments instantly, access real-time settlements, and manage transactions easily.",
    imageSrc: "/Frame6.png",
    link: "/services/products/pos",
  },
];

const ProductsShowcase = () => {
  return (
    <section className="bg-[#F9FFF5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionPill>Products</SectionPill>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Discover financial products designed to help you save, grow, and
            achieve more
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            — with convenience, security, and trusted support every step.
          </p>
        </div>

        {/* Grid of Product Cards */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {productsData.map((product) => (
            <div
              key={product.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-900/5"
            >
              <div className="relative aspect-[4/4] w-full">
                <Image
                  src={product.imageSrc}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-gray-900">
                  {product.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-800">
                  {product.description}
                </p>
                <Link
                  href={product.link}
                  className="mt-6 inline-block w-35 rounded-lg bg-green-600 px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
