import React from 'react';
import ToDo from './ToDo.js'

function ToDoList({dispatch, todos}) {
  return (
    <div>
        My To Do List:
        <ul>
         { todos.map(toDoItem => <li><ToDo dispatch = {dispatch} todo={toDoItem}/></li>) }
        </ul>
    </div>
  );
}

export default ToDoList;
