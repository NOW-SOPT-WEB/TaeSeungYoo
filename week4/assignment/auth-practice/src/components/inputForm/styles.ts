import styled from '@emotion/styled';
import { Colors } from '@styles';

export const InputFormContainer = styled.div`
  width: 100%;
  & > h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  & > input {
    width: 100%;
    height: 3rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid ${Colors.Gray};
    border-radius: 1rem;
  }

  &.error {
    & > input {
      border: 1px solid ${Colors.Red};
    }
  }

  & > p {
    font-size: 0.875rem;
    color: ${Colors.Blue};
  }
`;
