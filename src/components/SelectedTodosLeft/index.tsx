import React from "react";
import { SelectedTodosLeftContainer } from "./styles";

interface SelectedTodosLeftProps {
  activeCount: number;
}
export const SelectedTodosLeft = ({ activeCount }: SelectedTodosLeftProps) => {
  return (
    <SelectedTodosLeftContainer>
      <span>{activeCount} tasks left</span>
    </SelectedTodosLeftContainer>
  );
};
