import CloseIcon from "@mui/icons-material/Close";
import styles from "./Detail.module.css";

interface WorkProps {
  filter: string;
  id: string;
  img: string;
  title: string;
  describtion: string;
  git: string;
  url: string;
}
const WorkDetail = (work: WorkProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.opacity}></div>
      <CloseIcon fontSize="large" className={styles.close_btn} />
      <div className={styles.inner}>
        Detail
        <div className={styles.image}>
          <img src={work.img} alt={work.title} />
        </div>
        <div>
          <h4 className={styles.title}>{work.title}</h4>
          <p>
            <span>Category</span>
          </p>
          <p>
            <span>Project date</span>
          </p>
          <p>
            <span>Project url</span>
            <a href={work.url} target="_blank" rel="noreferrer">
              {work.url}
            </a>
          </p>
          <p>
            <span>Code url</span>
            <a href={work.git} target="_blank" rel="noreferrer">
              {work.git}
            </a>
          </p>
        </div>
        <div>
          <h4>describtion</h4>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
