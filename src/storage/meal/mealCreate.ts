import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { MealDTO } from "src/types/MealDTO";

export async function mealCreate(newMeal: MealDTO) {
  try {
    const storedMeals = await mealGetAll();

    const dateAlreadyExists = storedMeals.filter(
      (meal) => meal.date === newMeal.date
    );

    const targetIndex = storedMeals.findIndex(
      (item) => item.date === newMeal.date
    );

    let storage;

    if (dateAlreadyExists.length > 0) {
      // @ts-ignore
      storedMeals[targetIndex].data.push(newMeal.data[0]);
      storage = JSON.stringify([...storedMeals]);
    } else {
      storage = JSON.stringify([...storedMeals, newMeal]);
    }

    await AsyncStorage.setItem(`${MEAL_COLLECTION}`, storage);
  } catch (error) {
    throw error;
  }
}
