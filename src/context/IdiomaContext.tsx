"use client";

import React, { createContext, useContext, ReactNode, useMemo } from "react";

interface IdiomaContextProps {
  idioma: "yue" | "en" | "pt" | "es" | "ja" | "de" | "fr" | "it";
  setIdioma: React.Dispatch<React.SetStateAction<"yue" | "en" | "pt" | "es" | "ja" | "de" | "fr" | "it">>;
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const IdiomaContext = createContext<IdiomaContextProps | undefined>(undefined);

interface IdiomaProviderProps {
  children: ReactNode;
}

export const IdiomaProvider: React.FC<IdiomaProviderProps> = ({ children }) => {
  const [idioma, setIdioma] = React.useState<"yue" | "en" | "pt" | "es" | "ja" | "de" | "fr" | "it">("pt");
  const [playing, setPlaying] = React.useState(false);

  const contextValue = useMemo(() => {
    return {
      idioma,
      setIdioma,
      playing,
      setPlaying,
    };
  }, [idioma, setIdioma, setPlaying, playing]);

  return <IdiomaContext.Provider value={contextValue}>{children}</IdiomaContext.Provider>;
};

export const useIdioma = () => {
  const context = useContext(IdiomaContext);
  if (!context) {
    throw new Error("useIdioma must be used within a IdiomaProvider");
  }
  return context;
};
