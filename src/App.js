import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoStatus from "./components/TodoStatus";

const initialTodos = [
  // { id: uuidv4(), title: "Play game", completed: false },
  // { id: uuidv4(), title: "Watch Netflix", completed: false },
  // { id: uuidv4(), title: "Shopping", completed: false },
  // { id: uuidv4(), title: "meal with parents", completed: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  const createTodo = (title) => {
    const newTodo = { id: uuidv4(), title, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = (id, newTitle) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const activeTodo = () => {
    setStatus("active");
  };
  const completedTodo = () => {
    setStatus("completed");
  };
  const allTodo = () => {
    setStatus("all");
  };

  const clearCompleteTodo = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <section className="main">
          <TodoForm createTodo={createTodo} />
          {todos.filter((todo) => status === "active" ? !todo.completed : status === "completed" ? todo.completed : true)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              updateTodo={updateTodo}
            />
          ))}
          {todos.length ? (
            <TodoStatus
              todo={todos}
              activeTodo={activeTodo}
              completedTodo={completedTodo}
              allTodo={allTodo}
              clearCompleteTodo={clearCompleteTodo}
            />
          ) : (
            ""
          )}
        </section>
        <footer>
          <p>Double-click to edit a todo</p>
          <p>Created by petehunt </p>
          <p>Part of TodoMVC</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
