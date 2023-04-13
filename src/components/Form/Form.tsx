import React, { ChangeEvent } from "react";
import { InputGroup, StyledButton, StyledError, StyledForm } from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { FormValue, Input, Title, getValidateRule } from "components";
import { useExpensesContext } from "contex/ExpensesContext/ExpensesContext";

export const Form = () => {
  const { addExpense } = useExpensesContext();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValue>({});

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    addExpense({ ...data, id: uuidv4() });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title name="Add Expense" />
      <InputGroup>
        <Controller
          control={control}
          rules={getValidateRule("text")}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              placeholder="enter name ..."
              type="text"
            />
          )}
          name="name"
          defaultValue=""
        />
        {errors.name?.message && <StyledError>{errors.name.message}</StyledError>}

        <Controller
          control={control}
          rules={getValidateRule("number")}
          render={({ field }) => (
            <Input
              value={field.value}
              onChange={(e: ChangeEvent<HTMLInputElement>) => field.onChange(e)}
              placeholder="enter cost ..."
              type="number"
            />
          )}
          name="cost"
          defaultValue=""
        />
        {errors.cost?.message && <StyledError>{errors.cost.message}</StyledError>}
      </InputGroup>
      <StyledButton type="submit">Done</StyledButton>
    </StyledForm>
  );
};
