import styled from 'styled-components';

export const ItemOfContact = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
