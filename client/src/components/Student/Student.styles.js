import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
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
  font-size: 16px;
  color: slategray;
`;

export const InfoValue = styled.p`
  font-size: 16px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Icons = styled.div`
  color: slategray;

  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    transform: translateY(-2px);
    color: black;
  }
`;
