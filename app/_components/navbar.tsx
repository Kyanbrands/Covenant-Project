"use client";
import { ChevronDown, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavbar from "./mobile-navbar";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/app/_data/nav-items";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <>
      <nav
        className={` sticky hidden lg:block top-0 w-full z-50 py-3 lg:py-5  transition-colors duration-300 ${
          isHomePage
            ? "bg-[url('/hero-banner.svg')] bg-cover bg-top"
            : "bg-[#001102]"
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Image
            src={"/icons/logo.svg"}
            alt="company logo"
            width={56}
            height={53}
          />
          <div className="hidden lg:flex items-center gap-7.5 text-[#DBE4C4] text-[13px]">
            {NAV_ITEMS.map((item) =>
              item.isDropdown ? (
                <div
                  key={item.route}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <div className="flex items-center gap-1.5">
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={14}
                      height={15}
                    />
                    <p>{item.text}</p>
                  </div>
                  <ChevronDown className="h-[14px] w-[14px] mt-0.5" />
                </div>
              ) : (
                <Link
                  key={item.route}
                  href={item.route}
                  className="flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={14}
                    height={15}
                  />
                  <p>{item.text}</p>
                </Link>
              )
            )}
          </div>
          <div className="hidden lg:flex w-fit relative">
            <div className="absolute top-0 left-5 max-w-3/4 mx-auto w-full h-[2px] bg-gradient-to-r from-transparent via-[#75FF8C] to-transparent rounded-full z-40" />
            <Link
              href="/contact-us"
              className="font-jakarta border border-[#164623] bg-[#0D4A06] shadow-lg text-[#F0F1F4] py-2.5 px-4.5 h-fit font-medium text-[13px] flex items-center rounded-full relative z-20"
            >
              <Image
                src="/icons/flash_icon.svg"
                alt="flash icon"
                width={10}
                height={12}
                className="inline mr-2"
              />
              Create Account
            </Link>
          </div>
          <MobileNavbar />
        </div>
        {/* Mobile Navbar */}
      </nav>
      <nav
        className={` fixed block lg:hidden top-0 w-full z-50 py-3 lg:py-5  duration-300`}
      >
        <div className="mx-10 py-2 px-6 rounded-full bg-[#001102] flex justify-between items-center">
          <Image
            src={"/icons/logo.svg"}
            alt="company logo"
            width={40}
            height={40}
          />

          <MobileNavbar />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
