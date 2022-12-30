import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState(props.edit ? props.edit.text: "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  //   receive text input
  const changeHandler = (e) => {
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
    props.submitTodo(inputValue);
    // clear text entry
    setInputValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        value={inputValue}
        onChange={changeHandler}
        placeholder={props.edit ? "update todo..." : "add new todo..."}
        ref={inputRef}
      />
      <button type='submit'>{props.edit ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
