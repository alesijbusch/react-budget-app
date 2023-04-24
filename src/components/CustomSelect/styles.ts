import { StylesConfig } from "react-select";
import { CurrencyOption } from "types";

export const SelectStyles: StylesConfig<CurrencyOption, false> = {
  control: (styles) => ({
    ...styles,
    lineHeight: "15px",
    border: "1px solid #EEEEEE",
    borderRadius: "5px",
    outline: "none",
    cursor: "pointer",
  }),
  singleValue: (base) => ({
    ...base,
    fontSize: "12px",
    textAlign: "left",
    color: "#000",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    backgroundColor: "#EEEEEE",
  }),
  option: (base) => ({
    ...base,
    fontSize: "12px",
  }),
};
