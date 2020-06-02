import React, { Component } from 'react';
import Todo_item from './todo_item';

class Todo_list extends Component {

  render() {

      const {data, onRemove} = this.props; 

      
      const list = data.map(value => (
              <Todo_item
                  key={value.id}
                  info={value}
                  onRemove = {onRemove}
              />
          )
      );
      return (
          <div>
              {list}
          </div>
      )
  }
}

export default Todo_list;