import React, { ChangeEvent, FormEvent, useState } from "react";
import { InputFieldContainer } from "./styles";


interface NewTaskFormProps {
  addTask: AddTask;
}

export const InputField = ({ addTask }: NewTaskFormProps) => {
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
