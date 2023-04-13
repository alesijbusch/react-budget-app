import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-gap: 30px;
  margin-bottom: 50px;
`;
const InputGroup = styled.div`
  display: grid;
  grid-gap: 20px;
`;
const StyledInput = styled.input`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border: 0;
  outline: 0;
  padding: 15px 20px;
  width: 100%;
  ::placeholder {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    opacity: 1;
    color: #999999;
  }
`;
const StyledButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding: 15px;
  color: #ffffff;
  background: #23c9ff;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`;
const StyledError = styled.span`
  font-size: 13px;
  color: red;
`;

export { StyledForm, StyledInput, InputGroup, StyledButton, StyledError };
