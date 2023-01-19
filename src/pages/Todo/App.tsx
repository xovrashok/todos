import { TodoProvider } from '../../module/todo/TodoContextProvider';
import { TaskList } from '../../components/TaskList';
import { Footer } from '../../components/Footer';
import { TodoTitle, TodoContainer, Wrapper } from './styles';
import { TodoHeader } from '../../components/TodoHeader';

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
