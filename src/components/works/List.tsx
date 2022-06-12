import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { data } from "../../data";
import WorkItem from "./WorkItem";
import styles from "./List.module.css";

const ListTemplate = () => {
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
  useEffect(() => {}, [state]);
  return (
    <div className={styles.list_wrapper}>
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
      <ul className={styles.works}>
        {state &&
          state.map((work) => {
            return <WorkItem {...work} key={work.id} />;
          })}
      </ul>
    </div>
  );
};

export default ListTemplate;
