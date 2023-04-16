import React from "react";
import { StyledSpentCardText } from "./styles";

interface SpentCardProps {
  curency: string;
  setSpent: number;
}

export const SpentCard = ({ curency, setSpent }: SpentCardProps) => {
  return (
    <StyledSpentCardText>
      Spent so far: {curency}
      {setSpent}
    </StyledSpentCardText>
  );
};
