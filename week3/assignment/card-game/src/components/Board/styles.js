import styled from "@emotion/styled";
import { Generators } from "@styles";

export const BoardContainer = styled.section`
  padding-top: 12rem;

  width: 100%;
  ${Generators.flexGenerator("column", "flex-start", "center")};

  & > .board__header {
    width: 100%;
    padding: 2rem;
    ${Generators.flexGenerator("row", "flex-start", "center")};
    gap: 1.5rem;
  }

  & > .board__cards {
    width: 108rem;
    padding: 2rem;
    gap: 1rem;
    ${Generators.flexGenerator("row", "flex-start", "center")};
    flex-wrap: wrap;

    & > .card__wrapper {
      position: relative;
      transition: transform 0.5s ease-in;

      & > .card__cover {
        position: absolute;
        transition: visibility 0.3s ease-in;
        z-index: 1;
      }

      & > .card__img {
        transform: rotateY(180deg);
      }
    }

    & > .card--open {
      transform: rotateY(-180deg);

      & > .card__cover {
        visibility: hidden;
      }
    }
  }
`;
