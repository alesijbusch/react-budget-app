import React from "react";
import { StyledExpensesBadget } from "./styles";

interface ExpensesBadgetProps {
  sum: string;
  currency: string;
}

export const ExpensesBadget = ({ sum, currency }: ExpensesBadgetProps) => {
  return (
    <StyledExpensesBadget>
      {currency}
      {sum}
    </StyledExpensesBadget>
  );
};
