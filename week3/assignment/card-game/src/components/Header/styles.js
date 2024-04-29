import styled from "@emotion/styled";
import { Generators } from "@styles";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.primary02};

  ${Generators.flexGenerator("row", "space-between", "center")};

  & > .header__left {
    width: 33.333%;
    ${Generators.flexGenerator("row", "flex-start", "center")};
  }

  & > .header__title {
    width: 33.333%;
    color: ${({ theme }) => theme.colors.primary04};
    font-size: 4rem;
    ${Generators.flexGenerator("row", "center", "center")};
  }

  & > .header__button-wrapper {
    width: 33.333%;
    padding: 0 2rem;
    ${Generators.flexGenerator("row", "flex-end", "center")};
  }
`;
