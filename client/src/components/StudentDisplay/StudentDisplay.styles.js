import styled from "styled-components";

export const Wrapper = styled.div`
  background: lightsteelblue;
  border: 1px solid black;

  width: 100%;
  height: 99.8vh;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
    box-shadow: inset 0 0 10px white;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: royalblue;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-top: 8px;
`;

export const StudentList = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

