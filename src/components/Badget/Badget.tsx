import React from "react";
import { StyledBadget, StyledBadgetInput, StyledBadgetButton } from "./styles";

export const Badget = () => {
  return (
    <StyledBadget>
      <StyledBadgetInput type="text" placeholder="Budget: $3000" />
      <StyledBadgetButton>Edit</StyledBadgetButton>
    </StyledBadget>
  );
};
