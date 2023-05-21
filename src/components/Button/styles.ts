import { TouchableOpacity } from "react-native";
import { Plus, PencilLine, Trash } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type ButtonIconTypeStyleProps = "primary" | "secondary";

type Props = {
  type: ButtonIconTypeStyleProps;
  disabled?: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, type, disabled }) =>
    css`
      border-width: ${type === "primary" ? 0 : 1}px;
      background-color: ${disabled
        ? theme.COLORS.GRAY_5
        : type === "primary"
        ? theme.COLORS.GRAY_2
        : theme.COLORS.GRAY_7};
    `}

  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;

  margin-top: 6px;
  margin-bottom: 32px;
`;

export const PlusIcon = styled(Plus).attrs<Props>(() => ({
  size: 20,
}))`
  margin-right: 12px;
`;

export const EditIcon = styled(PencilLine).attrs<Props>(() => ({
  size: 20,
}))`
  margin-right: 12px;
`;

export const DeleteIcon = styled(Trash).attrs<Props>(() => ({
  size: 20,
}))`
  margin-right: 12px;
`;

export const TextButton = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === "primary" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
