import GitHubIcon from "@mui/icons-material/GitHub";
import BookIcon from "@mui/icons-material/Book";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
const Nav = () => {
  const [isEng, setIsEng] = useState(false);
  const lists = {
    eng: [
      "</All>",
      "</React>",
      "</Typescript>",
      "</Vanilla JS>",
      "</jQuery>",
      "</ect>",
    ],
    kor: [
      "</전체>",
      "</리액트>",
      "</타입스크립트>",
      "</바닐라 자바스크립트>",
      "</제이쿼리>",
      "</기타>",
    ],
  };
  return (
    <div className={styles.nav_wrapper}>
      <Link to="/" className={styles.logo}>
        <img src="/hm-logo.png" alt="logo" className={styles.logo_img} />
      </Link>
      <div className={styles.nav}>
        <h4 className={styles.title}>&#60;프로필&#62;</h4>
        <Link to="/profile">
          <span className={styles.item}>&#60;/고혜민&#62;</span>
        </Link>
      </div>
      {isEng ? (
        <div className={styles.nav}>
          <h4>Portfolio</h4>
          <ul>
            {lists.eng.map((item) => (
              <li key={item} className={styles.item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.nav}>
          <h4 className={styles.title}>&#60;포트폴리오&#62;</h4>
          <ul>
            {lists.kor.map((item) => (
              <li key={item} className={styles.item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
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
  );
};

export default Nav;
