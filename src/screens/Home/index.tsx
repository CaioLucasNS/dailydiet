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
import AsyncStorage from "@react-native-async-storage/async-storage";

type DietInfoTypes = {
  percentOnDiet: number;
  onDietSequency: number;
  registeredMeals: number;
  onTheDiet: number;
  outDiet: number;
};

export function Home() {
  const [mealsData, setMealsData] = useState<MealDTO[]>([]);
  const [dietInfo, setDietInfo] = useState<DietInfoTypes>({
    percentOnDiet: 0,
    onDietSequency: 0,
    registeredMeals: 0,
    onTheDiet: 0,
    outDiet: 0,
  });

  const navigation = useNavigation();

  const calculateOnDietSequency = (array: MealDTO[]) => {
    let maxContador = 0;
    let contador = 0;

    for (let i = 0; i < array.length; i++) {
      const data = array[i].data;

      for (let j = 0; j < data.length; j++) {
        if (data[j].onDiet) {
          contador++;
          if (contador > maxContador) {
            maxContador = contador;
          }
        } else {
          contador = 0;
        }
      }
    }

    return maxContador;
  };

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

      const onDietSequency = calculateOnDietSequency(dataSortered);

      setDietInfo({
        percentOnDiet: +percentOnDiet.toFixed(2) || 0,
        onDietSequency,
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
  const handleDeleteAll = async () => {
    try {
      const response = await AsyncStorage.clear();
      console.log("response: ", response);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return (
    <Container>
      <AvatarHeader />

      <DietPercentageCard
        percentage={dietInfo.percentOnDiet}
        onPress={() =>
          navigation.navigate("Statistics", {
            percentOnDiet: dietInfo.percentOnDiet,
            onDietSequency: dietInfo.onDietSequency,
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
        // onPress={handleDeleteAll}
        style={{ marginBottom: 32 }}
      />

      <MealList data={mealsData} />
    </Container>
  );
}
