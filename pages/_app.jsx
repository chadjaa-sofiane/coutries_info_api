import { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [checked, setChecked] = useState(false);
  function togglechecked(e) {
    setChecked(e.target.checked);
  }
  return (
    <div className={`${styles.wrapper} ${checked && styles.dark_mode}`}>
      <Header checked={checked} togglechecked={togglechecked} />
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
