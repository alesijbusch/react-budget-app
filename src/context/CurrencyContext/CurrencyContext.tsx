import React, { createContext, useContext, useState } from "react";
import { Currency } from "config";
import { ChildrenContextProvider, CurrencyOption } from "types";
import { CurrencyContextState } from "./types";

const currencies: CurrencyOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];

const CurrencyContext = createContext<CurrencyContextState>({} as CurrencyContextState);

const useCurrencyValue = () => {
  const [currencyValue, setCurrencyValue] = useState<CurrencyContextState>(() => {
    return {
      currency: currencies[0],
      currencies: currencies,
      setCurrency: (currency: CurrencyOption) => {
        setCurrencyValue((context) => ({
          ...context,
          currency: currency,
        }));
      },
    };
  });

  return currencyValue;
};

export const useCurrencyContext = () => useContext(CurrencyContext);

export const CurrencyContextProvider = ({ children }: ChildrenContextProvider) => {
  return <CurrencyContext.Provider value={useCurrencyValue()}>{children}</CurrencyContext.Provider>;
};
