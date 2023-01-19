import { TaskList } from "../../components/TaskList";
import { Footer } from "../../components/Footer";
import { TodoTitle, TodoContainer, Wrapper } from "./styles";
import { TodoHeader } from "../../components/TodoHeader";
import { TodoProvider } from "../../context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <Wrapper>
        <TodoTitle>Todos</TodoTitle>
        <TodoContainer>
          <TodoHeader />
          <TaskList />
          <Footer />
        </TodoContainer>
      </Wrapper>
    </TodoProvider>
  );
}

export default App;
