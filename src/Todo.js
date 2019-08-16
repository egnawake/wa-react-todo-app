import React from 'react';
import TodoEditor from './TodoEditor';
import './base.css';
import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isBeingEdited: false };

    this.handleRemoveButton = this.handleRemoveButton.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleTodoEdited = this.handleTodoEdited.bind(this);
  }

  handleRemoveButton() {
    this.props.onTodoRemove();
  }

  handleEditButton() {
    this.setState({ isBeingEdited: true });
  }

  handleTodoEdited(text) {
    this.props.onTodoEdit(text);
    this.setState({ isBeingEdited: false });
  }

  render() {
    if (this.state.isBeingEdited) {
      return (
        <div className="Todo">
          <TodoEditor todo={this.props.todo} onEditAccepted={this.handleTodoEdited} />
        </div>
      );
    }

    return (
      <div className="Todo">
        <span className="TodoText">{this.props.todo}</span>
        <div class="TodoActions">
          <button className="Button" type="button" onClick={this.handleEditButton}>Edit</button>
          <button className="Button" type="button" onClick={this.handleRemoveButton}>Remove</button>
        </div>
      </div>
    );
  }
}

export default Todo;
