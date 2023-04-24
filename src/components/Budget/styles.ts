import styled from "styled-components";

const StyledBudget = styled.div`
  display: grid;
  grid-gap: 20px;
`;
const BudgetApp = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: auto 100px;
  align-items: center;
`;
const BudgetGroup = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export { StyledBudget, BudgetApp, BudgetGroup };
