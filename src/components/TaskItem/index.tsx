import React from "react";
import { Li } from "./styles";
import { RadioButton } from "../RadioButton";
import Button from "../Button";

interface TaskItemProps {
  task: Task;
  toggleComplete: ToggleComplete;
  deleteTask: DeleteTask;
}

export const TaskItem = ({
  task,
  toggleComplete,
  deleteTask,
}: TaskItemProps) => {
  return (
    <Li className={task.completed ? "task-item completed" : "task-item"}>
      <RadioButton task={task} toggleComplete={toggleComplete} />
      <span>{task.title}</span>
      <Button onClick={() => deleteTask(task)}>X</Button>
    </Li>
  );
};
