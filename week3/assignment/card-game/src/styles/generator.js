import { css } from "@emotion/react";

export const Generators = {
  flexGenerator: (
    flexDirection = "row",
    justifyContent = "center",
    alignItems = "center",
  ) => css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,
  fontGenerator: (
    fontSize = "1.6rem",
    fontWeight = "normal",
    lineHeight = "normal",
    letterSpacing = "normal",
    fontStyle = "normal",
  ) => css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
    font-style: ${fontStyle};
  `,
};
