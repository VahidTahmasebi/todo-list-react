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

  //   complete handler todo
  const completeTodo = (id) => {
    // obtain cell ID
    const index = todos.findIndex((todo) => todo.id === id);
    // clone find index
    const selectedTodo = { ...todos[index] };
    // apply order
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    // clone todos
    const updatedTodos = [...todos];

    // update state
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  return (
    <div className='container'>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onComplete={completeTodo} />
    </div>
  );
};

export default TodoApp;
