import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 8px;
  width: 100%;

  margin: 0 2vh;

  max-height: 89vh;
  overflow-y: scroll;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 8px;
`;

export const StudentList = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
