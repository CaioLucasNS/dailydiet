import { RefObject } from "react";
import { TextInput, TextInputProps } from "react-native";
import { maskJs } from "mask-js";

import { Container, Input, InputTitle } from "./styles";

type Props = TextInputProps & {
  inputRef?: RefObject<TextInput>;
  title: string;
  type: "date" | "hour";
};

export function DateInput({
  title,
  inputRef,
  onChangeText,
  value,
  type,
  ...rest
}: Props) {
  const dateMaskedText = maskJs("99/99/9999", value as string);
  const hourMaskedText = maskJs("99:99", value as string);

  return (
    <Container>
      <InputTitle>{title}</InputTitle>
      <Input
        ref={inputRef}
        keyboardType="numeric"
        onChangeText={onChangeText}
        value={type === "date" ? dateMaskedText : hourMaskedText}
        maxLength={type === "date" ? 10 : 5}
        {...rest}
      />
    </Container>
  );
}
