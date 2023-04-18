import React from "react";
import Select, { SingleValue } from "react-select";
import { SelectStyles } from "./styles";
import { Option } from "types";

interface CustomSelectProps {
  options: Option[];
  setTips: (value: SingleValue<Option>) => void;
  defaultValue: Option;
}

export const CustomSelect = ({ options, setTips, defaultValue }: CustomSelectProps) => {
  return (
    <Select
      options={options}
      onChange={setTips}
      defaultValue={defaultValue}
      styles={SelectStyles}
    />
  );
};
