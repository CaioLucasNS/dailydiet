import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 33px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const AvatarImg = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 20px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;
