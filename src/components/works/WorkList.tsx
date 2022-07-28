import { useState, useEffect } from "react";
import WorkItem2 from "./WorkItem";
import classNames from "classnames";
import { data } from "../../data";
import styles from "./WorkList.module.css";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import AppsIcon from "@mui/icons-material/Apps";
import SimpleItem from "./SimpleItem";

function WorkList() {
  const filters = ["All", "React", "Typescript", "Vanilla JS", "jQuery", "ect"];
  const [state, setState] = useState(data.works);
  const [isActive, setIsActive] = useState(0);

  const handleActive = (i: number) => {
    setIsActive(i);
  };
  function handleFilter(a: string) {
    const init = data.works;
    if (a === "All") {
      setState(init);
    } else if (a) {
      const newArr = init.filter((item) => item.filter === a);
      setState(newArr);
    }
  }

  const [simpleMode, setSimpleMode] = useState(false);
  function handleMode() {
    setSimpleMode(!simpleMode);
  }

  useEffect(() => {}, [state]);

  return (
    <>
      <div>
        <div className={styles.category}>
          <div className={styles.view_option}>
            <span className={styles.view_option_item} onClick={handleMode}>
              <VerticalSplitIcon />
            </span>
            <span className={styles.view_option_item} onClick={handleMode}>
              <AppsIcon />
            </span>
          </div>

          <ul className={styles.filters}>
            {filters.map((a, i) => (
              <li
                className={classNames(
                  styles.filter_item,
                  isActive === i && styles.active
                )}
                key={a}
                onClick={() => {
                  handleActive(i);
                  handleFilter(a);
                }}
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
        {simpleMode ? (
          <ul className={styles.list_wrapper}>
            {state &&
              state.map((work) => {
                return <SimpleItem {...work} key={work.id} />;
              })}
          </ul>
        ) : (
          <ul className={styles.list_wrapper}>
            {state &&
              state.map((work) => {
                return <WorkItem2 {...work} key={work.id} />;
              })}
          </ul>
        )}
      </div>
    </>
  );
}
export default WorkList;
