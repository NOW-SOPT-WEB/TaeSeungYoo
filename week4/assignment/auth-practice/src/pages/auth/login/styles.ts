import styled from '@emotion/styled';
import { Generators, Colors } from '@styles';

export const LoginContainer = styled.div`
  ${Generators.flexGenerator('column')}
  margin: 5rem 0;

  & > .login__title {
    font-size: 3rem;
    font-weight: 600;
  }

  & > .login__img {
    width: 10rem;
    height: 10rem;
    margin-top: 2rem;
  }

  & > .login__input {
    width: 30rem;
    & > h3 {
      font-size: 1.5rem;
      margin-top: 2rem;
    }

    & > input {
      width: 100%;
      height: 2.5rem;
      font-size: 1.5rem;
      margin-top: 1rem;
      padding: 0.5rem;
    }
  }

  & > .login__button {
    width: 30rem;
    margin-top: 2rem;
    ${Generators.flexGenerator()};
    gap: 1rem;

    & > button {
      width: 100%;
      height: 3rem;
      font-size: 1.5rem;
      margin-top: 1rem;
      padding: 0.5rem;
      background-color: ${Colors.White};
      color: ${Colors.Black};
      border: 0.1rem solid ${Colors.LightGray};
      border-radius: 1rem;
      cursor: pointer;
    }

    & > button:last-of-type {
      background-color: ${Colors.Primary01};
      color: ${Colors.White};
    }
  }
`;
