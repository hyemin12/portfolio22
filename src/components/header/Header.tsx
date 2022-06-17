import GitHubIcon from "@mui/icons-material/GitHub";
import BookIcon from "@mui/icons-material/Book";
import Nav from "./Nav";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.nav_wrapper}>
        <Nav />
        <div className={styles.logo}>
          <h2 className="font-point">hyemin</h2>
        </div>
        <ul className={styles.social}>
          <li>
            <a
              href="https://github.com/hyemin12"
              target="_blank"
              rel="noreferrer"
              className={styles.social_icon}
            >
              <GitHubIcon fontSize="small" />
            </a>
          </li>
          <li>
            <a
              href="https://hyemin-12.tistory.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.social_icon}
            >
              <BookIcon fontSize="small" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
