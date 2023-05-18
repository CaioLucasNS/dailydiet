import { RefObject } from "react";
import { TextInput, TextInputProps } from "react-native";
import { Container, InputTitle, Input, InputStyledProps } from "./styles";

type Props = TextInputProps &
  InputStyledProps & {
    inputRef?: RefObject<TextInput>;
    title: string;
  };

export function InputComponent({
  inputRef,
  title,
  isTextArea = false,
  ...rest
}: Props) {
  return (
    <Container>
      <InputTitle>{title}</InputTitle>
      <Input
        ref={inputRef}
        isTextArea={isTextArea}
        multiline={isTextArea}
        numberOfLines={4}
        {...rest}
      />
    </Container>
  );
}
