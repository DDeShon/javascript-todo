import React from "react";
import "./App.css";
import TodoList from "./components/todoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodo = (todo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));
  };

  deleteTodo = (value) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo !== value),
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="app-wrapper">
          <div className="title-wrapper">
            <h1>Task Manager</h1>
          </div>
          <div className="input-wrapper">
            <TodoForm addTodo={this.addTodo} />
          </div>
          <div className="list-wrapper">
            <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
