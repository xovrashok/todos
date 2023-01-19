import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Todo/App';
import { TodoProvider } from './module/todo/TodoContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
