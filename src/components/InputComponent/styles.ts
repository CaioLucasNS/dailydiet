import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  justify-content: center;
  align-items: flex-start;
`;

export const InputTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}

  margin-bottom: 4px;
`;

export type InputStyledProps = {
  isTextArea?: boolean;
};

export const Input = styled(TextInput)<InputStyledProps>`
  ${({ theme, isTextArea }) => css`
    background-color: ${theme.COLORS.GRAY_7};
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border: 1px solid ${theme.COLORS.GRAY_5};

    min-height: ${isTextArea ? "120px" : "48px"};
    max-height: ${isTextArea ? "120px" : "48px"};
  `}

  width: 100%;
  border-radius: 6px;
  padding: 14px;
  margin-bottom: 24px;
  gap: 8px;
`;
