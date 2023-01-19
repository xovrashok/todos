import React from "react";
import { TaskList } from "../../components/TaskList";
import { Footer } from "../../components/Footer";
import { TodoTitle, TodoContainer } from "./styles";
import { TodoHeader } from "../../components/TodoHeader";
import { TodoContext, TodoProvider } from "../../context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div>
        <TodoTitle>Todos</TodoTitle>
        <TodoContainer>
          <TodoHeader />
          <TaskList tasks={[]} />
          <Footer />
        </TodoContainer>
      </div>
    </TodoProvider>
  );
}

export default App;
