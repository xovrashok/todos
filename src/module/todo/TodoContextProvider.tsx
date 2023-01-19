import { useEffect, useState } from 'react';
import { FILTER, STORAGE_KEY_TASKS } from '../../constants';
import { TodoContext } from './TodoContext';
import { DeleteTask, Task, ToggleComplete } from '../../interfaces/types';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const TodoProvider = ({ children }: Props) => {
  const [filter, setFilter] = useState(FILTER.ALL);
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

  const addTask = (title: string) => {
    if (title !== '') {
      const taskId = 'task-' + Date.now();
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

  return (
    <TodoContext.Provider
      value={{
        tasks,
        activeCount,
        addTask,
        toggleComplete,
        deleteTask,
        filter,
        setFilter,
        setTasks,
        setTasksToLocalStorage,
        filteredTasks,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
