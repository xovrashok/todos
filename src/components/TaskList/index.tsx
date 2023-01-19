import { TaskItem } from "../TaskItem";
import { TaskListContainer } from "./styles";
import { useTodoContext } from "../../context/TodoContext";

export const TaskList = () => {
  const { filteredTasks } = useTodoContext();
  return (
    <TaskListContainer>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </TaskListContainer>
  );
};
