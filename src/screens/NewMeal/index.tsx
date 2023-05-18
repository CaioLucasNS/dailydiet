import { InputComponent } from "@components/InputComponent";
import { Container } from "./styles";

export function NewMeal() {
  return (
    <Container>
      <InputComponent title="Nome" />
      <InputComponent title="Descrição" isTextArea />
      <InputComponent title="Data (DD/MM/AAAA)" keyboardType="numeric" />
      <InputComponent title="Hora" keyboardType="numeric" />
    </Container>
  );
}
