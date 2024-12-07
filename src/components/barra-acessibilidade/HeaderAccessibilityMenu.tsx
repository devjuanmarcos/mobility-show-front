"use client";

import Image from "next/image";
import { useHtmlFontSize } from "@/context/HtmlFontSizeContext";
import { fontSize } from "@/utils/fontSize";
import { VLibrasIntegration } from "./VLibrasIntegration";
import { ChangeThemeButton } from "./ChangeThemeButton";
import { useTheme } from "next-themes";
import { useVLibrasUrl } from "@/context/VLibrasUrlContext";

export const HeaderAccessibilityMenu = ({ productId }: { productId?: string }) => {
  const { setHtmlFontSize } = useHtmlFontSize();
  const { theme, setTheme } = useTheme();
  const { VLibrasUrl, setVLibrasUrl } = useVLibrasUrl();

  function ativarVLibras() {
    if (productId && VLibrasUrl.productId == productId && VLibrasUrl.url) {
      document.body.classList.add("overflow-hidden", "h-screen");

      setVLibrasUrl((prev) => ({
        ...prev,
        librasModalOpen: true,
      }));
      return;
    }

    const vlibrasButton = document.querySelector('[vw-access-button="true"]') as HTMLElement;

    if (vlibrasButton) {
      vlibrasButton.click();
    }
  }

  return (
    <section className="py-2 lg:px-[9%] px-[5%] w-full bg-var-accessibility-header-bg flex max-sm:justify-center">
      <div className="flex items-center justify-center py-1 border border-var-accessibility-header-icon px-2 rounded-md gap-2 w-fit">
        <VLibrasIntegration />

        <p className="font-medium text-sm font-montserrat underline text-var-accessibility-header-icon">
          Acessibilidade
        </p>

        <div className="flex justify-center items-end  gap-2 -mb-[1px] border-x border-var-accessibility-header-icon px-2">
          <button onClick={() => fontSize.decrease(setHtmlFontSize)} aria-label="Diminuir tamanho da fonte">
            <span aria-hidden="true" className="text-var-accessibility-header-icon">
              A-
            </span>
          </button>

          <button onClick={() => fontSize.normalize(setHtmlFontSize)} aria-label="Normalizar tamanho da fonte">
            <span aria-hidden="true" className="text-var-accessibility-header-icon">
              aA
            </span>
          </button>

          <button onClick={() => fontSize.increase(setHtmlFontSize)} aria-label="Aumentar tamanho da fonte">
            <span aria-hidden="true" className="text-var-accessibility-header-icon">
              A+
            </span>
          </button>
        </div>

        <ChangeThemeButton />

        <button className="" onClick={ativarVLibras} aria-label="Abrir ferramenta de libras">
          <div className="relative w-[1.08rem] h-[1.08rem]">
            <Image
              src={`/icons/libras-icon-${theme === "light" ? "escuro" : "claro"}.svg`}
              width={25}
              height={25}
              alt="Ícone do símbolo da Linguagem Brasileira de Sinais"
            />
          </div>
        </button>
      </div>
    </section>
  );
};
