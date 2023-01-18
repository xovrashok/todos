import React from "react";
import { Checkbox } from "./styles";

interface TaskItemProps {
  task: Task;
  toggleComplete: ToggleComplete;
}

export const RadioButton = ({ task, toggleComplete }: TaskItemProps) => {
  return (
    <Checkbox
      type="checkbox"
      id={task.id}
      onChange={() => toggleComplete(task)}
    />
  );
};
