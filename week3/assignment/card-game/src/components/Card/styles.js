import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CardSizes = {
  easy: css`
    width: 20rem;
    height: 24rem;
  `,
  hard: css`
    width: 16.5rem;
    height: 22rem;
  `,
};
export const CardContainer = styled.div`
  width: 14rem;
  height: 20rem;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  border: 1px solid black;
  cursor: pointer;

  ${(props) => props.size && CardSizes[props.size]}

  ${(props) => props.customStyle};
`;
