import { Button } from "@components/Button";
import { CheckDietButton } from "@components/CheckDietButton";
import { DateInput } from "@components/DateInput";
import { HeaderComponent } from "@components/HeaderComponent";
import { InputComponent } from "@components/InputComponent";
import { useNavigation } from "@react-navigation/native";
import { mealCreate } from "@storage/meal/mealCreate";
import { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import { Container, RowContainer, QuestionText, Content } from "./styles";

export function NewMealForm() {
  const [yesButtonChecked, setYesButtonChecked] = useState(false);
  const [noButtonChecked, setNoButtonChecked] = useState(false);

  const [mealName, setMealName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [onDiet, setOnDiet] = useState<boolean | null>(null);

  const navigation = useNavigation();

  const handlePressYes = () => {
    setYesButtonChecked(yesButtonChecked ? false : true);
    setNoButtonChecked(false);

    setOnDiet((prevState) => (!prevState ? true : null));
  };

  const handlePressNo = () => {
    setNoButtonChecked(noButtonChecked ? false : true);
    setYesButtonChecked(false);

    setOnDiet((prevState) => (prevState === false ? null : false));
  };

  const handleSubmit = async () => {
    try {
      const mealDto = {
        date,
        data: [{ mealName, description, hour, onDiet }],
      };

      await mealCreate(mealDto);

      navigation.navigate("NewMealFeedback", { onDiet });
    } catch (error) {
      throw error;
    }
  };

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container>
        <HeaderComponent title="Nova refeição" />

        <Content>
          <InputComponent
            title="Nome"
            placeholder="Nome da refeição"
            value={mealName}
            onChangeText={setMealName}
          />
          <InputComponent
            title="Descrição"
            isTextArea
            value={description}
            onChangeText={setDescription}
          />

          <RowContainer>
            <DateInput
              onChangeText={setDate}
              placeholder="DD/MM/AAAA"
              title="Data"
              type="date"
              value={date}
            />
            <DateInput
              onChangeText={setHour}
              placeholder="HH:mm"
              title="Hora"
              type="hour"
              value={hour}
            />
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
          style={{ marginHorizontal: 24, marginBottom: 40 }}
          onPress={handleSubmit}
          disabled={onDiet === null}
        />
      </Container>
    </KeyboardAvoidingView>
  );
}