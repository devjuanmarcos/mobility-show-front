import Image from "next/image";
import { TopTitle } from "../ui/TitleWithTopTitle";

interface ImageInterface {
  src: string;
  title: string;
  topTitle: string;
  paragraph: string;
}

export const ImageBanner = ({ src, title, topTitle, paragraph }: ImageInterface) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-start justify-between items-center ">
      <div className="grid gap-4 w-full ">
        <TopTitle topTitle={topTitle} title={title} />
        <p className="banner-card">{paragraph}</p>
      </div>
      <div className="aspect-[16/9] w-full h-full">
        <Image
          src={src}
          alt="Imagem do carro do ano 2024"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};
