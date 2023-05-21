import { GoBackIcon } from "@components/GoBackIcon";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/Statistics";

import { useTheme } from "styled-components/native";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const { COLORS, FONT_SIZE, FONT_FAMILY } = useTheme();
  const navigation = useNavigation();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Statistics" component={Statistics} />
      <Screen name="NewMeal" component={NewMeal} />
    </Navigator>
  );
}
