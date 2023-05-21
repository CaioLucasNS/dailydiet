import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  justify-content: flex-start;
  align-items: flex-start;
  padding-horizontal: 24px;
  padding-top: 40px;
  width: 100%;

  border-radius: 20px;
  margin-top: -20px;
`;

export const RowContainer = styled.View`
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
