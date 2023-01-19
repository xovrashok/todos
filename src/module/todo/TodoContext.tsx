import { createContext } from 'react';
import { FILTER } from '../../constants';
import { Task } from '../../interfaces/types';

export type TodoContextType = {
  tasks: Array<Task>;
  activeCount: number;
  addTask: (title: string) => void;
  toggleComplete: (task: Task) => void;
  deleteTask: (task: Task) => void;
  filter: FILTER;
  setFilter: (filter: FILTER) => void;
  setTasks: (tasks: Task[]) => void;
  setTasksToLocalStorage: (tasks: Task[]) => void;
  filteredTasks: Task[];
  clearCompleted: () => void;
};
export const TodoContext = createContext({
  tasks: [] as Task[],
  activeCount: 0,
  setTasks: (task: Task[]) => {},
  addTask: (title: string) => {},
  toggleComplete: (task: Task) => {},
  deleteTask: (task: Task) => {},
  filter: FILTER.ALL,
  setFilter: (filter: FILTER) => {},
  setTasksToLocalStorage: (tasks: Task[]) => {},
  filteredTasks: [] as Task[],
  clearCompleted: () => {},
} as TodoContextType);
