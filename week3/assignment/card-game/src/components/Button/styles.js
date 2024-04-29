import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Generators } from "@styles";

export const ButtonVariants = {
  primary: css``,
  outline: css``,
  disabled: css``,
};
export const ButtonContainer = styled.button`
  width: 8rem;
  height: 4rem;
  ${Generators.flexGenerator()};
  background-color: ${(props) => props.theme.colors.primary03};
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;

  ${(props) => props.variant && ButtonVariants[props.variant]};

  ${(props) => props.customStyle};
`;
