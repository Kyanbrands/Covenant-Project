"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { faqPageData } from "../_data/faqPageData";
import SectionPill from "@/app/about-us/_components/section-pill";
const FaqPageContent = () => {
  return (
    <section className="bg-slate-50/70 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <SectionPill>Frequently Asked Questions (FAQ)</SectionPill>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find quick answers to common questions about Covenant MFB
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            — helping you bank smarter with clarity, ease, and confidence.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="flex flex-col gap-8 w-full max-w-[800px] mx-auto">
          {faqPageData.map((cat) => (
            <div key={cat.category} className="space-y-6">
              <div className="flex justify-center gap-2 mb-4">
                <span className="mt-10 inline-flex items-center rounded-full border border-green-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 sm:text-sm">
                  <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
                  {cat.category}
                </span>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {cat.questions.map((q, index) => (
                  <AccordionItem
                    key={index}
                    value={q.question}
                    className={`rounded-[17px] bg-[#FFFFFF] data-[state=open]:bg-[#F1F5EB] shadow-md data-[state=open]:shadow-none border-none px-6 py-4 h-fit`}
                  >
                    <AccordionTrigger
                      className={` flex items-center justify-between w-full text-left px-0 py-0 hover:no-underline cursor-pointer shadow-none`}
                      style={{ boxShadow: "none" }}
                    >
                      <span className="font-semibold text-base lg:text-lg text-[#034833]">
                        {q.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#727272] text-sm lg:text-base text-justify leading-7 tracking-wide pt-2 pb-1 px-0 ">
                      {q.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqPageContent;
