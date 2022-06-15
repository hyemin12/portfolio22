import Info from "./Info";
import Skills from "./Skills";

import styles from "./Profile.module.css";
import Education from "./Education";

const Profile = () => {
  return (
    <div className={styles.inner}>
      <div>
        <div className={styles.circle}>
          <h4>고 혜 민</h4>
          <p>
            Front end
            <br /> developer
          </p>
        </div>
        <Info />
        <Skills />
        <Education />
      </div>
    </div>
  );
};

export default Profile;
