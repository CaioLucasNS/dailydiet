import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealDTO } from "./MealDTO";

export async function mealCreate(newMeal: MealDTO) {
  try {
    const storedMeals = await mealGetAll();

    const storage = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(`${MEAL_COLLECTION}`, storage);
  } catch (error) {
    throw error;
  }
}
