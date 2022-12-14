import classNames from "classnames";
import TypeIt from "typeit-react";
import styles from "./Profile.module.css";
function ProfileHeader() {
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
      <div className={styles.typeit}>
        <TypeIt
          options={{
            strings: [
              "안녕하세요. 프론트엔드 개발자 고혜민입니다.",
              "저는 웹디자이너를 꿈꾸며 웹을 공부하기 시작하였고, ",
              "꼼꼼하고 정리하는 것을 좋아하고, 성실함을 바탕으로 꾸준히 성장하는 것이 장점입니다.",
              "",
            ],
            speed: 60,
            waitUntilVisible: true,
            startDelay: 100,
          }}
        />
      </div>
    </div>
  );
}

export default ProfileHeader;
