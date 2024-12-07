import { TopTitle } from "../ui/TitleWithTopTitle";

export const VideoBanner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-start justify-between items-center ">
      <div className="grid gap-4 w-full ">
        <TopTitle topTitle="Explore a MOBILITY & SHOW" title="Transformando Vidas com Mobilidade e Inclusão!" />
        <p className="banner-card">
          {`A MOBILITY & SHOW é uma exposição de automóveis, veículos adaptados, equipamentos e serviços para pessoas com
          deficiência, familiares e grupos diversos, como idosos, obesos, pessoas de alta e baixa estatura, acidentados
          e gestantes. Lançada no Brasil em 2015, em São Paulo/SP, a mostra segue os moldes da "Mobility Road Show", uma
          feira estabelecida há mais de 40 anos em Londres, Inglaterra.`}
        </p>
      </div>
      <div className=" aspect-[16/9] w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/OffwB06W0GI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
