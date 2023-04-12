import React, { MouseEventHandler } from "react";
import { StyledExpensesClose } from "./styles";
import { ReactComponent as CloseImg } from "../../assets/icons/close.svg";



export const ExpensesClose = ( onClick: any)=> {
  return (
    <StyledExpensesClose onClick={onClick}>
      <CloseImg/>
    </StyledExpensesClose>
  );
};
