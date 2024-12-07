import { IconWithTextsProps } from "@/@types/types";
import Link from "next/link";
import React from "react";

export const IconWithTexts: React.FC<IconWithTextsProps> = ({ title, description, link, icon }) => {
  const Icon = icon;
  return (
    <div className="flex max-lg:flex-col gap-6 max-lg:gap-2 items-center justify-start max-lg:text-center">
      <div className="w-12">
        <Icon className="w-full h-full" color="#0095E6" />
      </div>
      <div className="flex flex-col">
        <span className="title-mini-card">{title}</span>
        <span className="banner-card">{description}</span>
        <Link href={"#"} className="mt-2 underline text-brand-400 cta">
          Saiba mais
        </Link>
      </div>
    </div>
  );
};
