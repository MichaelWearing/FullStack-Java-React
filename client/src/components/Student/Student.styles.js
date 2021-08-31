import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgb(240, 242, 245);
  border-radius: 5px;

  width: 75%;

  margin: 10px;
  padding: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 3vh;
  min-width: 40vh;
`;

export const InfoTitle = styled.p`
  font-size: 18px;
`;

export const InfoValue = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
