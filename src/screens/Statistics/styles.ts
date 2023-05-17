import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";

import { PercentageStyleProps } from "@components/DietPercentageCard/styles";

import styled, { css } from "styled-components/native";
import { View } from "react-native";

type SmallCardProps = {
  isOffTheDiet?: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View<PercentageStyleProps>`
  align-items: center;
  justify-content: center;

  ${({ theme, percentage }) => css`
    background-color: ${percentage > 50
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}

  padding: 20px 16px;

  min-height: 200px;
  width: 100%;
`;

export const GoBackArrowContainer = styled.TouchableOpacity`
  position: absolute;
  left: 27px;
  top: 60.5px;
`;

export const GoBackArrow = styled(ArrowLeft).attrs(() => ({
  size: 32,
}))``;

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

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  align-items: center;
  border-radius: 20px;
  margin-top: -20px;
  padding-horizontal: 24px;
`;

export const ContentTitle = styled.Text`
  margin-top: 33px;
  margin-bottom: 23px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const CardsContainer = styled.View`
  width: 100%;
`;

export const LargeCard = styled.View`
  background: ${({ theme }) => theme.COLORS.GRAY_6};
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  gap: 8px

  align-items: center;
  justify-content: center;

  margin-bottom: 12px;
`;

export const SmallCard = styled(View)<SmallCardProps>`
  background: ${({ theme, isOffTheDiet }) =>
    isOffTheDiet ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};

  width: 48%;
  padding: 16px 30px;
  border-radius: 8px;
  gap: 8px

  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const CardNumber = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const CardDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  text-align: center
`;
