import React, { Component, createContext } from 'react';

const TodoContext = createContext();

class TodoProvider extends Component {
  state = {
    todos: [],
    addTodo: (todo) => {
      this.setState({ todos: [...this.state.todos, todo] });
    },
    deleteTodo: (id) => {
      this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
    },
    updateTodo: (id, updatedTask) => {
      this.setState({
        todos: this.state.todos.map(todo =>
          todo.id === id ? { ...todo, task: updatedTask } : todo
        )
      });
    },
    deleteAllTodos: () => {
        this.setState({ todos: [] });
    }
  };

  render() {
    return (
      <TodoContext.Provider value={this.state}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export { TodoProvider, TodoContext };