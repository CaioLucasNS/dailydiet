export type MealInfoTypes = {
  hour: string;
  mealName: string;
  description: string;
  onDiet?: boolean | null;
  date: string;
};

export type MealDTO = {
  date: string;
  data: MealInfoTypes[];
};
