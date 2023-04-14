export const getValidateRule = (type: string) => {
  if (type === "text") {
    return {
      required: "Enter name",
      maxLength: {
        message: "The input has to be less than 15 characters",
        value: 15,
      },
      pattern: {
        message: "Enter a literal value",
        value: /^[A-Za-zА-Яа-я]+$/i,
      },
    };
  } else if (type === "number") {
    return {
      required: "Enter cost",
      maxLength: {
        message: "The input has to be less than 5 characters",
        value: 5,
      },
      pattern: {
        message: "Enter Numeric value",
        value: /^\d+$/,
      },
    };
  }
};
