interface Task {
  id: string;
  title: string;
  completed: boolean;
}

type ToggleComplete = (selectedTask: Task) => void;

type AddTask = (newTask: string) => void;

type DeleteTask = (selectedTask: Task) => void;

type SetFilter = (filter: string) => void;
