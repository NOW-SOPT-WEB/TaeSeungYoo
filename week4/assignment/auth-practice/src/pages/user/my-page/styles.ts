import styled from '@emotion/styled';
import { Generators, Colors } from '@styles';

export const MyPageContainer = styled.div`
  ${Generators.flexGenerator('column')};
  gap: 2rem;
  padding: 2rem;

  & > h1 {
    font-size: 2.5rem;
  }

  & > .my-page__info {
    ${Generators.flexGenerator('column')};
    gap: 1rem;

    & > .info__item {
      ${Generators.flexGenerator()};
      gap: 1rem;
      font-size: 1.6rem;

      & > div {
        width: 20rem;
      }

      & div:first-of-type {
        text-align: right;
      }
    }
  }

  & > .my-page__change-password {
    ${Generators.flexGenerator('column')};

    & > button {
      ${Generators.flexGenerator()};
      border: none;
      background-color: ${Colors.White};
      gap: 1rem;

      &:hover {
        cursor: pointer;
        background-color: ${Colors.BgGray};
      }
    }

    & > .change-password__input {
      ${Generators.flexGenerator('column')};
      gap: 1rem;

      & > input {
        width: 100%;
        height: 3rem;
        padding: 0.5rem;
        border: 1px solid ${Colors.Gray};
        border-radius: 0.5rem;
      }

      & > button {
        width: 100%;
        height: 3rem;
        background-color: ${Colors.Primary01};
        color: ${Colors.White};
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
      }
    }
  }

  & > .my-page__button {
    ${Generators.flexGenerator()};
    gap: 1rem;

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
