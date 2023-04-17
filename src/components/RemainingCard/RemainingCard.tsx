import React from "react";
import { StyledRemainingCardText, StyledOverspendingText } from "./styles";
import { useBadgetContext, useCurencyContext, useExpensesContext } from "contex";

interface RemainingCardProps {
  curency: string;
  setRemaining: number;
}

export const RemainingCard = ({ curency, setRemaining }: RemainingCardProps) => {
  return (
    <>
      {setRemaining >= 0 ? (
        <StyledRemainingCardText>
          Remaining: {curency}
          {setRemaining}
        </StyledRemainingCardText>
      ) : (
        <StyledOverspendingText>
          Overspending by {curency}
          {Math.abs(setRemaining)}
        </StyledOverspendingText>
      )}
    </>
  );
};