import Info from "./Info";
import Skills from "./Skills";

import styles from "./Profile.module.css";
import Education from "./Education";
import TypeIt from "typeit-react";

const Profile = () => {
  return (
    <div className={styles.inner}>
      <div>
        <div className={styles.typeit}>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type("안녕하세요. 개발자")
                .pause(750)
                .delete(4)
                .pause(500)
                .type("ex!");

              // Remember to return it!
              return instance;
            }}
          />
        </div>
        <Info />
        <Skills />
        <Education />
      </div>
    </div>
  );
};

export default Profile;
