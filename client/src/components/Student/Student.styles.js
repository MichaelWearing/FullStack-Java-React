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

export const EditFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditForm = styled.form`
  background: white;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 4px;

  width: 500px;
  height: 300px;
  position: relative;
`;

export const EditFormSection = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 5vh;
`;

export const EditFormInput = styled.input`
  width: 23vh;

  padding: 3px;
  margin: 3px;
`;

export const EditFormTitle = styled.p`
  align-self: center;
`;

export const EditFormClose = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 42px;
  color: #333;
  transform: rotate(45deg);
  cursor: pointer;
  &:hover {
    color: #666;
  }
`;

export const EditFormSubmit = styled.button`
  align-self: center;

  border: 1px solid #bebec0;
  border-radius: 6px;
  background-color: #d8d8d9;
  font-size: 14px;

  height: 4vh;
  width: 13vh;
  margin-top: 3vh;

  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    transform: translateY(-2px);
    color: black;
    background: lightslategray;
  }
`;
