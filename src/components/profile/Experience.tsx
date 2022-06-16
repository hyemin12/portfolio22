import styles from "./Profile.module.css";

const Experience = () => {
  const data = [
    {
      2021: [
        {
          title: "[교육이수] 패스트캠퍼스",
          sub: "한번에 끝내는 프론트엔드 개발 초격차 패키지",
        },
        { title: "[자격증] 컴퓨터그래픽스운용기능사" },
      ],
    },
    {
      2020: {
        title: "[교육이수] 패스트캠퍼스",
        sub: "한번에 끝내는 프론트엔드 개발 초격차 패키지",
      },
    },
  ];
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Experience</h4>
      <div className={styles.exp_wrapper}>
        <ul className={styles.items}>
          <li className={styles.exp_item}>
            <p className={styles.year}>2021</p>
            <div>
              <div className={styles.exp_text}>
                <p className={styles.highlight}></p>
                <p className={styles.text_small}></p>
              </div>
              <p></p>
            </div>
          </li>
          <li className={styles.exp_item}>
            <p className={styles.year}>2020</p>
            <div>
              <p>[자격증] 웹디자인기능사</p>
              <div>
                <p>[교육이수] 하이미디어 컴퓨터학원</p>
                <p className={styles.text_small}>
                  스마트기기 Ux/UI 웹디자인&#38;웹퍼블리셔 과정 수료
                </p>
              </div>
            </div>
          </li>
          <li className={styles.exp_item}>
            <p className={styles.year}>2019</p>
            <p>[사회활동] 두에이리원 - 공연사업팀</p>
          </li>
          <li className={styles.exp_item}>
            <p className={styles.year}>2018</p>
            <p>[사회활동] 스타이엔티 - 공연사업 및 신규사업팀</p>
          </li>
          <li className={styles.exp_item}>
            <p className={styles.year}>2017</p>
            <p className={styles.exp_text}>
              [사회활동] 에이엔스테이지 - 세트미술팀
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
