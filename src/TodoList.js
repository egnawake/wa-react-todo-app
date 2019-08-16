import React from 'react';
import Todo from './Todo';
import TodoAdder from './TodoAdder';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: this.props.todos };

    this.handleTodoAdd = this.handleTodoAdd.bind(this);
  }

  handleTodoAdd(todo) {
    const newState = Object.assign({}, this.state);
    newState.todos.push(todo);

    this.setState({ todos: newState.todos });
  }

  handleTodoRemove(index) {
    const newState = Object.assign({}, this.state);
    newState.todos.splice(index, 1);

    this.setState({ todos: newState.todos });
  }

  handleTodoEdit(index, text) {
    const newState = Object.assign({}, this.state);
    newState.todos[index] = text;

    this.setState({ todos: newState.todos });
  }

  render() {
    return (
      <div>
        <TodoAdder onTodoAdd={this.handleTodoAdd} />
        {this.state.todos.map((todo, index) => {
          return (
            <Todo
              todo={todo}
              key={'todo-' + index}
              onTodoRemove={this.handleTodoRemove.bind(this, index)}
              onTodoEdit={this.handleTodoEdit.bind(this, index)}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;