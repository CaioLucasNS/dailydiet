type MealInfoTypes = {
  hour: string;
  mealName: string;
  description: string;
  onDiet?: boolean | null;
};

export type MealDTO = {
  date: string;
  data: MealInfoTypes[];
};
