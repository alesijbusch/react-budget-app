import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 30px;
  padding-top: 30px;
  @media (min-width: 375px) {
    margin: 0 20px;
  }
  @media (min-width: 768px) {
    width: 600px;
    margin: 0 auto;
  }
`;

export { Container };
