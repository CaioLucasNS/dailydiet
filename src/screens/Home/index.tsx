import { DietPercentageCard } from "@components/DietPercentageCard";
import { Header } from "@components/Header";
import { Container, MealTitle } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <DietPercentageCard percentage={90.86} />

      <MealTitle>Refeições</MealTitle>
    </Container>
  );
}
