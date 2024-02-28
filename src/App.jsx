import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([]);
  
  // handle updating task list state
  function handleSubmit(e) {
    e.preventDefault(); //prevents page from refreshing

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newTask, completed: false },
      ];
    });
    setNewTask("")
  }
  


  return (
    <>
      <form onSubmit={handleSubmit} className="new-task-form">
        <div className="form-row">
          <label htmlFor="task">New Task</label>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            id="task"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo list</h1>
      <ul className="list">
        {todos.length === 0 && "No task added"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" 
                checked={todo.completed}
                 />
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
