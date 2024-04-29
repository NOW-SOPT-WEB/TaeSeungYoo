import styled from "@emotion/styled";
import { Generators } from "@styles";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.primary02};

  ${Generators.flexGenerator()};

  & > .header__title {
    color: ${({ theme }) => theme.colors.primary04};
    font-size: 4rem;
  }
`;
