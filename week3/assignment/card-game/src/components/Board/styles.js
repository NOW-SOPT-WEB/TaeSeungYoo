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
  }
`;
