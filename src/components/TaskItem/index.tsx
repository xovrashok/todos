import { Task } from '../../interfaces/types';
import { useTodo } from '../../module/todo/useTodoContext';
import { DeleteButton, TaskItemContainer, Title } from './styles';
import { RadioButton } from '../RadioButton';
import Button from '../Button';

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const { deleteTask } = useTodo();
  return (
    <TaskItemContainer>
      <RadioButton task={task} />
      <Title className={task.completed ? 'completed' : ''}>{task.title}</Title>
      <DeleteButton>
        <Button onClick={() => deleteTask(task)}>X</Button>
      </DeleteButton>
    </TaskItemContainer>
  );
};
