import React from "react";
import { StyledExpensesBadget } from "./styles";

interface ExpensesBadgetProps {
  sum: string;
}

export const ExpensesBadget = ({ sum }: ExpensesBadgetProps) => {
  return <StyledExpensesBadget>{sum}</StyledExpensesBadget>;
};
