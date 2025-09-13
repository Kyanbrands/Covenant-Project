"use client";

import { ShieldCheck } from "lucide-react";
import SectionPill from "@/components/ui/section-pill";

const servicesData = [
  {
    title: "Banking Made Simple",
    description: "From accounts to loans, we make everyday banking easy.",
  },
  {
    title: "Solutions That Work",
    description:
      "Smart accounts, loans, cards, and digital tools built for you.",
  },
  {
    title: "All Your Banking Needs",
    description: "Secure services that grow with you, anytime, anywhere.",
  },
];

const SecureServices = () => {
  return (
    <section className="bg-slate-50/70 py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionPill>Banking Made Easy.</SectionPill>

          <h2 className="text-3xl font-bold tracking-tight text-[#FEFEFE]-900 sm:text-4xl">
            Secure Services for Everyday Banking
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-3">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl bg-[#F8F8F8] p-4 shadow-sm ring-0"
            >
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0">
                  <ShieldCheck
                    className="h-7 w-7 text-green-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-bold leading-7 text-black-900">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-black-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecureServices;
