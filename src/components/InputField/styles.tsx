import styled from "styled-components";

export const InputFieldContainer = styled.input`
  display: grid;
  width: 80%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
  margin: 0 auto;
  &:focus {
    border-color: #333;
  }
`;
