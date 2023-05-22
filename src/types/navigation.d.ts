export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Statistics: {
        percentage: number;
      };
      NewMeal: undefined;
      NewMealFeedback: {
        onDiet: boolean | null;
      };
      MealDetails: {
        day: string;
        time: string;
        meal: string;
        description: string;
        onDiet: boolean;
      };
    }
  }
}
