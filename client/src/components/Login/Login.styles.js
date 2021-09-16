import styled from "styled-components";

export const Wrapper = styled.div`
  background: lightsteelblue;

  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 8vh;
  text-align: center;

  padding-top: 18vh;
`;

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Input = styled.input`
  font-size: 16px;

  width: 35%;
  height: 4vh;

  border: 0;
  border-radius: 6px;

  align-self: center;
  text-align: center;

  padding: 5px;
  margin: 2vh;
`;

export const SubmitButton = styled.button`
  align-self: center;

  border: 1px solid #bebec0;
  border-radius: 6px;
  background-color: #d8d8d9;
  font-size: 14px;

  height: 4vh;
  width: 13vh;

  margin-bottom: 2vh;

  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    transform: translateY(-2px);
    color: black;
    background: lightslategray;
  }
`;

export const CreateNewUser = styled.a`
  color: mediumblue;

  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
