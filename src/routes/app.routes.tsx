import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
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
      <Screen name="NewMeal" component={NewMealForm} />
      <Screen name="NewMealFeedback" component={NewMealFeedback} />
    </Navigator>
  );
}
