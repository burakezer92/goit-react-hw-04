import css from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <header>
      <form>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={props.changeWord}
        />
      </form>
    </header>
  );
}

export default SearchBar;
