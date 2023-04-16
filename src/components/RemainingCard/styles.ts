import styled from "styled-components";

// const StyledRemainingCard = styled.div< setRemaining: number >`
//   padding: 36px 20px 40px;
//   /* background: #ccd5ff; */
//   background: ${+setRemaining < 0 ? "#FF0000" : "#ccd5ff"};
//   border-radius: 10px;

// `;
const StyledRemainingCardText = styled.p`
  padding: 36px 20px 40px;
  border-radius: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  background: #ccd5ff;
`;

export { StyledRemainingCardText };
