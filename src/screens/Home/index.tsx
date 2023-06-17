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
  const [dietInfo, setDietInfo] = useState({
    percentOnDiet: 0,
    // onDietSequency: 0,
    registeredMeals: 0,
    onTheDiet: 0,
    outDiet: 0,
  });

  const navigation = useNavigation();

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

      let registeredMeals: any[] = [];
      let onTheDiet = 0;
      let outDiet = 0;
      dataSortered.forEach((obj) => {
        obj.data.forEach((meal) => {
          if (meal.onDiet) {
            onTheDiet += 1;
          } else {
            outDiet += 1;
          }
          registeredMeals.push(meal.onDiet);
        });
      });

      let percentOnDiet = (100 * onTheDiet) / registeredMeals.length;

      setDietInfo({
        percentOnDiet,
        // onDietSequency: 0,
        registeredMeals: registeredMeals.length,
        onTheDiet: onTheDiet,
        outDiet: outDiet,
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
        percentage={dietInfo.percentOnDiet}
        onPress={() =>
          navigation.navigate("Statistics", {
            percentOnDiet: dietInfo.percentOnDiet,
            // onDietSequency: 0,
            registeredMeals: dietInfo.registeredMeals,
            onTheDiet: dietInfo.onTheDiet,
            outDiet: dietInfo.outDiet,
          })
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
