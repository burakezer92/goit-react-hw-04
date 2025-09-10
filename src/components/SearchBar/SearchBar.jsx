import css from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <header className={css.header}>
      <form className={css.form}>
        <input
          className={css.searchInput}
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
