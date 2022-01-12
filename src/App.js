import "./App.css";
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="title-wrapper">
          <h1>Task Manager</h1>
        </div>
        <div className="input-wrapper">
          <input type="text" id="input" placeholder="Enter Task" />
          <button className="btn-new-task">Add Task</button>
        </div>
        <div className="list-wrapper">
          <TodoList />
          {/* <ul className="todo">
            <div className="list-item">
              <li>Finish To Do App</li>
            </div>
            <div className="list-item">
              <li className="checked">Go to the store</li>
            </div>
            <div className="list-item">
              <li>Do Laundry</li>
            </div>
            <div className="list-item">
              <li>Do Dishes</li>
            </div>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default App;
