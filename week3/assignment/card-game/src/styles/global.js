import { css } from "@emotion/react";

const GlobalStyle = css`
  * {
    font-family:
      "Pretendard Variable",
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      "Helvetica Neue",
      "Segoe UI",
      "Apple SD Gothic Neo",
      "Noto Sans KR",
      "Malgun Gothic",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      sans-serif;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.02rem;
    color: #000000;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  html,
  body {
    font-size: 62.5%;
    //background-color: #dde6ed; // primary04
  }

  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
