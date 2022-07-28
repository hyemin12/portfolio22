import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  const navs = [
    { name: "홈", path: "/" },
    { name: "포트폴리오", path: "/work" },
    { name: "프로필", path: "/profile" },
  ];
  const socials = [""];
  const [isMobile, setIsMobile] = useState(false);
  return (
    <section className="nav_wrapper">
      {isMobile ? (
        <div className={styles.toggle_nav}>
          <div>
            <CloseIcon />
          </div>
          <ul className="">
            {navs.map((a) => (
              <li key={a.path}>
                <Link to={a.path}>{a.name}</Link>
              </li>
            ))}
          </ul>
          <ul className="sns_wrapper">
            <li>
              <a href="" target="_blank">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <GitHubIcon />
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div className={styles.nav}>
          <ul className={styles.tab_nav}>
            {navs.map((a) => (
              <li key={a.path}>
                <Link to={a.path} className={styles.tab_nav_item}>
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles.social_wrapper}>
            <li className={styles.social_item}>
              <a href="" target="_blank">
                <GitHubIcon className={styles.social_icon} />
              </a>
            </li>
            <li className={styles.social_item}>
              <a href="" target="_blank">
                <GitHubIcon className={styles.social_icon} />
              </a>
            </li>
            <li className={styles.social_item}>
              <a href="" target="_blank">
                <GitHubIcon className={styles.social_icon} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}

export default Nav;
