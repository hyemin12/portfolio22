import { Link } from "react-router-dom";
import { WorkType } from "../../WorkType";

import styles from "./WorkItem.module.css";

function WorkItem2(work: WorkType) {
  return (
    <li className={styles.item}>
      <span className={styles.date}>{work.date}</span>
      <h2 className={styles.title}>
        [{work.filter}] {work.title}
      </h2>
      <div className={styles.contents_img}>
        <img
          src={work.img ? `/assets/${work.img}.png` : `/assets/${work.id}.png`}
          alt={work.title}
          className={styles.image}
        />
      </div>

      <p className={styles.describtion}>{work.describtion}</p>

      <div className={styles.btn_link}>
        <Link to={`/work/${work.id}`}>
          <button>자세히 보기</button>
        </Link>
      </div>
    </li>
  );
}
export default WorkItem2;
