import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState("");

  //   create a new todo attribute
  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    // update state
    setTodos([...todos, newTodo]);
  };

  return (
    <div className='container'>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList />
    </div>
  );
};

export default TodoApp;
