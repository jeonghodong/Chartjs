import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.Header}>
      <h1>
        <Link to="/">CHART!</Link>
      </h1>
      <span>😀</span>
    </header>
  );
}

export default Header;
