// create structure todo

const Todo = ({ todo, onComplete }) => {
  return (
    <div className='todo'>
      <div>{todo.text}</div>
      <div>
        <button>Edit</button>
        <button onClick={onComplete}>Complete</button>
      </div>
    </div>
  );
};

export default Todo;
