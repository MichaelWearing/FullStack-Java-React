import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background: white;

  border-radius: 4px;

  width: 500px;
  height: 300px;
  position: relative;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 5vh;
`;

export const Input = styled.input``;

export const Title = styled.p``;

export const Close = styled.div`
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
