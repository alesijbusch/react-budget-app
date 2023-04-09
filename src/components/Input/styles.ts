import styled from "styled-components";

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

export { StyledInput };
