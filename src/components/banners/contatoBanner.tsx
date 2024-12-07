import { FaCar } from "react-icons/fa";
import { Button } from "../button/Button";
import { IconWithTexts } from "../cards/iconWithTexts";
import { TopTitle } from "../ui/TitleWithTopTitle";
import { GiSteeringWheel } from "react-icons/gi";

export const ContatoBanner = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center gap-10 py-20 ">
      <div className="flex flex-col  w-full max-w-[57.5rem] gap-2 justify-center items-center">
        <span className="title-h1">Estamos sempre prontos para lhe atender!</span>
        <p className="banner-paragraph mb-4">
          Escolha uma das formas de contato e responderemos o mais rápido possível
        </p>
        <div className="flex flex-col gap-8 text-start ">
          <div className="flex flex-col lg:grid lg:grid-cols-2 mt-6 gap-6 justify-center items-center w-full">
            <IconWithTexts title="Email" description="diretoria.cg12@uol.com.br" link="#" icon={FaCar} />
            <IconWithTexts title="Whatsapp" description="(11) 99307-1353" link="#" icon={GiSteeringWheel} />
          </div>
        </div>
      </div>
    </div>
  );
};
