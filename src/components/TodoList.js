const TodoList = ({ todos }) => {
  // if there is no todo
  if (todos.length === 0) return <p>add note todos</p>;

  // create structure todo list
  // loop on state
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div>{todo.text}</div>
            <div>
              <button>Edit</button>
              <button>Complete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
