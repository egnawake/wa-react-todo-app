import React from 'react';
import './App.css';
import TodoList from './TodoList';

const mockTodos = [
  'Task 1',
  'Task 2',
  'Task 3',
  'Task 4'
];

class App extends React.Component {
  getTodos() {
    return mockTodos;
  }

  render() {
    return (
      <div className="App">
        <TodoList todos={this.getTodos()} />
      </div>
    );
  }
}

export default App;
