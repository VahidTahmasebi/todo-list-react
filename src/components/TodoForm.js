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

    // alert massage because the text entry is empty
    if (!inputValue) {
      alert("enter todo !");
      return;
    }
    // send input text to the parent component
    props.addTodoHandler(inputValue);
    // clear text entry
    setInputValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input type='text' value={inputValue} onChange={changeHandler} />
      <button type='submit'>add</button>
    </form>
  );
};

export default TodoForm;
