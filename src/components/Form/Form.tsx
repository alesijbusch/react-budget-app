import React, { ChangeEvent, useState } from "react";
import { InputGroup, StyledButton, StyledForm, StyledInput } from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Title } from "../Title/Title";
import { v4 as uuidv4 } from "uuid";
import { getValidateRule } from "../../function/function";
import { FormValue } from "../../types";
import { Input } from "../Input/Input";

export const Form = () => {
  const addExpense = (data: FormValue) => {
    return {
      ...data,
      id: uuidv4(),
    };
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      name: "",
      cost: "",
    },
  });

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    console.log(addExpense(data));
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title name="Add Expense" />
      <InputGroup>
        <Controller
          control={control}
          rules={getValidateRule("text")}
          render={({ field }) => (
            <Input
              value={field.value}
              onChange={(e: ChangeEvent<HTMLInputElement>) => field.onChange(e)}
              placeholder="enter name ..."
              type="text"
            />
          )}
          name="name"
          defaultValue=""
        />
        {errors.name?.message && <span>{errors.name.message}</span>}

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

        {errors.cost?.message && <span>{errors.cost.message}</span>}
      </InputGroup>
      <StyledButton type="submit">Done</StyledButton>
    </StyledForm>
  );
};
