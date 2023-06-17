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

      const dataSortered = data.sort((a, b) => {
        // update string date in new Date to sort
        const datePartsA = a.date.split("/");
        const dateA = new Date(
          `${datePartsA[2]}-${datePartsA[1]}-${datePartsA[0]}`
        );

        const datePartsB = b.date.split("/");
        const dateB = new Date(
          `${datePartsB[2]}-${datePartsB[1]}-${datePartsB[0]}`
        );

        return dateB.getTime() - dateA.getTime();
      });

      setMealsData(dataSortered);
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

  // To delete everything
  // const handleDeleteAll = async () => {
  //   try {
  //     const response = await AsyncStorage.clear();
  //     console.log("response: ", response);
  //     return response;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

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
