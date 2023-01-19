import { useTodo } from '../../module/todo/useTodoContext';
import { SelectedTodosLeftContainer } from './styles';

export const SelectedTodosLeft = () => {
  const { activeCount } = useTodo();

  return (
    <SelectedTodosLeftContainer>
      <span>{activeCount} tasks left</span>
    </SelectedTodosLeftContainer>
  );
};
