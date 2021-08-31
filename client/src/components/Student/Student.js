import React from "react";

// Styled Components
import {
  Wrapper,
  InfoWrapper,
  InfoTitle,
  InfoValue,
} from "./Student.styles";

export default function Student({ id, name, email, dob, age }) {
  return (
    <Wrapper>
      <InfoWrapper>
        <InfoTitle>Id: </InfoTitle>
        <InfoValue>{id}</InfoValue>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>Name: </InfoTitle>
        <InfoValue>{name}</InfoValue>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>E-mail: </InfoTitle>
        <InfoValue>{email}</InfoValue>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>D.O.B: </InfoTitle>
        <InfoValue>{dob}</InfoValue>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>Age: </InfoTitle>
        <InfoValue>{age}</InfoValue>
      </InfoWrapper>
    </Wrapper>
  );
}
