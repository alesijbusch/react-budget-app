import React from "react";
import { StyledRemainingInput, StyledSpent } from "./styles";

export const Spent = () => {
  return (
    <StyledSpent>
      <StyledRemainingInput>Spent so far: $1000</StyledRemainingInput>
    </StyledSpent>
  );
};
