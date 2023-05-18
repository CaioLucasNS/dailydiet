import { Button } from "@components/Button";
import { DateInput } from "@components/DateInput";
import { InputComponent } from "@components/InputComponent";

import { Container, DateHourContainer, QuestionText } from "./styles";

export function NewMeal() {
  return (
    <>
      <Container>
        <InputComponent title="Nome" />
        <InputComponent title="Descrição" isTextArea />

        <DateHourContainer>
          <DateInput title="Data (DD/MM/AAAA)" />
          <DateInput title="Hora" />
        </DateHourContainer>

        <QuestionText>Está dentro da dieta?</QuestionText>
      </Container>

      <Button
        title="Cadastrar refeição"
        style={{ marginHorizontal: 24 }}
        onPress={() => console.log("Cadastrar refeição")}
      />
    </>
  );
}
