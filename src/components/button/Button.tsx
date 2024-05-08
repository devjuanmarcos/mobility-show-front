import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary" | "outline" | "normal";
  width?: "fit" | "full";
}

export const Button = ({ text, variant = "normal", width = "full" }: ButtonProps) => {
  let buttonClass = "transition-colors duration-300 button";

  switch (variant) {
    case "primary":
      buttonClass += " hover:bg-var-component-button-hover text-var-font-button bg-var-component-button-background ";
      break;

    case "secondary":
      buttonClass += " border border-var-component-button-border text-var-font-heading hover:bg-gray-200 ";
      break;

    case "normal":
      buttonClass += " bg-brand-400 hover:bg-brand-500 p-3 rounded-2xl text-center text-text-button ";
      break;

    case "outline":
      buttonClass +=
        " bg-none hover:bg-brand-500 border border-brand-400 p-3 rounded-2xl text-center text-brand-400 hover:text-text-button ";
      break;

    default:
      break;
  }

  if (width == "fit") {
    buttonClass += "w-fit px-3";
  } else if (width == "full") {
    buttonClass += "w-max ";
  }

  return <button className={buttonClass}>{text}</button>;
};
