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
            <div className="list-item">
              <li>Go to the store</li>
            </div>
            <div className="list-item">
              <li>Go to the store</li>
            </div>
            <div className="list-item">
              <li>Go to the store</li>
            </div>
            <div className="list-item">
              <li>Go to the store</li>
            </div>
          </ul>
        </div>
        <button className="btn-new-task">New Task</button>
      </div>
    </div>
  );
}

export default App;
