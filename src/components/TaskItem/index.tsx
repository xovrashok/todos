import { TaskItemContainer, Title } from "./styles";
import { RadioButton } from "../RadioButton";
import Button from "../Button";
import { useTodoContext } from "../../context/TodoContext";

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const { deleteTask } = useTodoContext();
  return (
    <TaskItemContainer>
      <RadioButton task={task} />
      <Title className={task.completed ? "completed" : ""}>{task.title}</Title>
      <div
        style={{ gridColumnStart: "10", display: "grid", justifyContent: "center" }}
      >
        <Button onClick={() => deleteTask(task)}>X</Button>
      </div>
    </TaskItemContainer>
  );
};
