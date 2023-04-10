import React, { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange, type, placeholder }: InputProps) => {
  return <StyledInput value={value} onChange={onChange} type={type} placeholder={placeholder} />;
};
