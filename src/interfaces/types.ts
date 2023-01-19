export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export type ToggleComplete = (selectedTask: Task) => void;

export type DeleteTask = (selectedTask: Task) => void;

export type SetFilter = (filter: string) => void;
