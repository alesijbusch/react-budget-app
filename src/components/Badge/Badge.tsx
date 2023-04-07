import React from "react";
import { StyledBadge, StyledBadgeInput, StyledBadgeButton } from "./styles";

export const Badge = () => {
  return (
    <StyledBadge>
      <StyledBadgeInput>Budget: $3000</StyledBadgeInput>
      <StyledBadgeButton>Edit</StyledBadgeButton>
    </StyledBadge>
  );
};
