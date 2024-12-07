import React, { createContext, useContext, Children, ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Image from "next/image";

type AccordionContextType = {
  isActive: boolean;
  index: number;
  onChangeIndex: (index: number) => void;
};

const AccordionContext = createContext<AccordionContextType>({} as AccordionContextType);

const useAccordion = (): AccordionContextType => useContext(AccordionContext);

type AccordionProps = {
  children: ReactNode;
  multiple?: boolean;
  defaultIndex?: number | number[];
};

function Accordion({ children, multiple = false, defaultIndex = 0 }: AccordionProps) {
  const [activeIndex, setActiveIndex] = React.useState(multiple ? [defaultIndex] : defaultIndex);

  const onChangeIndex = (index: number) => {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (Array.isArray(currentActiveIndex) && currentActiveIndex.includes(index)) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      if (Array.isArray(currentActiveIndex)) {
        return [...currentActiveIndex, index];
      }

      return [currentActiveIndex, index];
    });
  };

  return Children.map(children, (child, index) => {
    const isActive = multiple && Array.isArray(activeIndex) ? activeIndex.includes(index) : activeIndex === index;

    return <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>{child}</AccordionContext.Provider>;
  });
}

function AccordionItem({ children, className }: { children: ReactNode; className: string }) {
  return <div className={`rounded-[3.5rem] overflow-hidden mb-5 ${className}`}>{children}</div>;
}

function AccordionHeader({ children }: { children: ReactNode }) {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`px-[2.6875rem] pt-[3rem] pb-[4.5rem] cursor-pointer transition-colors duration-500 ease-in-out  ${isActive ? "active" : ""}`}
      onClick={() => onChangeIndex(index)}
    >
      {children}
    </motion.div>
  );
}

function AccordionPanel({ children }: { children: ReactNode }) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <div className="px-[2.6875rem] pb-[5rem] ">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function AccordionBanner() {
  return (
    <section className="w-full  mx-0 my-auto text-center " id="#isencao">
      <Accordion>
        <AccordionItem className="bg-brand-200 hover:bg-brand-300 active:bg-brand-300">
          <AccordionHeader>
            <div className="flex justify-between gap-[5.875rem] items-center select-none">
              <div className="flex justify-between w-full items-center gap-[1.5rem] max-md:flex-col">
                <span className="w-full max-w-[14.0625rem] font-epilogue font-medium text-[2.375rem]">
                  Isenção de impostos
                </span>
                <span className="banner-paragraph w-full max-w-[31rem] text-start max-md:text-center ">
                  Você sabia que pode ter direito a comprar um carro zero quilômetro com isenção de impostos? Algumas
                  condições médicas e situações específicas podem conferir esse direito, incluindo pessoas idosas. No
                  entanto, o critério principal não é a idade ou a patologia em si, mas sim as sequelas físicas ou
                  motoras resultantes desses fatores.
                </span>
              </div>
              <IoIosArrowDropdownCircle color="#0D5886" className="w-10 h-10  max-md:hidden" />
            </div>
          </AccordionHeader>
          <AccordionPanel>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 justify-center mb-1 max">
              <Image
                className="w-full h-full object-cover"
                width={300}
                height={300}
                src={"/root-images-main-cards/FeiraSP.png"}
                alt={`Fotografia`}
              />
              <Image
                className="w-full h-full object-cover"
                width={300}
                height={300}
                src={"/root-images-main-cards/FeiraSP.png"}
                alt={`Fotografia`}
              />
              <Image
                className="w-full h-full object-cover"
                width={300}
                height={300}
                src={"/root-images-main-cards/FeiraSP.png"}
                alt={`Fotografia`}
              />
              <Image
                className="w-full h-full object-cover"
                width={300}
                height={300}
                src={"/root-images-main-cards/FeiraSP.png"}
                alt={`Fotografia`}
              />
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className="bg-card-black-half backdrop-blur-lg -mt-[4.375rem]  ">
          <AccordionHeader>
            <div className="flex justify-between gap-[5.875rem] items-center select-none">
              <div className="flex justify-between w-full items-center gap-[1.5rem] max-md:flex-col">
                <span className="w-full max-w-[14.0625rem] font-epilogue font-medium text-[2.375rem]">
                  Test - Drive
                </span>
                <span className="banner-paragraph w-full max-w-[31rem] text-start max-md:text-center ">
                  A MOBILITY & SHOW tem como sua atração principal uma EXCLUSIVA PISTA PARA TEST-DRIVE de veículos
                  adaptados – para condutores e não condutores – das mais variadas marcas e modelos.
                </span>
              </div>
              <IoIosArrowDropdownCircle color="#0D5886" className="w-10 h-10 max-md:hidden" />
            </div>
          </AccordionHeader>
          <AccordionPanel>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 justify-center mb-1 max">
              <Image
                className="w-full h-full object-cover"
                width={300}
                height={300}
                src={"/root-images-main-cards/FeiraSP.png"}
                alt={`Fotografia`}
              />
              <Image
                className="w-full h-full object-cover"
                width={300}
                height={300}
                src={"/root-images-main-cards/FeiraSP.png"}
                alt={`Fotografia`}
              />
              <Image
                className="w-full h-full object-cover"
                width={300}
                height={300}
                src={"/root-images-main-cards/FeiraSP.png"}
                alt={`Fotografia`}
              />
              <Image
                className="w-full h-full object-cover"
                width={300}
                height={300}
                src={"/root-images-main-cards/FeiraSP.png"}
                alt={`Fotografia`}
              />
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
