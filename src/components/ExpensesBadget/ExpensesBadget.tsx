import React from "react";
import { StyledExpensesBadget } from "./styles";

interface ExpensesBadgetProps {
  sum: string;
  curency: string;
}

export const ExpensesBadget = ({ sum, curency }: ExpensesBadgetProps) => {
  return (
    <StyledExpensesBadget>
      {curency}
      {sum}
    </StyledExpensesBadget>
  );
};
