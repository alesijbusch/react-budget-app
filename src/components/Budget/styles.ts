import styled from "styled-components";

const BudgetBody = styled.div`
  display: grid;
  grid-gap: 20px;
`;
const BudgetHeader = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: auto 100px;
  align-items: center;
`;
const StyledBudget = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export { BudgetBody, BudgetHeader, StyledBudget };
