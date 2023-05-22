import { View } from "react-native";
import styled, { css } from "styled-components/native";

export type MealStatusStyleProp = {
  onDiet: boolean;
};

export const ListItemTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-top: 10px;
`;

export const ListItemContainer = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 14px 16px;
  gap: 12px;
`;

export const MealTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Divider = styled.View`
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_4};
  height: 100%;
`;

export const MealTitle = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const MealStatus = styled(View)<MealStatusStyleProp>`
  width: 14px;
  height: 14px;
  border-radius: 7px;

  background: ${({ theme, onDiet }) =>
    onDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
