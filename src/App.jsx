import { useState } from "react";
import "./styles.css";

export default function App() {
  const[newTask,setNewTask]=useState("")
  return (
    <>
      <form className="new-task-form">
        <div className="form-row">
          <label htmlFor="task">New Task</label>
          <input value={newTask}
           onChange={e => setNewTask(e.target.value)}
           type="text"
            id="task" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo list</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
