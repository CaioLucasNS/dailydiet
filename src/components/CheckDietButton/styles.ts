import { TouchableHighlight } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableHighlight)`
  width: 48%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6}

  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

type ButtonIconStyled = {
  textButton: "Sim" | "Não";
};

export const ButtonIcon = styled.View<ButtonIconStyled>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;

  background-color: ${({ theme, textButton }) =>
    textButton === "Sim" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
