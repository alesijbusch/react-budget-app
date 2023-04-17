import React from "react";
import { StyledRemainingCardText } from "./styles";
import { useBadgetContext, useCurencyContext, useExpensesContext } from "contex";

interface RemainingCardProps {
  curency: string;
  setRemaining: number;
}

export const RemainingCard = ({ curency, setRemaining }: RemainingCardProps) => {
  //const text = +setRemaining < 0 ? "Overspending by " : "Remaining: ";
  //const sumRemaining = +setRemaining < 0 ? Math.abs(+setRemaining) : +setRemaining;
  return (
    <StyledRemainingCardText>
      Remaining: {curency}
      {setRemaining}
    </StyledRemainingCardText>
  );
};

// export const RemainingCard = ({ curency, setRemaining }: RemainingCardProps) => {
//   const text = +setRemaining < 0 ? "Overspending by " : "Remaining: ";
//   const sumRemaining = +setRemaining < 0 ? Math.abs(+setRemaining) : +setRemaining;
//   return (
//     <StyledRemainingCardText>
//       {text}
//       {curency}
//       {sumRemaining}
//     </StyledRemainingCardText>
//   );
// };
