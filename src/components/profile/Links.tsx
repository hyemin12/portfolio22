import GitHubIcon from "@mui/icons-material/GitHub";
import BookIcon from "@mui/icons-material/Book";
import styles from "./Profile.module.css";

const Links = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Links</h4>
      <ul className={styles.link_wrapper}>
        <li>
          <a
            href="https://hyemin12.github.io/hm_resume/"
            target="_blank"
            rel="noreferrer"
            className={styles.link_item}
          >
            📝자기소개서
          </a>
        </li>
        <li>
          <a
            href="https://github.com/hyemin12"
            target="_blank"
            rel="noreferrer"
            className={styles.link_item}
          >
            💻깃허브
          </a>
        </li>
        <li>
          <a
            href="https://hyemin-12.tistory.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.link_item}
          >
            📖블로그
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
