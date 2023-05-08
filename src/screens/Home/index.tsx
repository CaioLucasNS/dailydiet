import { DietPercentageCard } from "@components/DietPercentageCard";
import { Header } from "@components/Header";
import { Container, Title } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <DietPercentageCard percentage={90.86} />

      <Title>Home Screen</Title>
    </Container>
  );
}
