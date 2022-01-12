import React from "react";

const todos = [
  "Finish To Do App",
  "Go to the store",
  "Do laundry",
  "Do dishes",
];

const Todo = (props) => <li>{props.todo}</li>;

const TodoList = (props) => (
  <ul className="todo">
    {props.todos.map((todo) => (
      <Todo todo={todo} key={todo} />
    ))}
  </ul>
);

export default TodoList;
