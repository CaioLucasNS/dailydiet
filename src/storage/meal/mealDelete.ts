import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealInfoTypes } from "src/types/MealDTO";
import { mealGetAll } from "./mealGetAll";

export async function mealDelete(deletedMeal: MealInfoTypes) {
  try {
    const storedMeals = await mealGetAll();

    const newStorage = storedMeals.map((storedMeal) => {
      const filteredData = storedMeal.data.filter(
        (meal) => JSON.stringify(meal) !== JSON.stringify(deletedMeal)
      );

      return { ...storedMeal, data: filteredData };
    });

    await AsyncStorage.setItem(
      `${MEAL_COLLECTION}`,
      JSON.stringify(newStorage)
    );
  } catch (error) {
    throw error;
  }
}
