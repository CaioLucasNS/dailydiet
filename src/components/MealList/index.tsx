import { useNavigation } from "@react-navigation/native";
import { SectionList, View } from "react-native";
import {
  Divider,
  ListItemContainer,
  ListItemTitle,
  MealStatus,
  MealStatusStyleProp,
  MealTime,
  MealTitle,
} from "./styles";

type mealData = MealStatusStyleProp & {
  time: string;
  meal: string;
  description: string;
};

type MealProps = Array<{
  day: string;
  data: mealData[];
}>;

const mockData: MealProps = [
  {
    day: "08.05.23",
    data: [
      { time: "10:00", meal: "Hamburger", description: "test", onDiet: true },
      { time: "12:30", meal: "Sushi", description: "test", onDiet: false },
      { time: "15:00", meal: "Pizza", description: "test", onDiet: false },
    ],
  },
  {
    day: "09.05.23",
    data: [
      { time: "11:00", meal: "Granola", description: "test", onDiet: true },
      { time: "13:30", meal: "Batata doce", description: "test", onDiet: true },
      { time: "16:00", meal: "Frango", description: "test", onDiet: true },
    ],
  },
  {
    day: "10.05.23",
    data: [
      { time: "11:00", meal: "Uva", description: "test", onDiet: true },
      { time: "13:30", meal: "Batata doce", description: "test", onDiet: true },
      { time: "16:00", meal: "Maçã", description: "test", onDiet: true },
    ],
  },
];

export function MealList() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <SectionList
        sections={mockData}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({ item, section }) => (
          <ListItemContainer
            onPress={() =>
              navigation.navigate("MealDetails", {
                day: section.day,
                time: item.time,
                meal: item.meal,
                description: item.description,
                onDiet: item.onDiet,
              })
            }
          >
            <MealTime>{item.time}</MealTime>
            <Divider />
            <MealTitle>{item.meal}</MealTitle>

            <MealStatus onDiet={item.onDiet} />
          </ListItemContainer>
        )}
        renderSectionHeader={({ section }) => (
          <ListItemTitle>{section.day}</ListItemTitle>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
        SectionSeparatorComponent={() => <View style={{ height: 10 }} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={{ marginBottom: 60 }} />}
      />
    </View>
  );
}
