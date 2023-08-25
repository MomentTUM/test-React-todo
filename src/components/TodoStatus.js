import { useState } from "react";

export default function TodoStatus({
  todo,
  activeTodo,
  completedTodo,
  allTodo,
  clearCompleteTodo
}) {
  const count = todo.filter((todo) => !todo.completed).length;
  const [activeButton, setActiveButton] = useState("all");

  const handleAllClick = () => {
    setActiveButton("all");
    allTodo();
  };

  const handleActiveClick = () => {
    setActiveButton("active");
    activeTodo();
  };

  const handleCompletedClick = () => {
    setActiveButton("completed");
    completedTodo();
  };
  return (
    <div>
      <div className="status">
        <span>{count} item left</span>
        <button
          className={"btn" + (activeButton === "all" ? " active" : "")}
          onClick={handleAllClick}
        >
          All
        </button>
        <button
          className={"btn" + (activeButton === "active" ? " active" : "")}
          onClick={handleActiveClick}
        >
          Active
        </button>
        <button
          className={"btn" + (activeButton === "completed" ? " active" : "")}
          onClick={handleCompletedClick}
        >
          Completed
        </button>
        <a href="#" className="btnClear" type="button" onClick={clearCompleteTodo}>clear completed</a>
      </div>
    </div>
  );
}
