import React from "react";
import { StyledBadgetCard, StyledBadgetCardInput, StyledBadgetCardButton } from "./styles";

export const BadgetCard = () => {
  return (
    <StyledBadgetCard>
      <StyledBadgetCardInput type="text" placeholder="Budget: $3000" />
      <StyledBadgetCardButton>Edit</StyledBadgetCardButton>
    </StyledBadgetCard>
  );
};
