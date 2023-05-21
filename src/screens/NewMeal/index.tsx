import { Button } from "@components/Button";
import { CheckDietButton } from "@components/CheckDietButton";
import { DateInput } from "@components/DateInput";
import { GoBackIcon } from "@components/GoBackIcon";
import { HeaderComponent } from "@components/HeaderComponent";
import { InputComponent } from "@components/InputComponent";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { Container, RowContainer, QuestionText, Content } from "./styles";

export function NewMeal() {
  const [yesButtonChecked, setYesButtonChecked] = useState(false);
  const [noButtonChecked, setNoButtonChecked] = useState(false);

  const handlePressYes = () => {
    setYesButtonChecked(yesButtonChecked ? false : true);
    setNoButtonChecked(false);
  };

  const handlePressNo = () => {
    setNoButtonChecked(noButtonChecked ? false : true);
    setYesButtonChecked(false);
  };

  return (
    <Container>
      <HeaderComponent title="Nova refeição" />

      <Content>
        <InputComponent title="Nome" />
        <InputComponent title="Descrição" isTextArea />

        <RowContainer>
          <DateInput title="Data (DD/MM/AAAA)" />
          <DateInput title="Hora" />
        </RowContainer>

        <QuestionText>Está dentro da dieta?</QuestionText>

        <RowContainer>
          <CheckDietButton
            textButton="Sim"
            isChecked={yesButtonChecked}
            onPress={handlePressYes}
          />
          <CheckDietButton
            textButton="Não"
            isChecked={noButtonChecked}
            onPress={handlePressNo}
          />
        </RowContainer>
      </Content>
      <Button
        title="Cadastrar refeição"
        style={{ marginHorizontal: 24 }}
        onPress={() => console.log("Cadastrar refeição")}
      />
    </Container>
  );
}
