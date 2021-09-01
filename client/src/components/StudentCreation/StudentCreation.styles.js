import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 8px;
  width: 100%;

  margin: 0 2vh;

  min-height: 89vh;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 7vh 0;
`;

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 75%;
  align-self: center;

  padding: 5px;
  margin: 5px;
`;

export const SubmitButton = styled.button`
  align-self: center;

  height: 4vh;
  width: 13vh;
`;
