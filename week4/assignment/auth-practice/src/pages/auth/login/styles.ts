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
    width: 100px;
    height: 100px;
    margin-top: 2rem;
  }

  & > .login__input {
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
    margin-top: 2rem;

    & > button {
      width: 100%;
      height: 3rem;
      font-size: 1.5rem;
      margin-top: 1rem;
      padding: 0.5rem;
      background-color: ${Colors.Blue};
      color: ${Colors.White};
      border: none;
      cursor: pointer;
    }

    & > button:last-of-type {
      background-color: ${Colors.Gray};
    }
  }
`;
