import React from 'react';
import { TodoProvider } from './Components/TodoContext';
import TodoApp from './Components/TodoApp';
import './App.css';

const App = () => (
  <TodoProvider>
    <TodoApp />
  </TodoProvider>
);

export default App;
