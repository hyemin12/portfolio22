import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Nav = () => {
  return (
    <ul className={styles.nav}>
      <Link to="/" className={styles.nav_item}>
        <h4>Works</h4>
      </Link>
      <Link to="/profile" className={styles.nav_item}>
        <h4>about</h4>
      </Link>
    </ul>
  );
};
export default Nav;
