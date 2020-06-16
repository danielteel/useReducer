import React from 'react';
import ToDoList from './ToDoList'
import NewToDo from './NewToDo'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {
        name: ''
      },
      todos: [
        { name: 'laundry' },
        { name: 'buy groceries' },
        { name: 'mow lawn' }
      ]
    }
  }

  handleChange(event){
    this.setState({
      currentItem: {
        name: event.target.value 
      }
    })
  }

  handleSubmit(event) {
    this.setState({
       todos: this.state.todos.concat(this.state.currentItem),
       currentItem: {
         name: ''
       }
    })
    event.preventDefault()
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
