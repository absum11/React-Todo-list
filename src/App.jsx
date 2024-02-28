import { useState } from "react";
import "./styles.css";
import NewTaskForm from "./components/NewTaskForm";
import Tasklist from "./components/TaskList";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  // handle task check/uncheck
  function handleChecked(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  // handle deleteion of a task from task list
  function onDeleteTask(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTaskForm onSubmit={addTodo} />
      <h1 className="header">Todo list</h1>
      <Tasklist
        todos={todos}
        handleChecked={handleChecked}
        onDeleteTask={onDeleteTask}
      />
    </>
  );
}
