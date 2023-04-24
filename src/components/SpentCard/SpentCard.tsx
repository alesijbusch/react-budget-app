import React from "react";
import { StyledSpentCardText } from "./styles";
import { useCurrencyContext, useExpensesContext } from "context";

export const SpentCard = () => {
  const { expenses } = useExpensesContext();
  const { currency } = useCurrencyContext();

  const spent = expenses.reduce((spent, expense) => spent + +expense.cost, 0);

  return (
    <StyledSpentCardText>
      Spent so far: {currency.value}
      {spent}
    </StyledSpentCardText>
  );
};
