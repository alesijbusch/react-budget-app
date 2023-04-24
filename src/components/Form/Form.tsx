import React, { ChangeEvent } from "react";
import { InputGroup, StyledButton, StyledError, StyledForm } from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Input, Title } from "components";
import { useBudgetContext, useExpensesContext } from "context";
import { Expense } from "types";
import { getValidateRule } from "utils";

export const Form = () => {
  const { addExpense } = useExpensesContext();
  const { budget } = useBudgetContext();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Expense>({});

  const onSubmit: SubmitHandler<Expense> = (expense) => {
    if (budget > 0) {
      addExpense({ ...expense, id: uuidv4() });
      reset();
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title name="Add Expense" />
      <InputGroup>
        <Controller
          control={control}
          rules={getValidateRule("text")}
          render={({ field }) => <Input {...field} placeholder="enter name ..." type="text" />}
          name="name"
          defaultValue=""
        />
        {errors.name?.message && <StyledError>{errors.name.message}</StyledError>}

        <Controller
          control={control}
          rules={getValidateRule("number")}
          render={({ field }) => <Input {...field} placeholder="enter cost ..." type="text" />}
          name="cost"
          defaultValue=""
        />
        {errors.cost?.message && <StyledError>{errors.cost.message}</StyledError>}
      </InputGroup>
      <StyledButton type="submit">Done</StyledButton>
    </StyledForm>
  );
};
