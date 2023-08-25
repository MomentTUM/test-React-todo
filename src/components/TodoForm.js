import { useState } from "react";
import validator from "validator";
export default function TodoForm({ todo, createTodo, closeEdit, updateTodo }) {
  const [input, setInput] = useState(todo?.title || "");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validator.isEmpty(input.trim())) {
      setError("Title is required");
      setInput("");
    } else {
      createTodo?.(input.trim());
      updateTodo?.(todo.id, input);
      closeEdit?.();
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <button type="button" className="btnAllComplete">{`${
        todo ? "⌵" : ""
      }`}</button> */}
      <input
        style={{ border: error ? "1px red solid" : "" }}
        className="input"
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="What needs to be done?"
      ></input>
      <button className="btnDelete">{`${input ? "✘" : ""}`}</button>
      {error && <small className="error">{error}</small>}
    </form>
  );
}
