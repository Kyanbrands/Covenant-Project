import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface NewsCardProps {
  title: string;
  text: string;
  date: string;
  image: string;
}

const NewsCard = ({ title, text, date, image }: NewsCardProps) => {
  return (
    <div className="bg-white p-4 rounded-2xl lg:max-w-[600px] flex flex-col md:flex-row gap-4">
      <Image
        src={image}
        alt={title}
        height={223}
        width={229}
        className="object-cover rounded-lg  w-full
      lg:w-fit"
      />
      <div>
        <h3 className="font-semibold text-lg lg:text-2xl text-[#020617] mb-2">
          {title}
        </h3>
        <p className="text-[#64748B] text-base mb-2">{text}</p>
        <div className="flex items-center justify-between mt-4">
          <Button className="bg-[#1D9B5E] text-white py-4 px-7.5 rounded-[14px] h-fit text-sm font-semibold">
            Read More
          </Button>
          <span className="text-gray-400 text-sm">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
