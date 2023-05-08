import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type PercentageStyleProps = {
  percentage: number;
};

export const Container = styled(TouchableOpacity)<PercentageStyleProps>`
  flex: 1;
  align-items: center;
  justify-content: center;

  ${({ theme, percentage }) => css`
    background-color: ${percentage > 50
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}

  padding: 20px 16px;
  border-radius: 8px;

  max-height: 102px;
  min-height: 102px;
  width: 100%;

  bottom: 40px;
`;

export const RedirectArrow = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 32,
  // color: percentage < 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const PercentageText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `};
`;

export const DescriptionText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
