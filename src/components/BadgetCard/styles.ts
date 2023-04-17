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
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    opacity: 1;
    color: rgba(255, 255, 255, 0.6);
  }
`;
const StyledBadgetCardButton = styled.button`
  padding: 10px 30px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  background: #ffffff;
  border: 0;
  border-radius: 10px;
  outline: 0;
  cursor: pointer;
`;
const StyledBadgetCardText = styled.p`
  margin-right: 15px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  background: #7cc6fe;
  color: #000;
`;
const StyledBadgetCardForm = styled.form``;
const StyledBadgetCardError = styled.p`
  width: 100%;
  font-size: 13px;
  color: red;
`;

export {
  StyledBadgetCard,
  StyledBadgetCardInput,
  StyledBadgetCardButton,
  StyledBadgetCardForm,
  StyledBadgetCardText,
  StyledBadgetCardError,
};
