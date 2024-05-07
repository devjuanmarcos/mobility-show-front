import Image from "next/image";

export const OneImageBanner = () => {
  return (
    <div className="w-full h-full max-h-[22.25rem] max-md:max-h-[40rem] rounded-3xl relative overflow-hidden mt-7">
      <Image
        src={"/cta-images/Imagem - CTA.png"}
        alt="Imagem das costas de uma pessoa no banco do motorista"
        aria-label="Imagem das costas de uma pessoa no banco do motorista"
        width={1170}
        height={356}
        quality={100}
        className="w-full h-full object-cover"
      />
      <div className="absolute max-md:relative max-md:-mt-20 bottom-0 w-full -mb-[.0625rem]">
        <div className="w-full h-full  absolute backdrop-blur-sm bg-[#082F47]/60  rounded-t-[3.5rem] rounded-b-3xl z-10 "></div>
        <div className="px-[4.5625rem] max-md:px-6 gap-10 py-6 z-20 relative flex max-md:flex-col justify-between w-full items-center">
          <span className="title-card">Feira Única: Tudo ao seu Alcance!</span>
          <span className="w-full max-w-[31.5rem] max-md:max-w-full max-md:text-center banner-card text-start">
            Descubra uma variedade incrível de equipamentos, serviços, produtos e carros em um único local. Aproveite as
            condições especiais e benefícios exclusivos.
          </span>
        </div>
      </div>
    </div>
  );
};
