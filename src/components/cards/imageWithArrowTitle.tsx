"use client";
import { ImageWithArrowTitleType } from "@/@types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export const ImageWithArrowTitle: React.FC<ImageWithArrowTitleType> = ({ image, title1, title2, link }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(link!)}
      className="w-full h-full max-w-[16.875rem] max-h-[16.875rem] aspect-square relative rounded-lg overflow-hidden cursor-pointer transition-all duration-500 group"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-black  transition-all duration-500  group-hover:bg-brand-600 group-hover:opacity-70"></div>
      <Image
        className="w-full h-full object-cover"
        width={300}
        height={300}
        src={image}
        alt={`Fotografia da ${title1} ${title2}`}
      />
      <div className="flex justify-between absolute bottom-0 px-6 pb-8 items-end w-full z-20  transition-all duration-500">
        <div className="flex flex-col text-start title-card">
          <span className="text-white">{title1}</span>
          <span className="w-max text-white">{title2}</span>
        </div>
        <IoIosArrowDroprightCircle
          color="#fff"
          className="w-8 h-8 transition-all duration-500 group-hover:translate-x-2"
        />
      </div>
    </div>
  );
};
