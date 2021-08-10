import { useState } from "react";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "../styles/Home.module.scss";

function SearchBar({ textSearch, setTextSearch, value, setValue }) {
  const [checked, setChecked] = useState(false);
  function handleChange(e) {
    setValue(e.target.value);
    setChecked(false);
  }
  return (
    <div className={styles.search_bar}>
      <div className={styles.search_field}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for a country.."
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
      </div>
      <div
        className={styles.continents_filter_Field}
        tabIndex="0"
        onBlur={() => setChecked(false)}
      >
        <input
          type="checkbox"
          id="expand"
          hidden
          onChange={(e) => setChecked(e.target.checked)}
          checked={checked}
        />
        <label htmlFor="expand" className={styles.labelField}>
          <span> {value ? value : "Filter by Region"}</span>
          <ExpandMoreIcon />
        </label>
        <div className={styles.expandField} onChange={handleChange}>
          <label>
            <input value="Africa" type="radio" name="option" />
            Africa
          </label>
          <label>
            <input value="Americas" type="radio" name="option" />
            America
          </label>
          <label>
            <input value="Asia" type="radio" name="option" />
            Asia
          </label>
          <label>
            <input value="Europe" type="radio" name="option" />
            Europe
          </label>
          <label>
            <input value="Oceania" type="radio" name="option" />
            Oceania
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
