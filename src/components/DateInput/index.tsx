import { RefObject } from "react";
import { TextInput, TextInputProps } from "react-native";
import { Container, Input, InputTitle } from "./styles";

type Props = TextInputProps & {
  inputRef?: RefObject<TextInput>;
  title: string;
};

export function DateInput({ title, inputRef, ...rest }: Props) {
  return (
    <Container>
      <InputTitle>{title}</InputTitle>
      <Input ref={inputRef} keyboardType="numeric" {...rest} />
    </Container>
  );
}
