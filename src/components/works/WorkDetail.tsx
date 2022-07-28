import { Link, useParams } from "react-router-dom";
import { data } from "../../data";
import Layout from "../Layout";

import styles from "./WorkDetail.module.css";

function WorkDetail() {
  const { id } = useParams();
  const work = data.works.filter((item) => item.id === id)[0];
  console.log(id);
  return (
    <Layout>
      <div className={styles.item}>
        <span className={styles.date}>{work.date}</span>
        <h1 className={styles.title}>
          [{work.filter}] {work.title}
        </h1>
        <p className={styles.describtion}>{work.describtion}</p>
        <div className={styles.contents_img}>
          <img src={`../assets/${work.id}.png`} alt={work.title} />
        </div>
      </div>
    </Layout>
  );
}

export default WorkDetail;
