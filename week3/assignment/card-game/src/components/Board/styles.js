import styled from "@emotion/styled";
import { Generators } from "@styles";

export const BoardContainer = styled.section`
  padding-top: 10rem;

  width: 100%;
  ${Generators.flexGenerator("column", "flex-start", "center")};

  & > .board__header {
    width: 100%;
    padding: 2rem;
    ${Generators.flexGenerator("row", "space-between", "center")};

    & > .board__score-section {
      ${Generators.flexGenerator()};
      gap: 1rem;

      & > .board__score {
        font-size: 2.4rem;
      }
    }

    & > .board__level-section {
      ${Generators.flexGenerator("row", "space-between", "center")};
      gap: 1rem;
    }
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
        display: none;
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
