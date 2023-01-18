import styled from "styled-components";

export const Button = styled.div`
  font-size: 20px;
  padding: 1px 10px;
  cursor: pointer;

  &:hover,
  &.selected{
    background-color: #fff;
    border: 1px solid grey;
    border-radius: 10px;
  }
`;
