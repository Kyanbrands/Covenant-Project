"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { X, Check, Building2 } from "lucide-react";
import type { AccountData } from "@/app/_data/accounts-data";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface AccountDetailDialogProps {
  account: AccountData | null;
  isOpen: boolean;
  onClose: () => void;
}

type TabType = "overview" | "features" | "benefits" | "target-clients";

export function AccountDetailDialog({
  account,
  isOpen,
  onClose,
}: AccountDetailDialogProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  if (!account) return null;

  const tabs = [
    { id: "overview" as TabType, label: "Overview", icon: Building2 },
    { id: "features" as TabType, label: "Features" },
    { id: "benefits" as TabType, label: "Benefits" },
    { id: "target-clients" as TabType, label: "Target Clients" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-4">
            <div className="flex  flex-col items-left gap-2 text-green-600">
              <Building2 className="w-5 h-5" />
              <h3 className="font-semibold text-lg text-[#020617]">
                {account.overview.title}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {account.overview.description}
            </p>
          </div>
        );
      case "features":
        return (
          <div className="space-y-4">
            <div className="flex  flex-col items-left justify-center gap-2 text-green-600">
              <Building2 className="w-5 h-5" />
              <h3 className="font-semibold text-lg text-[#020617]">Features</h3>
            </div>
            <div className="space-y-3">
              {account.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image
                    src={"/icons/mark.svg"}
                    alt="mark-icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-muted-foreground text-[#5B5B5B]">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case "benefits":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-600">
              <Building2 className="w-5 h-5" />
              <h3 className="font-semibold text-lg">Benefits</h3>
            </div>
            <div className="space-y-3">
              {account.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image
                    src={"/icons/mark.svg"}
                    alt="mark-icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-muted-foreground text-pretty">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case "target-clients":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-600">
              <Building2 className="w-5 h-5" />
              <h3 className="font-semibold text-lg">Target Clients</h3>
            </div>
            <div className="space-y-3">
              {account.targetClients.map((client, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image
                    src={"/icons/mark.svg"}
                    alt="mark-icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-muted-foreground text-pretty">
                    {client.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:!max-w-[600px]  !max-h-[80vh] hidden lg:block rounded-2xl overflow-auto bg-[#FEFEFE]  gap-6 ">
          <DialogHeader className="">
            <div className="flex items-center justify-center">
              <DialogTitle className="text-[#1D9B5E] text-xl text-center font-semibold text-balance">
                • {account.name}
              </DialogTitle>
            </div>
          </DialogHeader>

          <div>
            <div className=" flex justify-between  items-center  py-0  ">
              {tabs.map((tab) => (
                <div
                  className={cn(
                    activeTab === tab.id
                      ? "bg-[#F1F5EB] pt-3 px-4 rounded-tl-2xl rounded-t-4xl "
                      : "p-0 rounded-2xl"
                  )}
                  key={tab.id}
                >
                  <Button
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    size="lg"
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-md rounded-full ${
                      activeTab === tab.id
                        ? "bg-[#0D4A06] hover:bg-green-700 text-[#F1F5EB]"
                        : "hover:bg-green-50  hover:text-green-700 hover:border-green-200"
                    }`}
                  >
                    {tab.icon && <tab.icon className="w-3 h-3 mr-1" />}
                    {tab.label}
                  </Button>
                </div>
              ))}
            </div>

            <div
              className={cn(
                " overflow-y-auto h-[300px] py-6 bg-[#F1F5EB] rounded-b-2xl rounded-tr-4xl px-4",
                activeTab === "target-clients" && "rounded-none "
              )}
            >
              {renderTabContent()}
            </div>
          </div>

          <div className="flex-shrink-0 pt-4">
            <Button className="w-full bg-[#A2DE49] hover:bg-green-700 text-black">
              <Building2 className="w-4 h-4 mr-2" />
              Visit any Covenant Microfinance Bank branch nearest to you to
              apply
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mobile */}
      <div className="block lg:hidden">
        <Drawer open={isOpen} onOpenChange={onClose}>
          <DrawerContent className="p-4  block lg:hidden bg-[#FEFEFE]">
            <DrawerHeader>
              <DrawerTitle className="text-[#1D9B5E] text-lg font-semibold text-center">
                • {account.name}
              </DrawerTitle>
            </DrawerHeader>

            <Accordion type="single" collapsible className="w-full">
              {tabs.map((tab) => (
                <AccordionItem key={tab.id} value={tab.id}>
                  <AccordionTrigger onClick={() => setActiveTab(tab.id)}>
                    {tab.label}
                  </AccordionTrigger>
                  <AccordionContent>{renderTabContent()}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

          
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
