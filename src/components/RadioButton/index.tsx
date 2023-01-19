import { Checkbox } from './styles';
import { useTodo } from '../../module/todo/useTodoContext';
import { Task } from '../../interfaces/types';

interface TaskItemProps {
  task: Task;
}

export const RadioButton = ({ task }: TaskItemProps) => {
  const { toggleComplete } = useTodo();
  return <Checkbox type="checkbox" id={task.id} checked={task.completed} onChange={() => toggleComplete(task)} />;
};
