import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  /* background: ${({ theme }) => theme.COLORS.GRAY_7}; */
`;

export const Content = styled.View`
  flex: 1;
  border-radius: 20px;
  margin-top: -20px;
  background: ${({ theme }) => theme.COLORS.GRAY_7};
  padding-horizontal: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 20px;
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-top: 40px
  margin-bottom: 8px
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  margin-bottom: 24px
`;

export const TimeTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 8px
`;

export const TimeText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  margin-bottom: 24px
`;

export const StatusContainer = styled.View`
  width: 127px;
  height: 34px;
  padding: 8px 16px;
  gap: 8px;
  border-radius: 999px;
  background: ${({ theme }) => theme.COLORS.GRAY_6};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

type StatusIconStyleProps = {
  color: string;
};

export const StatusIcon = styled.View<StatusIconStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: ${({ color }) => color};
`;

export const StatusText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const ButtonsContainer = styled.View`
  padding-horizontal: 24px;
  margin-bottom: 40px;
`;
