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
};

type MealProps = Array<{
  day: string;
  data: mealData[];
}>;

const mockData: MealProps = [
  {
    day: "08.05.23",
    data: [
      { time: "10:00", meal: "Hamburger", onDiet: true },
      { time: "12:30", meal: "Sushi", onDiet: false },
      { time: "15:00", meal: "Pizza", onDiet: false },
    ],
  },
  {
    day: "09.05.23",
    data: [
      { time: "11:00", meal: "Granola", onDiet: true },
      { time: "13:30", meal: "Batata doce", onDiet: true },
      { time: "16:00", meal: "Frango", onDiet: true },
    ],
  },
  {
    day: "10.05.23",
    data: [
      { time: "11:00", meal: "Uva", onDiet: true },
      { time: "13:30", meal: "Batata doce", onDiet: true },
      { time: "16:00", meal: "Maçã", onDiet: true },
    ],
  },
];

export function MealList() {
  return (
    <View style={{ flex: 1 }}>
      <SectionList
        sections={mockData}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({ item }) => (
          <ListItemContainer>
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
