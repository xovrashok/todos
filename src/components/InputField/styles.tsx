import styled from 'styled-components';

export const InputFieldContainer = styled.input`
  display: grid;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: #333;
  }
`;

export const Form = styled.form`
  display: grid;
  padding: 10px;
`;
