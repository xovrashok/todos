import React from "react";
import { TaskItem } from "../TaskItem";

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
    <ul id="task-list" className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};
