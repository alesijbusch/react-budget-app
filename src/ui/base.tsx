import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 30px;
  padding-top: 30px;
  @media (min-width: 375px) {
    margin: 0 20px;
  }
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

export { Container, BudgetApp, BudgetGroup };
