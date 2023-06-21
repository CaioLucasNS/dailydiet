import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { MealDetails } from "@screens/MealDetails";
import { NewMealFeedback } from "@screens/NewMealFeedback";
import { NewMealForm } from "@screens/NewMealForm";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Statistics" component={Statistics} />
      <Screen name="NewMealForm" component={NewMealForm} />
      <Screen name="NewMealFeedback" component={NewMealFeedback} />
      <Screen name="MealDetails" component={MealDetails} />
    </Navigator>
  );
}
