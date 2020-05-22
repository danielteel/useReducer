import React from 'react';
import ToDoList from './ToDoList'
import NewToDo from './NewToDo'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: "",
      todos: [
        { name: 'laundry' },
        { name: 'buy groceries' },
        { name: 'mow lawn' }
      ]
    }
  }

  handleChange(event){
    this.setState(() => {
      return { currentItem : event.target.value }
    })
    event.preventDefault()
  }

  handleSubmit() {
    this.setState((state) => {
      return { todos: [state.todos, state.currentItem] }
    })
  }

  render() {
    return (
      <div className="App">
        <ToDoList todos={ this.state.todos} />
        <NewToDo onChange={ this.handleChange.bind(this) } onSubmit={ this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default App;
