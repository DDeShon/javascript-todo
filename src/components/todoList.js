import React from "react";

const todos = [];

const Todo = (props) => (
  <li onClick={() => props.deleteTodo(props.todo)}>{props.todo}</li>
);

const TodoList = (props) => {
  return (
    <ul className="todo">
      {props.todos.map((todo) => (
        <Todo todo={todo} key={todo} deleteTodo={props.deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
