import styled from "styled-components";

const StyledBadgetCard = styled.div`
  display: grid;
  grid-template-columns: auto 85px;
  align-items: center;
  padding: 32px 20px;
  background: #7cc6fe;
  border-radius: 10px;
`;
const StyledBadgetCardInput = styled.input`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-right: 15px;
  border: 0;
  outline: 0;
  background: #7cc6fe;
  color: #000;
  ::placeholder {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
    opacity: 1;
  }
`;
const StyledBadgetCardButton = styled.button`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding: 10px 30px;
  border: 0;
  outline: 0;
  background: #ffffff;
  border-radius: 10px;
  cursor: pointer;
`;
export { StyledBadgetCard, StyledBadgetCardInput, StyledBadgetCardButton };
