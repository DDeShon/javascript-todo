import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoInput: "" };
  }

  handleChange = (event) => {
    this.setState({ todoInput: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.todoInput);
  };

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          className="input-field"
          type="text"
          placeholder="Enter Task"
          value={this.state.todoInput}
          onChange={(event) => this.handleChange(event)}
        />
        <input className="btn-new-task" type="submit" value="Add Task" />
      </form>
    );
  }
}

export default TodoForm;
