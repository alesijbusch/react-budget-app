import React, { useState } from "react";
import { StyledBadgetCard, StyledBadgetCardInput, StyledBadgetCardButton } from "./styles";
import { useToggle } from "hooks/useToggle";

export const BadgetCard = () => {
  const [text, setText] = useState(0);
  const [isEditMode, toggleEditMode] = useToggle();

  // if(isEditMode){

  // }

  return (
    <StyledBadgetCard>
      <p></p>
      <StyledBadgetCardInput type="text" placeholder="Enter  budget ..." />
      <StyledBadgetCardButton onClick={toggleEditMode}>Edit</StyledBadgetCardButton>
    </StyledBadgetCard>
  );
};
