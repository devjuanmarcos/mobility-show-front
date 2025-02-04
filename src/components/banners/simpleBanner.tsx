import { FaCar, FaCoins } from "react-icons/fa";
import { IconWithTexts } from "../cards/iconWithTexts";
import { TopTitle } from "../ui/TitleWithTopTitle";
import { GiSteeringWheel } from "react-icons/gi";

export const SimpleBanner = () => {
  return (
    <div className="flex flex-col gap-8 text-start ">
      <TopTitle
        topTitle="MOBILITY SHOW 2025"
        title="Você encontrará um universo de possibilidades para a inclusão e acessibilidade!"
      />
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 justify-center items-center w-full">
        <IconWithTexts
          title="Mais de 50 expositores"
          description="Incluindo marcas de automóveis com isenção de impostos"
          link="#"
          icon={FaCar}
        />
        <IconWithTexts
          title="Teste drive com pista exclusiva"
          description="Para condutores e não conduntores das mais variadas marcas e modelos"
          link="#"
          icon={GiSteeringWheel}
        />
        <IconWithTexts
          title="Isenção aos impostos"
          description="Descubra seu direito à isenção de impostos na compra de um carro 0km"
          link="#"
          icon={FaCoins}
        />
      </div>
    </div>
  );
};
