import { Link, useParams } from "react-router-dom";
import { data } from "../../data";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./WorkDetail.module.css";

const WorkDetail = () => {
  const { id } = useParams();
  const work = data.works.filter((item) => item.id === id)[0];
  return (
    <div className={styles.container}>
      <Link to="/">
        <CloseIcon fontSize="large" className={styles.close_btn} />
      </Link>

      <div className={styles.inner}>
        <div className={styles.image}>
          <img src={work.img} alt={work.title} />
        </div>
        <h1 className={styles.title}>{work.title}</h1>
        <div className={styles.pd_10}>
          <p>
            <span className={styles.bold}>Project host: </span>
            Hyemin
          </p>
          <p>
            <span className={styles.bold}>Project date: </span>
            {work.date}
          </p>
          {work.url && (
            <p className={styles.link_wrap}>
              <span className={styles.bold}>Project url: </span>
              <a
                href={work.url}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                {work.url}
              </a>
            </p>
          )}
          {work.git && (
            <p className={styles.link_wrap}>
              <span className={styles.bold}>Code url: </span>
              <a
                href={work.git}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                {work.git}
              </a>
            </p>
          )}
        </div>
        <div className={styles.pd_10}>
          <h2 className={styles.desc}>describtion</h2>
          <p>{work.describtion}</p>
          <h3 className={styles.subtitle}>기능</h3>
          {work.features.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
