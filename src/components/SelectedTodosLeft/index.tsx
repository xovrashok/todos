import { useTodoContext } from "../../context/TodoContext";
import { SelectedTodosLeftContainer } from "./styles";

export const SelectedTodosLeft = () => {
  const { activeCount } = useTodoContext();
  return (
    <SelectedTodosLeftContainer>
      <span>{activeCount} tasks left</span>
    </SelectedTodosLeftContainer>
  );
};
