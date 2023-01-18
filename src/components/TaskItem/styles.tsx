import styled from "styled-components";

export const TaskItemContainer = styled.li`
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: flex-start;
  width: 80%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  margin: 0 auto;
  margin-bottom: 10px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Checkbox = styled.input`
  display: grid;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: #333;
  }
`;

export const Title = styled.span`
    &.completed {
        background-color: #f5f5f5;
        text-decoration: line-through;
    }
`;

