import { Link } from "react-router-dom";
import { WorkType } from "../../WorkType";

import styles from "./SimpleItem.module.css";

function SimpleItem(work: WorkType) {
  return (
    <li className={styles.item}>
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

      <div className={styles.btn_link}>
        <Link to={`/work/${work.id}`}>
          <button>자세히 보기</button>
        </Link>

        <a href={work.url} target="_blank" rel="noreferrer">
          <button>사이트 이동</button>
        </a>
      </div>
    </li>
  );
}

export default SimpleItem;
