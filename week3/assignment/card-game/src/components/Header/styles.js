import styled from "@emotion/styled";
import { Generators } from "@styles";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 12rem;
  position: fixed;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.primary02};
  ${Generators.flexGenerator()};
  z-index: 2;

  & > div,
  & > section {
    width: 33.333%;
    ${Generators.flexGenerator()};
  }

  & > .header__center {
    flex-direction: column;

    & > .header__title {
      color: ${({ theme }) => theme.colors.primary04};
      font-size: 3rem;
    }

    & > .header__score {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  & > .header__right {
    justify-content: flex-end;
  }

  & > .board__score-section {
    ${Generators.flexGenerator()};
    gap: 1rem;

    & > .board__score {
      font-size: 2.4rem;
    }
  }
`;
