import {createContext, FunctionComponent, useContext, useEffect, useState} from "react";
import { FILTER, STORAGE_KEY_TASKS } from "../constants";

export type TodoContextType = {
  tasks: Task[];
  activeCount: number;
  addTask: (task: string) => void;
  toggleComplete: (task: Task) => void;
  deleteTask: (task: Task) => void;
  filter: FILTER;
  setFilter: (filter: FILTER) => void;
  setTasks: (tasks: Task[]) => void;
};
export const TodoContext = createContext({});


export const TodoProvider:FunctionComponent = ({ children }: any) =>{
  const [filter, setFilter] = useState<string>(FILTER.ALL);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [activeCount, setActiveCount] = useState<number>(0);

  useEffect(() => {
    switch (filter) {
      case FILTER.ACTIVE:
        setFilteredTasks(tasks.filter((task) => !task.completed));
        break;
      case FILTER.COMPLETED:
        setFilteredTasks(tasks.filter((task) => task.completed));
        break;
      default:
        setFilteredTasks(tasks);
    }
  }, [filter, tasks]);

  useEffect(() => {
    const activeCount = tasks.reduce((accum, task) => {
      return task.completed ? accum : accum + 1;
    }, 0);
    setActiveCount(activeCount);
  }, [tasks]);

  useEffect(() => {
    const taskItemsStr = localStorage.getItem(STORAGE_KEY_TASKS);
    if (!taskItemsStr) return;

    const taskItems = JSON.parse(taskItemsStr);
    setTasks(taskItems);
  }, []);

  const setTasksToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(tasks));
  };

  const toggleComplete: ToggleComplete = (selectedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task === selectedTask) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    setTasksToLocalStorage(updatedTasks);
  };

  const deleteTask: DeleteTask = (selectedTask) => {
    const updatedTasks = tasks.filter((task) => task !== selectedTask);
    setTasks(updatedTasks);
    setTasksToLocalStorage(updatedTasks);
  };

  const clearCompleted = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
    setTasksToLocalStorage(updatedTasks);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        filter: FILTER.ALL,
        activeCount,
        setFilter,
        setTasks,
        toggleComplete,
        deleteTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext);
