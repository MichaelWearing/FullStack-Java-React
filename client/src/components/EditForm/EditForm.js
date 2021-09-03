import React, { useState } from "react";

// Styled Components
import { Wrapper, Form, Section, Title, Input, Close } from "./EditForm.styles";

export default function EditForm() {
//  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <Wrapper>
      <Form>
        <Section>
          <Title>Name: </Title>
          <Input placeholder={"Name"} />
        </Section>
        <Section>
          <Title>E-mail: </Title>
          <Input placeholder={"E-mail"} />
        </Section>
        <Section>
          <Title>Date of Birth: </Title>
          <Input placeholder={"Date of Birth"} />
        </Section>
        <Close>+</Close>
      </Form>
    </Wrapper>
  );
}
