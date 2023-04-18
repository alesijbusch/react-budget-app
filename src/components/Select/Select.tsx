import React from "react";
import Select, { SingleValue } from "react-select";
import { SelectStyles } from "./styles";
import { CurrencyOption } from "types";
import { useCurencyContext } from "contex";

export const CustomSelect = () => {
  const { curencies, curency, setCurency } = useCurencyContext();
  const handleTips = (event: SingleValue<CurrencyOption>) => {
    if (event) {
      setCurency(event);
    }
  };
  return (
    <Select
      options={curencies}
      onChange={handleTips}
      defaultValue={curency}
      isSearchable={false}
      styles={SelectStyles}
    />
  );
};
