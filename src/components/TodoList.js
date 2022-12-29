import Todo from "./Todo";

// render structure todo list
const TodoList = ({ todos }) => {
  const renderTodo = () => {
    // if there is no todo
    if (todos.length === 0) return <p>add note todos</p>;

    // loop on todo state
    return todos.map((todo) => {
      return <Todo todo={todo} key={todo.id} />;
    });
  };

  return <div>{renderTodo()}</div>;
};

export default TodoList;
