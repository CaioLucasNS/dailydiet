import { useNavigation, useRoute } from "@react-navigation/native";

import womanImg from "@assets/womanAvatar.png";
import manImg from "@assets/manAvatar.png";

import {
  AvatarImg,
  BoldText,
  Container,
  Description,
  TitleOffDiet,
  TitleOnDiet,
} from "./styles";
import { Button } from "@components/Button";

type RouteParams = {
  onDiet: boolean;
};

export function NewMealFeedback() {
  const { params } = useRoute();
  const { onDiet } = params as RouteParams;

  const navigation = useNavigation();

  const getTitle = () => {
    switch (onDiet) {
      case true:
        return <TitleOnDiet>Continue assim</TitleOnDiet>;
      case false:
        return <TitleOffDiet>Que pena!</TitleOffDiet>;
      default:
        return null;
    }
  };

  const getDescription = () => {
    switch (onDiet) {
      case true:
        return (
          <Description>
            Você continua
            <BoldText> dentro da dieta. </BoldText>
            Muito bem!
          </Description>
        );
      case false:
        return (
          <Description>
            Você
            <BoldText> saiu da dieta </BoldText>
            dessa vez, mas continue se esforçando e não desista!
          </Description>
        );
      default:
        return null;
    }
  };

  const handleGoToHome = () => navigation.navigate("Home");

  return (
    <Container>
      {getTitle()}

      {getDescription()}

      <AvatarImg source={onDiet ? womanImg : manImg} />

      <Button title="Ir para a página inicial" onPress={handleGoToHome} />
    </Container>
  );
}
