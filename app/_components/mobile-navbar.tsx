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

type SubItem = { text: string; route: string };
type NavItem = {
  icon: string;
  text: string;
  route?: string;
  isDropdown?: boolean;
  subItems?: SubItem[];
};

type MobileNavbarProps = {
  navItems: NavItem[];
};

const navItems = [
  {
    icon: "/icons/about_icon.svg",
    text: "About Us",
    route: "/about-us",
  },
  {
    icon: "/icons/products_icon.svg",
    text: "Products",
    isDropdown: true,
    subItems: [
      { text: "Products", route: "/services/products" },
      { text: "Current Accounts", route: "/services/current" },
      { text: "Loans & Advances", route: "/services/loans" },
      { text: "Digital Banking", route: "/services/digital" },
    ],
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

const MobileNavbar = ({ navItems }: MobileNavbarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleAccordionToggle = (itemName: string) => {
    setOpenAccordion(openAccordion === itemName ? null : itemName);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setOpenAccordion(null);
  };

  return (
    <>
      <button
        className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
        onClick={() => setIsDrawerOpen(true)}
        aria-label="Open navigation menu"
      >
        <MenuIcon className="w-8 h-8" />
      </button>
      <Drawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        direction="right"
      >
        <DrawerContent className="bg-[#0D4A06]/30 backdrop-blur-lg text-[#DBE4C4] px-6 pt-8 pb-4 w-full fixed right-0 top-0 h-full flex flex-col">
          <DialogTitle />
          <DrawerHeader className="flex flex-row justify-between items-center mb-8 p-0">
            <Image
              src="/icons/logo.svg"
              alt="company logo"
              width={56}
              height={53}
            />
            <DrawerClose asChild>
              <button
                onClick={closeDrawer}
                className="text-white text-2xl ml-4"
              >
                <X />
              </button>
            </DrawerClose>
          </DrawerHeader>
          <nav className="flex flex-col">
            {navItems.map((item) =>
              item.isDropdown && item.subItems ? (
                <div key={item.text} className="flex flex-col">
                  <div
                    className="flex items-center gap-3 py-3 px-2 rounded-xl hover:bg-[#164623]/30 transition cursor-pointer mb-2"
                    onClick={() => handleAccordionToggle(item.text)}
                  >
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={18}
                      height={18}
                    />
                    <span className="font-medium text-base">{item.text}</span>
                    <ChevronDown
                      className={`h-[16px] w-[16px] ml-auto transition-transform duration-300 ${
                        openAccordion === item.text ? "rotate-0" : "rotate-180"
                      }`}
                    />
                  </div>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      openAccordion === item.text
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="flex flex-col  pt-2 pl-8">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.route}
                            href={subItem.route}
                            className="py-2 text-gray-300 hover:text-white"
                            onClick={closeDrawer}
                          >
                            {subItem.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.route!}
                  key={item.text}
                  className="flex items-center gap-3 py-3 px-2 rounded-xl hover:bg-[#164623]/30 transition"
                  onClick={closeDrawer}
                >
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={18}
                    height={18}
                  />
                  <span className="font-medium text-base">{item.text}</span>
                </Link>
              )
            )}
          </nav>
          <div className="mt-8">
            <Link
              href="/contact-us"
              className="font-jakarta border border-[#164623] bg-[#0D4A06] shadow-lg text-[#F0F1F4] py-3 px-6 font-medium text-base flex items-center rounded-full w-full justify-center"
              onClick={() => setIsDrawerOpen(false)}
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
