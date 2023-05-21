import { TouchableContainer } from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

type Props = {
  color?: string;
  size?: number;
  onPress: () => void;
};

export function GoBackIcon({ color, size, onPress }: Props) {
  const { COLORS } = useTheme();

  if (!color) color = COLORS.GRAY_1;
  if (!size) size = 26;

  return (
    <TouchableContainer onPress={onPress}>
      <ArrowLeft color={color} size={size} />
    </TouchableContainer>
  );
}
