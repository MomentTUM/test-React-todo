import TodoForm from "./TodoForm";
import { useState } from "react";
import TodoContent from "./TodoContent";

export default function TodoItem({
  todo,
  deleteTodo,
  completeTodo,
  updateTodo,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const openEdit = () => setIsEdit(true);
  const closeEdit = () => setIsEdit(false);

  return (
    <div className="listGroup">
      {isEdit ? (
        <TodoForm closeEdit={closeEdit} todo={todo} updateTodo={updateTodo}/>
      ) : (
        <TodoContent
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          openEdit={openEdit}
        />
      )}
    </div>
  );
}
