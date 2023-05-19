import { Button } from "@components/Button";
import { CheckDietButton } from "@components/CheckDietButton";
import { DateInput } from "@components/DateInput";
import { InputComponent } from "@components/InputComponent";

import { Container, RowContainer, QuestionText } from "./styles";

export function NewMeal() {
  return (
    <>
      <Container>
        <InputComponent title="Nome" />
        <InputComponent title="Descrição" isTextArea />

        <RowContainer>
          <DateInput title="Data (DD/MM/AAAA)" />
          <DateInput title="Hora" />
        </RowContainer>

        <QuestionText>Está dentro da dieta?</QuestionText>

        <RowContainer>
          <CheckDietButton textButton="Sim" />
          <CheckDietButton textButton="Não" />
        </RowContainer>
      </Container>

      <Button
        title="Cadastrar refeição"
        style={{ marginHorizontal: 24 }}
        onPress={() => console.log("Cadastrar refeição")}
      />
    </>
  );
}
