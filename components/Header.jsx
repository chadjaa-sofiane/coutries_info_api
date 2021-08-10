import styles from "../styles/Home.module.scss";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";

function Header({ checked, togglechecked }) {
  return (
    <div className={styles.header}>
      <h2>Where in the world?</h2>
      <input
        type="checkbox"
        id="toggle_theme"
        hidden
        checked={checked}
        onChange={togglechecked}
      />
      <label htmlFor="toggle_theme">
        {checked ? (
          <>
            <NightsStayIcon />
            <p> Dark mode</p>
          </>
        ) : (
          <>
            <NightsStayOutlinedIcon />
            <p> light mode</p>
          </>
        )}
      </label>
    </div>
  );
}

export default Header;
