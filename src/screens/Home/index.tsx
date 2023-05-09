import { Button } from "@components/Button";
import { DietPercentageCard } from "@components/DietPercentageCard";
import { Header } from "@components/Header";
import { MealList } from "@components/MealList";

import { Container, MealTitle } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <DietPercentageCard percentage={90.86} onPress={() => {}} />

      <MealTitle>Refeições</MealTitle>
      <Button
        title="Nova refeição"
        icon="add"
        onPress={() => {}}
        style={{ marginBottom: 32 }}
      />

      <MealList />
    </Container>
  );
}
