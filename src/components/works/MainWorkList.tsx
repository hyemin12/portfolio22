import { Link } from "react-router-dom";
import { data } from "../../data";
import WorkItem2 from "./WorkItem";
// import WorkItem from "./WorkItem";
import styles from "./MainWorkList.module.css";

function WorkList() {
  const mainItem = data.works[0];
  const lists = data.works.filter((item) => item.title !== data.works[0].title);

  return (
    <div>
      <div className={styles.main_item}>
        <span className={styles.main_item_date}>{mainItem.date}</span>

        <h1 className={styles.main_item_title}>
          [{mainItem.filter}] {mainItem.title}
        </h1>

        <p className={styles.main_item_describtion}>{mainItem.describtion}</p>

        <div className={styles.main_item_contents_img}>
          <img
            src={
              mainItem.img
                ? `/assets/${mainItem.img}.png`
                : `/assets/${mainItem.id}.png`
            }
            alt={mainItem.title}
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className={styles.btn_link}>
          <Link to={`/work/${mainItem.id}`}>
            <button>자세히 보기</button>
          </Link>
        </div>
      </div>
      <ul className={styles.list_wrapper}>
        {lists &&
          lists.map((work) => {
            return <WorkItem2 {...work} />;
          })}
      </ul>
    </div>
  );
}

export default WorkList;
