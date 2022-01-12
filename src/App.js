import "./App.css";
import TodoList from "./components/todoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="title-wrapper">
          <h1>Task Manager</h1>
        </div>
        <div className="input-wrapper">
          <TodoForm />
          {/* <input type="text" id="input" placeholder="Enter Task" />
          <button className="btn-new-task">Add Task</button> */}
        </div>
        <div className="list-wrapper">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
