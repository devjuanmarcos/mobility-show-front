import { IconType } from "react-icons";

type IconWithTextsProps = {
  title: string;
  description: string;
  link: string;
  icon: IconType;
};

type ImageWithArrowTitleType = {
  image: string;
  title1: string;
  title2: string;
  link?: string;
};

type TopTitleProps = {
  topTitle: string;
  title: string;
};

export type { IconWithTextsProps, ImageWithArrowTitleType, TopTitleProps };
