import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;

  display: flex;
  justify-content: space-evenly;
`;


export const EditFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditForm = styled.form`
  background: white;

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

export const EditFormInput = styled.input``;

export const EditFormTitle = styled.p``;

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
  
`;
