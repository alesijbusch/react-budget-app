import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  border: 0;
  outline: 0;
  ::placeholder {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    opacity: 1;
    color: #999999;
  }
`;

export { StyledInput };
