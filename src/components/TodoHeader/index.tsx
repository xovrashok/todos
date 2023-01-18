import React from "react";
import { InputField } from "../InputField";

interface TodoHeaderProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  setTasksToLocalStorage: (tasks: Task[]) => void;
}
export const TodoHeader = ({
  tasks,
  setTasks,
  setTasksToLocalStorage,
}: TodoHeaderProps) => {
  const addTask = (title: string) => {
    if (title !== "") {
      const taskId = "task-" + Date.now();
      const newTask = {
        id: taskId,
        title: title,
        completed: false,
      };
      const updatedTasks = [newTask, ...tasks];
      setTasks(updatedTasks);
      setTasksToLocalStorage(updatedTasks);
    }
  };
  return <InputField addTask={addTask} />;
};
