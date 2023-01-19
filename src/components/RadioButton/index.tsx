import { Checkbox } from "./styles";
import { useTodoContext } from "../../context/TodoContext";

interface TaskItemProps {
  task: Task;
}

export const RadioButton = ({ task }: TaskItemProps) => {
  const { toggleComplete } = useTodoContext();
  return (
    <Checkbox
      type="checkbox"
      id={task.id}
      checked={task.completed}
      onChange={() => toggleComplete(task)}
    />
  );
};
