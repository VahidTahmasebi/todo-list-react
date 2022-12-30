const NavBar = ({ unCompletedTodo, status, onSelect }) => {
  // if it is a condition, write the text
  if (!unCompletedTodo) return <h2>set your today todos !</h2>;
  return (
    <header>
      <span>{unCompletedTodo}</span> <h2>are not completed</h2>
      <select onChange={onSelect} value={status}>
        <option value='All'>All</option>
        <option value='Completed'>Completed</option>
        <option value='Uncompleted'>Uncompleted</option>
      </select>
    </header>
  );
};

export default NavBar;
