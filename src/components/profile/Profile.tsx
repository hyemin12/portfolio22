import styles from "./Profile.module.css";
const Profile = () => {
  return (
    <div>
      <div className={styles.circle}>
        <h4>고 혜 민</h4>
        <p>Front end developer</p>
      </div>
      <div className={styles.info}>
        <div>
          <p>Address</p>
          <span></span>
        </div>
      </div>
      <div>
        <h4>Education</h4>
        <ul>
          <li>
            <p>2013.02</p>
            <div></div>
            <p>동우여자고등학교 졸업</p>
          </li>
          <li>
            <p>2017.02</p>
            <div></div>
            <p>인천가톨릭대학교 졸업</p>
            <span>환경디자인학과</span>
          </li>
          <li>
            <p>2020.09</p>
            <div></div>
            <p>하이미디어 컴퓨터학원</p>
            <span>스마트기기 Ux/UI 웹디자인&#38;웹퍼블리셔 과정</span>
          </li>
          <li>
            <p>2020.09</p>
            <div></div>
            <p>한 번에 끝내는 프론트엔드 개발 초격차 패키지 과정</p>
            <span>패스트캠퍼스</span>
          </li>
        </ul>
      </div>
      <div>
        <h4>Skill</h4>
      </div>
    </div>
  );
};

export default Profile;
