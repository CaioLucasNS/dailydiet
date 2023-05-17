import { CardDescription, CardNumber, LargeCard } from "./styles";

type Props = {
  cardNumber: string | number;
  cardDescription: string;
};

export function LargeCardComponent({ cardNumber, cardDescription }: Props) {
  return (
    <LargeCard>
      <CardNumber>{cardNumber}</CardNumber>
      <CardDescription>{cardDescription}</CardDescription>
    </LargeCard>
  );
}
