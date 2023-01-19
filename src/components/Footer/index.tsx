import { SelectedTodosLeft } from "../SelectedTodosLeft";
import { TodoStatuses } from "../TodoStatuses";
import {
  ClearCompletedButton,
  FooterContainer,
  StatusesContainer,
} from "./sytles";
import Button from "../Button";
import { useTodoContext } from "../../context/TodoContext";

export const Footer = () => {
  const { clearCompleted } = useTodoContext();
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
