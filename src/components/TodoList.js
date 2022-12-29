import Todo from "./Todo";

// render structure todo list
const TodoList = ({ todos, onComplete }) => {
  const renderTodo = () => {
    // if there is no todo
    if (todos.length === 0) return <p>add note todos</p>;

    // loop on todo state
    return todos.map((todo) => {
      return (
        // props onComplete: get the desired todo id
        <Todo
          todo={todo}
          key={todo.id}
          onComplete={() => onComplete(todo.id)}
        />
      );
    });
  };

  return <div>{renderTodo()}</div>;
};

export default TodoList;
