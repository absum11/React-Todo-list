import { useState } from "react";

const NewTaskForm = (props) => {
  const [newTask, setNewTask] = useState("");

  // handle updating task list state
  function handleSubmit(e) {
    e.preventDefault(); //prevents page from refreshing
    
    if(newTask=== "") return

    props.onSubmit(newTask);
    setNewTask("");
  }

  return (
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
  );
};

export default NewTaskForm;
