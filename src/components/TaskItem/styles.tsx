import styled from 'styled-components';

export const TaskItemContainer = styled.li`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  align-items: center;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  margin: 10px;
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

export const DeleteButton = styled.div`
  grid-column-start: 10;
  display: grid;
  justify-content: center;
`;
