import React, { ReactNode, createContext, useContext, useState } from "react";
import { Option } from "types";

interface AppContextState {
  app: Option[];
  addApp: (app: Option) => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextState>({} as AppContextState);

const useCurencyValue = () => {
  const [curencyValue, setAppValue] = useState<AppContextState>(() => {
    return {
      app: [],
      addApp: (app: Option) => {
        setAppValue((context) => ({
          ...context,
          curency: [app],
        }));
      },
    };
  });

  return curencyValue;
};

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return <AppContext.Provider value={useCurencyValue()}>{children}</AppContext.Provider>;
};
