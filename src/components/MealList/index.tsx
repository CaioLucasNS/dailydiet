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
                meal: item,
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
