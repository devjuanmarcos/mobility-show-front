import { TopTitleProps } from "@/@types/types";
import React from "react";

export const TopTitle: React.FC<TopTitleProps> = ({ title, topTitle }) => {
  return (
    <div className="flex flex-col w-full max-w-[32.875rem]">
      <span className="top-title">{topTitle}</span>
      <span className="title-card">{title}</span>
    </div>
  );
};
