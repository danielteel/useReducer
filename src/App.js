import React, { useReducer } from 'react';
import ToDoList from './ToDoList'
import NewToDo from './NewToDo'

const initialToDos={
	todos: [
		{ id: 0, done: true, name: 'laundry' },
		{ id: 1, done: false, name: 'buy groceries' },
		{ id: 2, done: false, name: 'mow lawn' }
	]
};


function ToDoReducer(state, action){
		switch (action.type){
				case 'add_todo':
						const newTodo = {...action.value};
						newTodo.id = Math.max(...state.todos.map(i=> (isFinite(i.id) ? i.id : 0 )))+1;
						return {...state, todos: [...state.todos, newTodo]};

				case 'delete_todo':
						return {...state, todos: state.todos.filter( todo => todo.id!==action.value ) }

				case 'toggle_done':
						return {...state, todos: state.todos.map( todo => todo.id!==action.value ? todo : {...todo, done: !todo.done} ) };

				default:
						return state;
		}
}

export default function App(){
	const [state, dispatch] = useReducer(ToDoReducer, initialToDos);

	return (
		<div className="App">
			<ToDoList dispatch={ dispatch } todos={ state.todos } />
			<NewToDo dispatch={ dispatch }/>
		</div>
	);
}
