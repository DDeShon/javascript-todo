import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="title-wrapper">
          <h1>Task Manager</h1>
        </div>
        <div className="list-wrapper">
          <ul className="todo">
            <li>Go to the store</li>
            <li>Go to the store</li>
            <li>Go to the store</li>
            <li>Go to the store</li>
          </ul>
        </div>
        <button className="btn-new-task">New Task</button>
      </div>
    </div>
  );
}

export default App;
