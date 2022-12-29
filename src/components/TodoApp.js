import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  return (
    <div className='container'>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
