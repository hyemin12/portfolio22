import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import LanguageIcon from "@mui/icons-material/Language";
import styles from "./WorkItem.module.css";

export type WorkType = {
  filter: string;
  id: string;
  img: string;
  title: string;
  describtion: string;
  date: string;
  tool: string[];
  features: string[];
  git?: string | undefined;
  url: string;
};

const WorkItem = (work: WorkType) => {
  return (
    <>
      <li key={work.id} className={styles.item}>
        <div className={styles.img_wrapper}>
          <img src={work.img} alt={work.title} className={styles.item_img} />
        </div>

        <div className={styles.item_hover}>
          <div className={styles.opacity}></div>
          <div className={styles.hover_wrap}>
            <h4 className={styles.item_title}>{work.title}</h4>
            <p className={styles.item_filter}>{work.filter}</p>
            <div>
              <Link to={`/${work.id}`}>
                <AddIcon className={styles.link_btn} />
              </Link>
              <a href={work.url} target="_blank" rel="noreferrer">
                <LanguageIcon className={styles.link_btn} />
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default WorkItem;
