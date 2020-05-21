import React from 'react';
import ToDoList from './ToDoList'
import ToDo from './ToDo.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { name: 'laundry' },
        { name: 'buy groceries' },
        { name: 'mow lawn' }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <ToDoList todos={ this.state.todos} />
      </div>
    );
  }
}

export default App;
