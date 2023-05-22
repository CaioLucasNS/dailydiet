import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { MealDTO } from "src/types/MealDTO";

export async function mealCreate(newMeal: MealDTO) {
  try {
    const storedMeals = await mealGetAll();

    const storage = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(`${MEAL_COLLECTION}`, storage);

    console.log("Refeição cadastrada :: ", storage);
  } catch (error) {
    throw error;
  }
}