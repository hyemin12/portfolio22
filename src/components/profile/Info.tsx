import styles from "./Profile.module.css";

const Info = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>About Me</h4>
      <ul className={styles.info_wrapper}>
        <li className={styles.info_item}>
          <span>👩</span>
          <p>1994.12.31</p>
        </li>
        <li className={styles.info_item}>
          <span>🏠</span>
          <p>경기도 수원시 권선구 금곡동</p>
        </li>
        <li className={styles.info_item}>
          <span>📧</span>
          <p>khnm31@naver.com</p>
        </li>
        <li className={styles.info_item}>
          <span>👩‍🎓</span>
          <div>
            <p>인천가톨릭대학교 졸업</p>
            <p>환경디자인학과</p>
          </div>
        </li>
        <li className={styles.info_item}>
          <span>👩‍🎓</span>
          <p>동우여자고등학교 졸업</p>
        </li>
      </ul>
    </div>
  );
};
export default Info;
