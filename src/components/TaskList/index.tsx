import React from "react";
import { TaskItem } from "../TaskItem";
import { TaskListContainer } from "./styles";

interface TaskListProps {
  tasks: Task[];
  toggleComplete: ToggleComplete;
  deleteTask: DeleteTask;
}

export const TaskList = ({
  tasks,
  toggleComplete,
  deleteTask,
}: TaskListProps) => {
  return (
    <TaskListContainer>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </TaskListContainer>
  );
};
