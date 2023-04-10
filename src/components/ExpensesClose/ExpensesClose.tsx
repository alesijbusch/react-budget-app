import React from "react";
import { StyledExpensesClose } from "./styles";
import { ReactComponent as CloseImg } from "../../assets/icons/close.svg";

export const ExpensesClose = () => {
  return (
    <StyledExpensesClose>
      <CloseImg />
    </StyledExpensesClose>
  );
};
