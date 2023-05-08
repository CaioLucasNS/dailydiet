import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import {
  ButtonIconTypeStyleProps,
  Container,
  DeleteIcon,
  EditIcon,
  PlusIcon,
  TextButton,
} from "./styles";

type Props = TouchableOpacityProps & {
  icon?: "add" | "edit" | "delete";
  type?: ButtonIconTypeStyleProps;
  title: string;
  onPress: () => void;
};

export function Button({
  title,
  icon,
  type = "primary",
  onPress,
  ...rest
}: Props) {
  const { COLORS } = useTheme();

  const typeIconColor = type === "primary" ? COLORS.WHITE : COLORS.GRAY_1;

  const renderIcon = () => {
    switch (icon) {
      case "add":
        return <PlusIcon color={typeIconColor} />;
      case "edit":
        return <EditIcon color={typeIconColor} />;
      case "delete":
        return <DeleteIcon color={typeIconColor} />;
      default:
        return;
    }
  };

  return (
    <Container type={type} onPress={onPress} {...rest}>
      {renderIcon()}
      <TextButton type={type}>{title}</TextButton>
    </Container>
  );
}
