import { useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  //   create a new todo attribute
  const addTodo = (input) => {
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

  //   Delete the desired todo
  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  // Edit Todo
  const updateTodo = (id, newValue) => {
    // obtain cell ID
    const index = todos.findIndex((todo) => todo.id === id);
    // clone find index
    const selectedTodo = { ...todos[index] };
    // apply new text
    selectedTodo.text = newValue;
    // clone todos
    const updateTodos = [...todos];

    // update state
    updateTodos[index] = selectedTodo;
    setTodos(updateTodos);
  };

  return (
    <div className='container'>
      <NavBar
        unCompletedTodo={todos.filter((todo) => !todo.isCompleted).length}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={todos}
        onComplete={completeTodo}
        onDelete={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
