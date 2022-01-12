import React from "react";
import "./App.css";
import TodoList from "./components/todoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Finish To Do App", "Go to the store", "Do laundry", "Do dishes"],
    };
  }

  addTodo = (todo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
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
            <TodoList todos={this.state.todos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
