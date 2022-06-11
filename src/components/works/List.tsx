import React, { useState } from "react";
import classNames from "classnames";

import { data } from "../../data";
import WorkItem from "./WorkItem";
import styles from "./List.module.css";

const ListTemplate = () => {
  const filters = ["All", "React", "Typescript", "Vanilla JS", "jQuery", "ect"];
  const works = data.works;
  const [isActive, setIsActive] = useState(0);
  const handleActive = (i: number) => {
    setIsActive(i);
  };
  const handleFilter = (a: string) => {
    // console.log(event.target);
    console.log(a);
  };
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
        <WorkItem />
      </ul>
    </div>
  );
};

export default ListTemplate;
