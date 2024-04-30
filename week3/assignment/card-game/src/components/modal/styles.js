import styled from "@emotion/styled";
import { Generators } from "@styles";

export const ModalContainer = styled.dialog`
  width: 40rem;
  height: 30rem;
  left: calc(50% - 20rem);
  top: 20rem;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }

  & > .modal {
    width: 100%;
    height: 100%;
    ${Generators.flexGenerator("column")};
    gap: 1rem;

    & > .modal__title {
      font-size: 3.2rem;
    }

    & > .modal__button {
      font-size: 2rem;
      padding: 1rem;
      width: auto;
      background-color: ${({ theme }) => theme.colors.primary03};
    }
  }
`;
