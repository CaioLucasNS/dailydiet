import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  justify-content: center;
  align-items: flex-start;
  padding-horizontal: 24px;
  width: 100%;
`;

export const DateHourContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const QuestionText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  margin-bottom: 8px;
`;
