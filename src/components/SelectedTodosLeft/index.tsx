import React, {useContext} from "react";
import {TodoContext} from "../../context/TodoContext"
import { SelectedTodosLeftContainer } from "./styles";

export const SelectedTodosLeft = () => {
    const activeCount = useContext(TodoContext).activeCount;
  return (
    <SelectedTodosLeftContainer>
      <span>{activeCount} tasks left</span>
    </SelectedTodosLeftContainer>
  );
};
