import styled, { css } from "styled-components/native";

export type HeaderStyleProps = {
  background?: string;
};

export const HeaderContainer = styled.View<HeaderStyleProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${({ theme, background }) => background ?? theme.COLORS.GRAY_5};

  padding-horizontal: 20px;
  min-height: 132px;
  width: 100%;
`;

export const HeaderTitle = styled.Text`
  flex: 1;

  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;
