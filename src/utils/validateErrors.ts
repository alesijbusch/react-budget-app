export const getValidateRule = (type: string) => {
  switch (type) {
    case "text":
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
    case "number":
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
    case "budget":
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
    default:
      return { required: false };
  }
};
