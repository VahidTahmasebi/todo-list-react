import { useState } from "react";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState("");

  //   receive text input
  const changeHandler = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  //   form submit button operation
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input type='text' value={inputValue} onChange={changeHandler} />
      <button type='submit'>add</button>
    </form>
  );
};

export default TodoForm;
