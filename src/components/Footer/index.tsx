import { SelectedTodosLeft } from '../SelectedTodosLeft';
import { TodoStatuses } from '../TodoStatuses';
import { ClearCompletedButton, FooterContainer, StatusesContainer } from './sytles';
import Button from '../Button';
import { useTodo } from '../../module/todo/useTodoContext';

export const Footer = () => {
  const { clearCompleted } = useTodo();
  return (
    <>
      <FooterContainer>
        <SelectedTodosLeft />
        <StatusesContainer>
          <TodoStatuses />
        </StatusesContainer>
        <ClearCompletedButton>
          <Button onClick={() => clearCompleted()}>Clear Completed</Button>
        </ClearCompletedButton>
      </FooterContainer>
    </>
  );
};
