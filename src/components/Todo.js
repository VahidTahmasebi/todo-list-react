// create structure todo

const Todo = ({ todo, onComplete }) => {
  return (
    <div className='todo'>
      <div onClick={onComplete} className={todo.isCompleted ? "completed" : ""}>
        {todo.text}
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
