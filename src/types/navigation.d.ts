import { MealDTO } from "./MealDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Statistics: {
        percentOnDiet: number;
        onDietSequency?: number;
        registeredMeals: number;
        onTheDiet: number;
        outDiet: number;
      };
      NewMeal: undefined;
      NewMealFeedback: {
        onDiet: boolean | null;
      };
      MealDetails: {
        meal: any;
        date: string;
        hour: string;
        mealName: string;
        description: string;
        onDiet: boolean;
      };
    }
  }
}
