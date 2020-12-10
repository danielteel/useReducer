import React from 'react';

function ToDo({dispatch, todo}) {
  const onClick = (e) => dispatch({type: 'toggle_done', value: todo.id})
  const clickDelete = (e) => dispatch({type: 'delete_todo', value: todo.id})

  return (
    <div onClick={ onClick }>
      { (todo.done ? "DONE " : "") + todo.name }
      <button type="button" onClick={ clickDelete }>X</button>
    </div>
  );
}

export default ToDo;
