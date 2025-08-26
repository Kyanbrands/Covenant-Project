import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  text: string;
}

const ProductCard = ({ image, title, text }: ProductCardProps) => {
  return (
    <div className="relative flex flex-col rounded-[30px] p-[15px] bg-white space-y-2.5 pb-20">
      <Image src={image} alt={title} width={350} height={319} />
      <h3 className="text-[#020617] font-semibold text-xl">{title}</h3>
      <p className="text-[#5B5B5B]">{text}</p>
      <div className="absolute bottom-[15px] left-[15px] w-fit flex justify-center">
        <Button className="bg-[#1D9B5E] text-white py-4 px-7.5 rounded-[14px] h-fit text-sm font-semibold">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
