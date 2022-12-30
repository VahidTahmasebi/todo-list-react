import { useState } from "react";

const NavBar = ({ unCompletedTodo, filterTodos }) => {
  const [status, setStatus] = useState("All");

  //   function to get filter information
  const changeHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };
  // if it is a condition, write the text
  if (!unCompletedTodo) return <h2>set your today todos !</h2>;
  return (
    <header>
      <span>{unCompletedTodo}</span> <h2>are not completed</h2>
      <select onChange={changeHandler}>
        <option value='All'>All</option>
        <option value='Completed'>Completed</option>
        <option value='Uncompleted'>Uncompleted</option>
      </select>
    </header>
  );
};

export default NavBar;
