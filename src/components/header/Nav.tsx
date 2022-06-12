import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Nav = () => {
  const navData = [
    { name: "works", path: "/" },
    { name: "about", path: "/profile" },
  ];
  return (
    <ul className={styles.nav}>
      {navData.map((item) => (
        <NavLink
          end
          to={item.path}
          key={item.name}
          className={({ isActive }) =>
            (isActive ? "active " : "") + styles.nav_item
          }
        >
          <h4>{item.name}</h4>
        </NavLink>
      ))}
    </ul>
  );
};
export default Nav;
