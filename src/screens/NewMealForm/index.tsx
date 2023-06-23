import { Button } from "@components/Button";
import { CheckDietButton } from "@components/CheckDietButton";
import { DateInput } from "@components/DateInput";
import { HeaderComponent } from "@components/HeaderComponent";
import { InputComponent } from "@components/InputComponent";
import { useNavigation } from "@react-navigation/native";
import { mealCreate } from "@storage/meal/mealCreate";
import { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

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
    Keyboard.dismiss();
  };

  const handlePressNo = () => {
    setNoButtonChecked(noButtonChecked ? false : true);
    setYesButtonChecked(false);

    setOnDiet((prevState) => (prevState === false ? null : false));
    Keyboard.dismiss();
  };

  const handleSubmit = async () => {
    try {
      const mealDto = {
        date,
        data: [{ mealName, description, hour, onDiet, date }],
      };

      await mealCreate(mealDto);

      navigation.navigate("NewMealFeedback", { onDiet });
    } catch (error) {
      throw error;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <HeaderComponent title="Nova refeição" />

        <Content>
          <View style={{ width: '100%'}}>
          <InputComponent
            title="Nome"
            placeholder="Nome da refeição"
            value={mealName}
            onChangeText={setMealName}
            returnKeyType="next"
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
          </View>
          <Button
            title="Cadastrar refeição"
            style={{ marginBottom: 40, width: '100%' }}
            onPress={handleSubmit}
            disabled={onDiet === null}
          />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
