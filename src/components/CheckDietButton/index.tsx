import { useTheme } from "styled-components/native";
import { ButtonIcon, ButtonText, Container, Content } from "./styles";

type Props = {
  textButton: "Sim" | "Não";
};

export function CheckDietButton({ textButton }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container
      activeOpacity={0.6}
      underlayColor={textButton === "Sim" ? COLORS.GREEN_MID : COLORS.RED_MID}
      onPress={() => {}}
    >
      <Content>
        <ButtonIcon textButton={textButton} />

        <ButtonText>{textButton}</ButtonText>
      </Content>
    </Container>
  );
}
