import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { LargeCardComponent } from "./LargeCardComponent";
import { SmallCardComponent } from "./SmallCardComponent";

import {
  CardsContainer,
  Container,
  Content,
  ContentTitle,
  DescriptionText,
  GoBackArrow,
  GoBackArrowContainer,
  Header,
  PercentageText,
} from "./styles";

type RouteParams = {
  percentOnDiet: number;
  onDietSequency: number;
  registeredMeals: number;
  onTheDiet: number;
  outDiet: number;
};

export function Statistics() {
  const navigation = useNavigation();
  const routes = useRoute();
  const { percentOnDiet, onDietSequency, registeredMeals, onTheDiet, outDiet } =
    routes.params as RouteParams;

  return (
    <Container>
      <Header percentage={percentOnDiet}>
        <GoBackArrowContainer onPress={() => navigation.goBack()}>
          <GoBackArrow />
        </GoBackArrowContainer>

        <PercentageText>{percentOnDiet}%</PercentageText>
        <DescriptionText>das refeições dentro da dieta</DescriptionText>
      </Header>

      <Content>
        <ContentTitle>Estatísticas gerais</ContentTitle>

        <CardsContainer>
          <LargeCardComponent
            cardNumber={onDietSequency}
            cardDescription="melhor sequência de pratos dentro da dieta"
          />
          <LargeCardComponent
            cardNumber={registeredMeals}
            cardDescription="refeições registradas"
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <SmallCardComponent
              cardNumber={onTheDiet}
              cardDescription="refeições dentro da dieta"
            />
            <SmallCardComponent
              cardNumber={outDiet}
              cardDescription="refeições fora da dieta"
              isOffTheDiet
            />
          </View>
        </CardsContainer>
      </Content>
    </Container>
  );
}
