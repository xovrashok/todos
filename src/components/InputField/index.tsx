import { ChangeEvent, FormEvent, useState } from 'react';
import { Form, InputFieldContainer } from './styles';
import { useTodo } from '../../module/todo/useTodoContext';

export const InputField = () => {
  const { addTask } = useTodo();
  const [newTask, setNewTask] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputFieldContainer type="text" value={newTask} onChange={handleChange} placeholder="What needs to be done?" />
    </Form>
  );
};
