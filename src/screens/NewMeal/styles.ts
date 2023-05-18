import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  justify-content: center;
  align-items: flex-start;
  padding-horizontal: 24px;
`;
