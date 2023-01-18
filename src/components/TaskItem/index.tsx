import React from "react";
import { TaskItemContainer, Title } from "./styles";
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
    <TaskItemContainer>
      <RadioButton task={task} toggleComplete={toggleComplete} />
      <Title className={task.completed ? "completed" : ""}>{task.title}</Title>
      <Button onClick={() => deleteTask(task)}>X</Button>
    </TaskItemContainer>
  );
};
