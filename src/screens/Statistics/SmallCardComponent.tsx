import { CardDescription, CardNumber, SmallCard } from "./styles";

type Props = {
  cardNumber: string | number;
  cardDescription: string;
  isOffTheDiet?: boolean;
};

export function SmallCardComponent({
  cardNumber,
  cardDescription,
  isOffTheDiet = false,
}: Props) {
  return (
    <SmallCard isOffTheDiet={isOffTheDiet}>
      <CardNumber>{cardNumber}</CardNumber>
      <CardDescription>{cardDescription}</CardDescription>
    </SmallCard>
  );
}
