import React from "react";
import { StyledSpentCardText } from "./styles";
import { useCurencyContext, useExpensesContext } from "contex";

export const SpentCard = () => {
  const { expenses } = useExpensesContext();
  const { curency } = useCurencyContext();

  const spent = expenses.reduce((spent, expense) => spent + +expense.cost, 0);

  return (
    <StyledSpentCardText>
      Spent so far: {curency.value}
      {spent}
    </StyledSpentCardText>
  );
};
