import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import {
  Container,
  DescriptionText,
  PercentageStyleProps,
  PercentageText,
  RedirectArrow,
} from "./styles";

type Props = TouchableOpacityProps &
  PercentageStyleProps & {
    onPress: () => void;
  };

export function DietPercentageCard({ percentage, onPress, ...rest }: Props) {
  const { COLORS } = useTheme();

  const percentageFormatt = percentage.toString().replace(".", ",");

  return (
    <Container
      activeOpacity={0.4}
      percentage={percentage}
      onPress={onPress}
      {...rest}
    >
      <RedirectArrow
        color={percentage > 50 ? COLORS.GREEN_DARK : COLORS.RED_DARK}
      />

      <PercentageText>{percentageFormatt}%</PercentageText>
      <DescriptionText>das refeições dentro da dieta</DescriptionText>
    </Container>
  );
}
