import React from 'react';
import './base.css';
import './TodoEditor.css';

class TodoEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { newTodo: this.props.todo };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAcceptButton = this.handleAcceptButton.bind(this);
  }

  handleInputChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  handleAcceptButton() {
    this.props.onEditAccepted(this.state.newTodo);
  }

  render() {
    return (
      <div className="TodoEditor">
        <input
          maxlength="60"
          className="Input"
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button className="Button" type="button" onClick={this.handleAcceptButton}>Accept</button>
      </div>
    );
  }
}

export default TodoEditor;
