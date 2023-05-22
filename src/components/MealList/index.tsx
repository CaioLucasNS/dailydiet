import { useNavigation } from "@react-navigation/native";
import { SectionList, View } from "react-native";
import { MealDTO } from "src/types/MealDTO";
import {
  Divider,
  ListItemContainer,
  ListItemTitle,
  MealStatus,
  MealTime,
  MealTitle,
} from "./styles";

const mockData: MealDTO[] = [
  {
    date: "08.05.23",
    data: [
      {
        hour: "10:00",
        mealName: "Hamburger",
        description: "test",
        onDiet: true,
      },
      { hour: "12:30", mealName: "Sushi", description: "test", onDiet: false },
      { hour: "15:00", mealName: "Pizza", description: "test", onDiet: false },
    ],
  },
  {
    date: "09.05.23",
    data: [
      { hour: "11:00", mealName: "Granola", description: "test", onDiet: true },
      {
        hour: "13:30",
        mealName: "Batata doce",
        description: "test",
        onDiet: true,
      },
      { hour: "16:00", mealName: "Frango", description: "test", onDiet: true },
    ],
  },
  {
    date: "10.05.23",
    data: [
      { hour: "11:00", mealName: "Uva", description: "test", onDiet: true },
      {
        hour: "13:30",
        mealName: "Batata doce",
        description: "test",
        onDiet: true,
      },
      { hour: "16:00", mealName: "Maçã", description: "test", onDiet: true },
    ],
  },
];

type Props = {
  data: MealDTO[];
};

export function MealList({ data }: Props) {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({ item, section }) => (
          <ListItemContainer
            onPress={() =>
              navigation.navigate("MealDetails", {
                date: section.date,
                hour: item.hour,
                mealName: item.mealName,
                description: item.description,
                onDiet: !!item.onDiet,
              })
            }
          >
            <MealTime>{item.hour}</MealTime>
            <Divider />
            <MealTitle>{item.mealName}</MealTitle>

            <MealStatus onDiet={!!item.onDiet} />
          </ListItemContainer>
        )}
        renderSectionHeader={({ section }) => (
          <ListItemTitle>{section.date}</ListItemTitle>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
        SectionSeparatorComponent={() => <View style={{ height: 10 }} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={{ marginBottom: 60 }} />}
      />
    </View>
  );
}
