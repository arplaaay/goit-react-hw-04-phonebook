import styled from 'styled-components';

export const Form = styled.form`
  text-align: center;
`;

export const Label = styled.label`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const AddContactBtn = styled.button`
  display: block;

  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;
