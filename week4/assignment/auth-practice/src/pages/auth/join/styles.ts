import styled from '@emotion/styled';
import { Generators, Colors } from '@styles';

export const JoinContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  ${Generators.flexGenerator('column')};
  & > h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  & > .join__input {
    width: 30rem;
    ${Generators.flexGenerator('column')};
    gap: 1rem;
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
      border: 0.1rem solid ${Colors.LightGray};
      border-radius: 1rem;
      font-size: 1.5rem;
      cursor: pointer;
    }

    & > button:last-of-type {
      background-color: ${Colors.White};
      color: ${Colors.Black};
    }
  }
`;
