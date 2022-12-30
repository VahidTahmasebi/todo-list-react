import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

// render structure todo list
const TodoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const renderTodo = () => {
    // if there is no todo
    if (todos.length === 0) return <p>add note todos</p>;

    // loop on todo state
    return todos.map((todo) => {
      return (
        // props onComplete & onDelete & onEdit: get the desired todo id
        <Todo
          todo={todo}
          key={todo.id}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };
  // if there is an edit, <TodoForm/> will be activated,  otherwise, renderTodo()
  return (
    <div>
      {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodo()}
    </div>
  );
};

export default TodoList;
