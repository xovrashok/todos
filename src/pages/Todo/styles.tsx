import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr;
  padding: 25px;
  `;
export const TodoTitle = styled.h1`
  display: grid;
  grid-column-start: 6;
  justify-content: center;
  align-self: center;
`;

export const TodoContainer = styled.div`
  display: grid;
  grid-row-start: 2;
  grid-column-start: 2;
  grid-column-end: 10;
  height: max-content;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 5px 15px;
`;
