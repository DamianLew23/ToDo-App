import React from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="App">
      TODO APP
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
