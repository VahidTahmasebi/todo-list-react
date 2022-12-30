import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const NavBar = ({ unCompletedTodo, onChange, selectedOption }) => {
  // if it is a condition, write the text
  if (!unCompletedTodo) return <h2>set your today todos !</h2>;
  return (
    <header>
      <span>{unCompletedTodo}</span> <h2>are not completed</h2>
      <Select className="select" onChange={onChange} value={selectedOption} options={options} />
      {/* <select onChange={onSelect} value={status}>
        <option value='All'>All</option>
        <option value='Completed'>Completed</option>
        <option value='Uncompleted'>Uncompleted</option>
      </select> */}
    </header>
  );
};

export default NavBar;
