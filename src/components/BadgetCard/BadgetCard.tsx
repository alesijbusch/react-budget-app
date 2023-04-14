import React, { useState } from "react";
import {
  StyledBadgetCard,
  StyledBadgetCardInput,
  StyledBadgetCardButton,
  StyledBadgetCardForm,
} from "./styles";
import { useToggle } from "hooks/useToggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { getValidateRule } from "function/getValidateRule";

interface BadgetCardProps {
  budget: string;
}

export const BadgetCard = () => {
  const [text, setText] = useState(0);
  const [isEditMode, toggleEditMode] = useToggle(true);

  const {
    handleSubmit,
    register,
    // reset,
    formState: { errors },
  } = useForm<BadgetCardProps>();
  const onSubmit: SubmitHandler<BadgetCardProps> = (data) => {
    console.log(data);

    setText({data.budget});
    // reset();
  };
  const p = `Budget: ${JSON.stringify(text)}`;
  return (
    <>
      <StyledBadgetCardForm onSubmit={handleSubmit(onSubmit)}>
        <StyledBadgetCard>
          {isEditMode ? (
            p
          ) : (
            <>
              <StyledBadgetCardInput
                {...register("budget", getValidateRule("number"))}
                type="text"
                placeholder="Enter  budget ..."
              />
              {errors.budget?.message && <p>{errors.budget.message}</p>}
            </>
          )}

          <StyledBadgetCardButton onClick={toggleEditMode}>
            {isEditMode ? "Edit" : "Save"}
          </StyledBadgetCardButton>
        </StyledBadgetCard>
      </StyledBadgetCardForm>
    </>
  );
};
