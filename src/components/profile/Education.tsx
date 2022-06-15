import styles from "./Profile.module.css";

const Education = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Education</h4>
      <ul>
        <li>
          <span>2021</span>
          <div>
            <p>[교육이수] 패스트캠퍼스</p>
            <p>한번에 끝내는 프론트엔드 개발 초격차 패키지</p>
          </div>
          <p>[자격증] 컴퓨터그래픽스운용기능사</p>
          <p>[자격증] 정보처리기능사</p>
        </li>
        <li>
          <span>2020</span>
          <p>[자격증] 웹디자인기능사</p>
          <div>
            <p>[교육이수] 하이미디어 컴퓨터학원</p>
            <p>스마트기기 Ux/UI 웹디자인&#38;웹퍼블리셔 과정 수료</p>
          </div>
        </li>
        <li>
          <span>2019</span>
          <p>[사회활동] 두에이리원 - 공연사업팀</p>
        </li>
        <li>
          <span>2018</span>
          <p>[사회활동] 스타이엔티 - 공연사업 및 신규사업팀</p>
        </li>
        <li>
          <span>2017</span>
          <p>[사회활동] 에이엔스테이지 - 세트미술팀</p>
        </li>
      </ul>
    </div>
  );
};

export default Education;
