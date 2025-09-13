"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
} from "@/components/ui/drawer";
import { MenuIcon, ChevronDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog";

const navItems = [
  {
    icon: "/icons/about_icon.svg",
    text: "About Us",
    route: "/about-us",
  },
  {
    icon: "/icons/products_icon.svg",
    text: "Products",
    route: "/products",
    isDropdown: true,
  },
  {
    icon: "/icons/news_icon.svg",
    text: "News",
    route: "/news",
  },
  {
    icon: "/icons/support_icon.svg",
    text: "Support",
    route: "/support",
  },
  {
    icon: "/icons/careers_icon.svg",
    text: "Careers",
    route: "/careers",
  },
  {
    icon: "/icons/contact_icon.svg",
    text: "Contact",
    route: "/contact",
  },
];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
      >
        <Image
          src="/icons/mob-nav.svg"
          alt="flash icon"
          width={30}
          height={30}
          className="inline mr-2"
        />
      </button>
      <Drawer open={open} onOpenChange={setOpen} direction="bottom">
        <DrawerContent className="bg-[#fff] backdrop-blur-lg text-[#DBE4C4] px-6 pt-2 right-0 top-0 h-full flex flex-col w-screen">
          <DialogTitle />
          <DrawerHeader className="flex flex-row justify-between items-center mb-8 p-0">
        <Image
          src="/icons/logo.svg"
          alt="company logo"
          width={56}
          height={53}
        />
        <DrawerClose asChild>
          <button className="text-[#043B20] text-2xl ml-4">
            <X />
          </button>
        </DrawerClose>
          </DrawerHeader>
          <nav className="flex flex-col gap-6">
        {navItems.map((item, index) => (
          <Link
            href={item.route}
            key={index}
            className="flex items-center gap-3 py-2 px-2 rounded-xl hover:bg-[#F1F5EB] transition"
            onClick={() => setOpen(false)}
          >
            <Image src={item.icon} alt={item.text} width={18} height={18} />
            <span className="font-medium text-base text-[#043B20]">{item.text}</span>
            {item.isDropdown && (
          <ChevronDown className="h-[16px] w-[16px] ml-auto" />
            )}
          </Link>
        ))}
          </nav>
          <div className="mt-8">
        <Link
          href="/contact-us"
          className="font-jakarta border border-[#164623] bg-[#0D4A06] shadow-lg text-[#F0F1F4] py-3 px-6 font-medium text-base flex items-center rounded-full w-full justify-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/icons/flash_icon.svg"
            alt="flash icon"
            width={14}
            height={16}
            className="inline mr-2"
          />
          Create Account
        </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
