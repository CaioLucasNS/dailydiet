import { useNavigation } from "@react-navigation/native";

import { AvatarHeader } from "@components/AvatarHeader";
import { Button } from "@components/Button";
import { DietPercentageCard } from "@components/DietPercentageCard";
import { MealList } from "@components/MealList";

import { Container, MealTitle } from "./styles";

export function Home() {
  const navigation = useNavigation();

  const percentageMock = 51.32;

  return (
    <Container>
      <AvatarHeader />

      <DietPercentageCard
        percentage={percentageMock}
        onPress={() =>
          navigation.navigate("Statistics", { percentage: percentageMock })
        }
      />

      <MealTitle>Refeições</MealTitle>
      <Button
        title="Nova refeição"
        icon="add"
        onPress={() => navigation.navigate("NewMeal")}
        style={{ marginBottom: 32 }}
      />

      <MealList />
    </Container>
  );
}
