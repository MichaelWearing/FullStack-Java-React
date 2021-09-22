import styled from "styled-components";

export const Wrapper = styled.div`
  background: royalblue;
  border: 1px solid black;

  width: 75%;
  height: 99.8vh;
`;

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin: 7vh 0;
`;

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  font-size: 16px;

  width: 45%;
  height: 3vh;

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

  margin-bottom: 36vh;

  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    transform: translateY(-2px);
    color: black;
    background: lightslategray;
  }
`;

export const LogOutButton = styled.button`
  align-self: center;

  border: 1px solid #bebec0;
  border-radius: 6px;
  background-color: #d8d8d9;
  font-size: 14px;

  height: 4vh;
  width: 13vh;

  margin-bottom: 2vh;
  margin-top: 2vh;

  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    transform: translateY(-2px);
    color: black;
    background: lightslategray;
  }
`;

export const LoggedInUser = styled.p`
  color: lightsteelblue;

  text-align: center;
  font-size: 14px;

  margin-top: 5px;
`;
