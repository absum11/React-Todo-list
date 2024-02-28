import TaskItem from "./TaskItem";

const Tasklist = ({ todos, handleChecked, onDeleteTask }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "No task added"}
      {todos.map((todo) => {
        return (
          <TaskItem
            {...todo}
            key={todo.id}
            handleChecked={handleChecked}
            onDeleteTask={onDeleteTask}
          />
        );
      })}
    </ul>
  );
};

export default Tasklist;
