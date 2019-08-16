import React from 'react';
import './base.css';
import './TodoAdder.css';

class TodoAdder extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todoToAdd: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
  }

  handleInputChange(event) {
    this.setState({ todoToAdd: event.target.value });
  }

  handleAddButtonClick() {
    this.setState({ todoToAdd: '' });
    this.props.onTodoAdd(this.state.todoToAdd);
  }

  render() {
    return (
      <div className="TodoAdder">
        <input
          className="Input"
          type="text"
          value={this.state.todoToAdd}
          onChange={this.handleInputChange}
          maxlength="60"
        />
        <button
          className="Button"
          type="button"
          onClick={this.handleAddButtonClick}
        >
          Add
        </button>
      </div>
    );
  }
}

export default TodoAdder;
