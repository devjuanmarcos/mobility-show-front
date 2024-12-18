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
        {/* <Button variant="normal" text="Inscreva-se" width="fit" /> */}
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 justify-center mb-1 max">
        <ImageWithArrowTitle image="/acervo/sp/IMG_4932.JPG" title1="Mobility & Show São Paulo" link="/acervo/sp" />
        <ImageWithArrowTitle
          image="/acervo/rj/IMG_1787.jpg"
          title1="Mobility & Show Rio de Janeiro"
          link="/acervo/rj"
        />
        <ImageWithArrowTitle image="/acervo/go/IMG_6463.JPG" title1="Mobility & Show Goiás" link="/acervo/go" />
        <ImageWithArrowTitle
          image="/acervo/sp/de2801cf-74bc-4dde-8436-b343b659fd79.jpg"
          title1="Mobility & Show São Paulo"
          link="/acervo/sp"
        />
      </div>

      {/* <Countdown targetDate={"2024-12-06T23:59:59"} /> */}

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
