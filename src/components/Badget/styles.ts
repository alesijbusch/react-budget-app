import styled from "styled-components";

const StyledBadget = styled.div`
  display: grid;
  grid-template-columns: auto 85px;
  align-items: center;
  padding: 32px 20px;
  background: #7cc6fe;
  border-radius: 10px;
`;
const StyledBadgetInput = styled.input`
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
    color: #000000;
    opacity: 1;
  }
`;
const StyledBadgetButton = styled.button`
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
export { StyledBadget, StyledBadgetInput, StyledBadgetButton };
