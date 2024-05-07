import Image from "next/image";
import { TopTitle } from "../ui/TitleWithTopTitle";

const logosDataTemp = [
  "/partners-logos/Logos - branco-1.png",
  "/partners-logos/Logos - branco-2.png",
  "/partners-logos/Logos - branco-3.png",
  "/partners-logos/Logos - branco-4.png",
  "/partners-logos/Logos - branco.png",
];

export const PartnersBanner = () => {
  return (
    <div className="flex flex-col gap-8 text-center items-center">
      <TopTitle topTitle="PARCEIROS" title="Conheça nossos parceiros" />
      <div className="flex flex-wrap gap-6 justify-center items-center w-full">
        {logosDataTemp.map((logo) => {
          return (
            <Image
              key={logo}
              alt="logo do nosso parceiro"
              src={logo}
              width={200}
              height={80}
              sizes="100vw"
              quality={100}
            />
          );
        })}
      </div>
    </div>
  );
};
