import styles from "./Profile.module.css";

const Info = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>About Me</h4>
      <div className={styles.inner}>
        <ul className={styles.info_wrapper}>
          <li className={styles.info_item}>
            <span>👩</span>
            <p>1994.12.31</p>
          </li>
          <li className={styles.info_item}>
            <span>🏠</span>
            <p>경기도 수원시</p>
          </li>
          <li className={styles.info_item}>
            <span>📧</span>
            <p>khnm31@naver.com</p>
          </li>
          <li className={styles.info_item}>
            <span>👩‍🎓</span>
            <div>
              <p>인천가톨릭대학교 졸업</p>
              <p className={styles.text_small}>환경디자인학과</p>
            </div>
          </li>
          <li className={styles.info_item}>
            <span>👩‍🎓</span>
            <p>동우여자고등학교 졸업</p>
          </li>
          <a
            href="https://hyemin12.github.io/hm_resume/"
            target="_blank"
            rel="noreferrer"
          >
            <li className={styles.info_item}>
              <span>🌞</span>
              <p className={styles.info_item_link}>이력서 보러가기</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Info;
