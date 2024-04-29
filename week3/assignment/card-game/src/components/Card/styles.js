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
  background-position: center;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 2rem;

  ${(props) => props.size && CardSizes[props.size]}

  ${(props) => props.customStyle};
`;
