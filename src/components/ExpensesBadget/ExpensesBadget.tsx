import React from "react";
import { StyledExpensesBadget } from "./styles";
import { Option } from "types";

interface ExpensesBadgetProps {
  sum: string;
  curency: string[];
}

export const ExpensesBadget = ({ sum, curency }: ExpensesBadgetProps) => {
  return (
    <StyledExpensesBadget>
      {curency}
      {sum}
    </StyledExpensesBadget>
  );
};
