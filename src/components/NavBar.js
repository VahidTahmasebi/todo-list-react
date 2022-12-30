const NavBar = ({ unCompletedTodo }) => {
  if (!unCompletedTodo) return <h2>set your today todos !</h2>;
  return (
    <header>
      <span>{unCompletedTodo}</span> <h2>are not completed</h2>
    </header>
  );
};

export default NavBar;
