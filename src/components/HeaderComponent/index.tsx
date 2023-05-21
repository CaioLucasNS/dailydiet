import { GoBackIcon } from "@components/GoBackIcon";
import { useNavigation } from "@react-navigation/native";
import { HeaderContainer, HeaderStyleProps, HeaderTitle } from "./styles";

type Props = HeaderStyleProps & {
  title: string;
};

export function HeaderComponent({ title, background }: Props) {
  const { goBack } = useNavigation();

  return (
    <HeaderContainer background={background}>
      <GoBackIcon onPress={goBack} />

      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
}
