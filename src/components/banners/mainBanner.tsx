"use client";

import { Button } from "../button/Button";
import { Countdown } from "../cards/countdown";
import { ImageWithArrowTitle } from "../cards/imageWithArrowTitle";
import AccordionBanner from "./accordionBanner";
import { OneImageBanner } from "./oneImageBanner";
import { PartnersBanner } from "./partnersBanner";
import { SimpleBanner } from "./simpleBanner";
import { VideoBanner } from "./videoBanner";

export const MainBanner = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center gap-10 py-20">
      <div className="flex flex-col  w-full max-w-[57.5rem] gap-2 justify-center items-center">
        <span className="title-h1">
          A Mobility & Show: Mais que uma feira, um <span className="title-h1-bold">movimento pela inclusão!</span>
        </span>
        <p className="banner-paragraph mb-4">
          Uma Exposição de Automóveis, Veículos e Adaptações, Equipamentos e Serviços para Pessoas com Deficiência e
          Familiares, Idosos e Pessoas com Mobilidade Reduzida e Diversidade Assistiva.
        </p>
        <Button variant="normal" text="Inscreva-se" width="fit" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 justify-center mb-1 max">
        <ImageWithArrowTitle
          image="/root-images-main-cards/FeiraSP.png"
          title1="Feira de"
          title2="São Paulo"
          link="acervo/SP"
        />
        <ImageWithArrowTitle
          image="/root-images-main-cards/FeiraRJ.png"
          title1="Feira do"
          title2="Rio de Janeiro"
          link="acervo/RJ"
        />
        <ImageWithArrowTitle
          image="/root-images-main-cards/FeiraREC.png"
          title1="Feira de"
          title2="Recife"
          link="acervo/REC"
        />
        <ImageWithArrowTitle
          image="/root-images-main-cards/FeiraRP.png"
          title1="Feira de"
          title2="Ribeirão Preto"
          link="acervo/RMRP"
        />
      </div>

      <Countdown targetDate={"2024-12-31T23:59:59"} />

      <div className=" bg-card-black backdrop-blur-lg px-[4rem] max-md:px-4 py-[4rem] mt-[1.126rem] rounded-2xl">
        <SimpleBanner />
      </div>

      <PartnersBanner />

      <div className=" bg-card-black  backdrop-blur-lg px-[4rem] max-md:px-4 py-[4rem] mt-[3.75rem] rounded-2xl w-full">
        <VideoBanner />
      </div>

      <div id="isencao" />
      <AccordionBanner />

      <OneImageBanner />
    </div>
  );
};
