import React from "react";
import Select, { SingleValue } from "react-select";
import { SelectStyles } from "./styles";
import { CurrencyOption } from "types";
import { useCurrencyContext } from "context";

export const CustomSelect = () => {
  const { currencies, currency, setCurrency } = useCurrencyContext();
  const handleTips = (event: SingleValue<CurrencyOption>) => {
    if (event) {
      setCurrency(event);
    }
  };
  return (
    <Select
      options={currencies}
      onChange={handleTips}
      defaultValue={currency}
      isSearchable={false}
      styles={SelectStyles}
    />
  );
};
