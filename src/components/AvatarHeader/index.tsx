import logoImg from "@assets/logo.png";
import { AvatarImg, Container, Logo } from "./styles";

const avatarUrl = "https://github.com/CaioLucasNS.png";
// const avatarUrl = '{{ YOUR AVATAR URL HERE }}'

export function AvatarHeader() {
  return (
    <Container>
      <Logo source={logoImg} />
      <AvatarImg source={{ uri: avatarUrl }} />
    </Container>
  );
}
