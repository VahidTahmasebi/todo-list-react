const TodoList = ({ todos }) => {
  const renderTodo = () => {
    // if there is no todo
    if (todos.length === 0) return <p>add note todos</p>;

    return todos.map((todo) => {
      return (
        <div key={todo.id}>
          <div>{todo.text}</div>
          <div>
            <button>Edit</button>
            <button>Complete</button>
          </div>
        </div>
      );
    });
  };

  // create structure todo list
  // loop on state
  return <div>{renderTodo()}</div>;
};

export default TodoList;
