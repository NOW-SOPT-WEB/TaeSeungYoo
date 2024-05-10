import styled from '@emotion/styled';
import { Generators, Colors } from '@styles';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  ${Generators.flexGenerator('column')};
  padding: 3rem;

  & > h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  & > .join__button {
    width: 30rem;
    ${Generators.flexGenerator()};
    gap: 1rem;
    margin-top: 2rem;

    & > button {
      width: 100%;
      height: 3rem;
      background-color: ${Colors.Primary01};
      color: ${Colors.White};
      border: none;
      border-radius: 1rem;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;
