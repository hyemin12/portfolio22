import classNames from "classnames";
import Experience from "./Experience";
import styles from "./Profile.module.css";
import Skills from "./Skills";
function Profile2() {
  return (
    <div>
      <div className={classNames(styles.wrapper, styles.bg)}>
        <div className={styles.header}>
          <div className={styles.rec_img}>
            <img
              src="assets/hyemin.jpg"
              alt="고혜민"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>

          <div className={styles.name_wrapper}>
            <h2>고혜민</h2>
            <p>프론트엔드 개발자</p>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.text_wrapper}>
          <p>안녕하세요.</p>
          <p></p>
        </div>

        <a
          href="https://hyemin12.github.io/hm_resume/"
          target="_blank"
          rel="noreferrer"
          className={styles.link_btn}
        >
          이력서 &amp; 자기소개서 보러가기
        </a>
      </div>

      <Skills />
      <Experience />
    </div>
  );
}

export default Profile2;
