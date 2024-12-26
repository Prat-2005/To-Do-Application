import React from 'react';

const TodoItem = ({ todo, editId, editTask, handleEditChange, handleEdit, handleUpdate, handleDelete }) => (
  <li className='list-group-item d-flex justify-content-between align-items-center'>
    {editId === todo.id ? (
      <input
        type='text'
        className='form-control'
        value={editTask}
        onChange={handleEditChange}
      />
    ) : (
      <span>{todo.task}</span>
    )}
    <div>
      {editId === todo.id ? (
        <button className='btn btn-success btn-sm mx-1' onClick={handleUpdate}>
          Update
        </button>
      ) : (
        <button className='btn btn-warning btn-sm mx-1' onClick={() => handleEdit(todo.id, todo.task)}>
          Update
        </button>
      )}
      <button className='btn btn-danger btn-sm my-1' onClick={() => handleDelete(todo.id)}>
        Delete
      </button>
    </div>
  </li>
);

export default TodoItem;