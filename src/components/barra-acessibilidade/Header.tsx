"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiUser } from "react-icons/fi";
import { Button } from "../button/Button";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isMounted) {
    return;
  }

  return (
    <section
      className={`py-4 lg:px-[9%] px-[5%]  w-full grid lg:grid-cols-3 max-sm:grid-cols-1 grid-cols-2 justify-between items-center ${isScrolled && theme == "dark" ? "bg-var-accessibility-header-bg/80 backdrop-blur-md" : "bg-var-accessibility-header-bg backdrop-blur-0  "}`}
    >
      <div className="lg:flex hidden gap-6">
        <Link href={"#mob-show"} className="flex gap-2 justify-start items-center w-fit">
          <FiUser />
          <span className="nav-bar-option w-max">Mobility & Show</span>
        </Link>

        <Link href={"#isencao"} className="flex gap-2 justify-start items-center w-fit ">
          <FiUser />
          <span className="nav-bar-option w-max">Isenção</span>
        </Link>

        <Link href={"#isencao"} className="lg:flex gap-2 justify-start items-center w-fit hidden ">
          <FiUser />
          <span className="nav-bar-option w-max">Test drive</span>
        </Link>
      </div>

      <div className="flex justify-center">
        <Image
          width={183}
          height={56}
          quality={100}
          src={theme == "light" ? "/logos/mobility-show-logo-escuro.png" : "/logos/mobility-show-logo.png"}
          alt="Logo da Mobility & Show"
          onClick={() => (window.location.href = "/")}
          className="cursor-pointer"
        />
      </div>

      <div className="flex gap-6 justify-end max-sm:hidden">
        <Link
          href={"/contato"}
          className="transition-colors duration-300 button  bg-none hover:bg-brand-500 border border-brand-400 p-3 rounded-2xl text-center text-brand-400 hover:text-text-button "
        >
          Entrar em contato
        </Link>
        {/* <Button variant="normal" text="Inscreva-se" width="full" /> */}
      </div>
    </section>
  );
};
