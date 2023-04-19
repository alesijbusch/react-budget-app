import React from "react";
import {
  StyledBadgetCard,
  StyledBadgetCardInput,
  StyledBadgetCardButton,
  StyledBadgetCardForm,
  StyledBadgetCardText,
  StyledBadgetCardError,
} from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useBadgetContext, useCurencyContext } from "contex";
import { getValidateRule } from "getValidateRule/getValidateRule";
import { useToggle } from "hooks";

interface BadgetCardProps {
  budget: number;
}

export const BadgetCard = () => {
  const { curency } = useCurencyContext();
  const { badget, setBadget } = useBadgetContext();
  const [isEditMode, toggleEditMode] = useToggle(true);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<BadgetCardProps>();

  const onSubmit: SubmitHandler<BadgetCardProps> = (data) => {
    setBadget(data.budget);
    reset();
    toggleEditMode();
  };

  return (
    <>
      {isEditMode ? (
        <StyledBadgetCard>
          <StyledBadgetCardText>
            Badget: {curency.value}
            {badget}
          </StyledBadgetCardText>
          <StyledBadgetCardButton type="button" onClick={toggleEditMode}>
            Edit
          </StyledBadgetCardButton>
        </StyledBadgetCard>
      ) : (
        <StyledBadgetCardForm onSubmit={handleSubmit(onSubmit)}>
          <StyledBadgetCard>
            <StyledBadgetCardInput
              {...register("budget", getValidateRule("budget"))}
              type="text"
              placeholder="Enter  budget ..."
            />
            <StyledBadgetCardButton>Save</StyledBadgetCardButton>
            {errors.budget?.message && (
              <StyledBadgetCardError>{errors.budget.message}</StyledBadgetCardError>
            )}
          </StyledBadgetCard>
        </StyledBadgetCardForm>
      )}
    </>
  );
};
