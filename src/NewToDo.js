import React, { useEffect, useRef, useState } from 'react';

function NewToDo({dispatch}) {
	const [didSubmit, setDidSubmit] = useState(false);
	const toDoRef = useRef("");

	const onSubmit = (e) => {
														e.preventDefault();
														dispatch({type: 'add_todo', value: {name: toDoRef.current.value}});
														toDoRef.current.value="";
														setDidSubmit(!didSubmit);
													}

	useEffect( () => { toDoRef.current.focus() }, [didSubmit]);

	return (
		<div>
				<form onSubmit={ onSubmit }>
						<label for="new-todo-title">New Item:</label>
								<input type="text" name="new-todo-title" ref={toDoRef}/>
						<input type="submit" value="Submit"/>
				</form>
		</div>
	);
}

export default NewToDo;