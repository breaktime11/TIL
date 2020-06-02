import React, { Component } from 'react';
import Todo_form from './components/todo_form';
import Todo_list from './components/todo_list';
/* eslint-disable */
class App extends Component {
  id = 1;
  constructor(props) {
    super(props);
    this.state = {
      todos: [
      ],
    }
  }
  
  handleCreate = (data) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.concat({id: this.id++, ...data})
    })
  } 

  handleRemove = (selected_id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(
        info => info.id !== selected_id
      )
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App-header">
        <Todo_form 
            onCreate={this.handleCreate}/>
        <Todo_list 
          data={todos}
          onRemove={this.handleRemove} />
      </div>

    );
  }
}

export default App;