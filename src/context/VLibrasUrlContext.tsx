"use client";

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useMemo } from "react";

type VLibrasObject = {
  url: string;
  productId: string;
  librasModalOpen: boolean;
};

interface VLibrasUrlContextProps {
  VLibrasUrl: VLibrasObject;
  setVLibrasUrl: Dispatch<SetStateAction<VLibrasObject>>;
}

const VLibrasUrlContext = createContext<VLibrasUrlContextProps | undefined>(undefined);

interface VLibrasUrlProviderProps {
  children: ReactNode;
}

export const VLibrasUrlProvider: React.FC<VLibrasUrlProviderProps> = ({ children }) => {
  const [VLibrasUrl, setVLibrasUrl] = useState({} as VLibrasObject);

  const contextValue = useMemo(() => {
    return {
      VLibrasUrl,
      setVLibrasUrl,
    };
  }, [VLibrasUrl]);

  return <VLibrasUrlContext.Provider value={contextValue}>{children}</VLibrasUrlContext.Provider>;
};

export const useVLibrasUrl = () => {
  const context = useContext(VLibrasUrlContext);
  if (!context) {
    throw new Error("useVLibrasUrl must be used within a VLibrasUrlProvider");
  }
  return context;
};
