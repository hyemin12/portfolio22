import { data } from "../../data";
import styles from "./List.module.css";

const WorkItem = () => {
  return (
    <>
      {data.works.map((work) => (
        <li key={work.id} className={styles.item}>
          <div className={styles.img_wrapper}>
            <img src={work.img} alt={work.title} className={styles.item_img} />
          </div>
          <div>{work.title}</div>
        </li>
      ))}
    </>
  );
};

export default WorkItem;
