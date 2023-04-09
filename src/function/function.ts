import React from "react";

interface getValidateRuleProps {
  type: string;
}

export const getValidateRule = (type: string) => {
  if (type === "text") {
    return {
      required: "Enter name",
      maxLength: {
        message: "Maximum letter input 15",
        value: 15,
      },
      pattern: {
        message: "Enter only letters",
        value: /^[A-Za-z]+$/i,
      },
    };
  } else if (type === "number") {
    return {
      required: "Enter cost",
      maxLength: {
        message: "Maximum number input 5",
        value: 5,
      },
      // pattern: {
      //   message: "Enter only number",
      //   value: /^\d+$/,
      // },
      //valueAsNumber: true,
    };
  }
};
