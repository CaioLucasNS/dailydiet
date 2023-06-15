import { useCallback, useState } from "react";
import { Alert, SectionList, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { mealGetAll } from "@storage/meal/mealGetAll";

import { AvatarHeader } from "@components/AvatarHeader";
import { Button } from "@components/Button";
import { DietPercentageCard } from "@components/DietPercentageCard";
import { MealList } from "@components/MealList";

import {
  Container,
  Divider,
  ListItemContainer,
  ListItemTitle,
  MealStatus,
  MealTime,
  MealTitle,
} from "./styles";

import { MealDTO } from "src/types/MealDTO";
import { personalizeConsole } from "@utils/index";

export function Home() {
  const [mealsData, setMealsData] = useState<MealDTO[]>([]);
  personalizeConsole("mealsData", mealsData);

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
