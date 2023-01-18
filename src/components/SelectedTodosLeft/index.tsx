import React from "react";

interface SelectedTodosLeftProps {
  activeCount: number;
}
export const SelectedTodosLeft = ({ activeCount }: SelectedTodosLeftProps) => {
  return (
    <span>
      <span className="active-task-count">{activeCount}</span> tasks left
    </span>
  );
};
