import React from "react";

const todos = [
  "Finish To Do App",
  "Go to the store",
  "Do laundry",
  "Do dishes",
];

const Todo = (props) => <li>{props.todo}</li>;

const TodoList = () => (
  <ul>
    {todos.map((todo) => (
      <li key={todo}>{todo}</li>
    ))}
  </ul>
);

export default TodoList;
