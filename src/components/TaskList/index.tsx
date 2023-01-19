import { useTodo } from '../../module/todo/useTodoContext';
import { TaskItem } from '../TaskItem';
import { TaskListContainer } from './styles';

export const TaskList = () => {
  const { filteredTasks } = useTodo();
  return (
    <TaskListContainer>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </TaskListContainer>
  );
};
