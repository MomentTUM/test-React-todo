import { useState } from "react";

export default function TodoContent({ todo, deleteTodo, completeTodo,openEdit }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`listItem ${todo.completed ? "completed" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="btnComplete" onClick={() => completeTodo(todo.id)}>{`${
        todo.completed ? "✔" : ""
      }`}</button>
      {isHovered && (
        <button className="btnDelete" onClick={() => {deleteTodo(todo.id)}}>✘</button>
      )}
      <span onDoubleClick={openEdit}>{todo.title}</span>
    </div>
  );
}
