import { Button } from "@components/Button";
import { HeaderComponent } from "@components/HeaderComponent";
import { useRoute } from "@react-navigation/native";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import {
  ButtonsContainer,
  Container,
  Content,
  Description,
  StatusContainer,
  StatusIcon,
  StatusText,
  TimeText,
  TimeTitle,
  Title,
} from "./styles";

type RouteParams = {
  date: string;
  hour: string;
  mealName: string;
  description: string;
  onDiet: boolean;
};

export function MealDetails() {
  const { params } = useRoute();
  const { date, hour, mealName, description, onDiet } = params as RouteParams;
  const { COLORS } = useTheme();

  const handleDeleteMeal = () => {
    return Alert.alert("Deseja realmente excluir o registro da refeição?", "", [
      {
        text: "Cancelar",
        onPress: () => console.log("cancelado"),
        style: "cancel",
      },
      { text: "Sim, excluir", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <Container>
      <HeaderComponent
        title="Refeição"
        background={onDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
      />

      <Content>
        <Title>{mealName}</Title>
        <Description>{description}</Description>

        <TimeTitle>Data e hora</TimeTitle>
        <TimeText>
          {date} às {hour}
        </TimeText>

        <StatusContainer>
          <StatusIcon color={onDiet ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
          <StatusText>
            {onDiet ? "dentro da dieta" : "fora da dieta"}
          </StatusText>
        </StatusContainer>
      </Content>
      <ButtonsContainer>
        <Button title="Editar refeição" icon="edit" onPress={() => {}} />
        <Button
          title="Excluir refeição"
          icon="delete"
          type="secondary"
          onPress={handleDeleteMeal}
        />
      </ButtonsContainer>
    </Container>
  );
}
