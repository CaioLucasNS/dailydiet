import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { mealGetAll } from "@storage/meal/mealGetAll";

import { AvatarHeader } from "@components/AvatarHeader";
import { Button } from "@components/Button";
import { DietPercentageCard } from "@components/DietPercentageCard";
import { MealList } from "@components/MealList";

import { Container, MealTitle } from "./styles";

import { MealDTO } from "src/types/MealDTO";

export function Home() {
  const [mealsData, setMealsData] = useState<MealDTO[]>([]);

  const navigation = useNavigation();

  const percentageMock = 51.32;

  const fetchMeals = async () => {
    try {
      const data = await mealGetAll();

      // TODO: organizar por data descrescente
      setMealsData(data);
    } catch (error) {
      Alert.alert("Refeições", "Não foi possível carregar as suas refeições");
      console.log("error: ", error);
      throw error;
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

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

      <MealList data={mealsData} />
    </Container>
  );
}
