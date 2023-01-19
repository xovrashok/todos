import { ChangeEvent, FormEvent, useState } from "react";
import { InputFieldContainer } from "./styles";
import { useTodoContext } from "../../context/TodoContext";

export const InputField = () => {
  const { addTask } = useTodoContext();
  const [newTask, setNewTask] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputFieldContainer
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
    </form>
  );
};
