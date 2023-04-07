import React from "react";
import { StyledTitle } from "./styles";

interface TitleProps {
  name: string;
}

export const Title = ({ name }: TitleProps) => {
  return <StyledTitle>{name}</StyledTitle>;
};
