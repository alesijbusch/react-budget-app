import styled from "styled-components";

const StyledExpensesItem = styled.li`
  display: grid;
  grid-template-columns: auto 76px 15px;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 2px solid #ccd5ff;
`;
const ExpensesTitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
`;
const ExpensesClose = styled.div`
  cursor: pointer;
`;
export { StyledExpensesItem, ExpensesTitle, ExpensesClose };
