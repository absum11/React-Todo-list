const TaskItem = ({ id, completed, title, handleChecked, onDeleteTask }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => handleChecked(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => onDeleteTask(id)}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
