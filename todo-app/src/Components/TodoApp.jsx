import React, { Component } from 'react';
import { TodoContext } from './TodoContext';
import TodoItem from './TodoItem';
import 'bootstrap/dist/css/bootstrap.min.css';

class TodoApp extends Component {
  static contextType = TodoContext;

  state = {
    task: '',
    editId: null,
    editTask: ''
  };

  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };

  handleEditChange = (event) => {
    this.setState({ editTask: event.target.value });
  };

  handleAdd = () => {
    const newTodo = { id: Date.now(), task: this.state.task };
    this.context.addTodo(newTodo);
    this.setState({ task: '' });
  };

  handleDelete = (id) => {
    this.context.deleteTodo(id);
  };

  handleEdit = (id, task) => {
    this.setState({ editId: id, editTask: task });
  };

  handleUpdate = () => {
    this.context.updateTodo(this.state.editId, this.state.editTask);
    this.setState({ editId: null, editTask: '' });
  };

  handleDeleteAll = () => {
    this.context.deleteAllTodos();
  };

  render() {
    const { todos } = this.context;
    return (
      <div className='container text-center mt-5'>
        <h1><i>Daily To-Do Tracker App</i></h1>
        <div className='input-group my-4'>
          <input
            type='text'
            className='form-control'
            placeholder="Enter your today's task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button className='btn btn-primary' onClick={this.handleAdd}>
            Add Task
          </button>
        </div>
        {todos.length > 0 && (<div className='d-flex justify-content-between align-items-center mb-3'>
            <h2 className='mb-0'>Task List</h2>
            <button className='btn btn-danger mb-0' onClick={this.handleDeleteAll}>
                  Delete All
            </button>
        </div>)}
        <ul className='list-group'>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editId={this.state.editId}
              editTask={this.state.editTask}
              handleEditChange={this.handleEditChange}
              handleEdit={this.handleEdit}
              handleUpdate={this.handleUpdate}
              handleDelete={this.handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;