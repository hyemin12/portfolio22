import Info from "./Info";
import Skills from "../profile/Skills";

import styles from "./Profile.module.css";
import Experience from "../profile/Experience";
import TypeIt from "typeit-react";
import classNames from "classnames";

const Profile = () => {
  return (
    <div className={styles.inner}>
      <div>
        <div className={classNames(styles.typeit, styles.background)}>
          <>
            <TypeIt
              options={{
                strings: ["안녕하세요.", "프론트엔드 개발자 고혜민입니다.👧"],
                speed: 50,
                waitUntilVisible: true,
                startDelay: 100,
              }}
            />
          </>
        </div>
        <Info />
        <Skills />
        <Experience />
      </div>
    </div>
  );
};

export default Profile;
