import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./Intro.module.css";
import classNames from "classnames";

function Intro() {
  const [fadeIn, setFadeIn] = useState(false);
  function scrollBtn() {
    document.documentElement.scrollTo({ top: 600, behavior: "smooth" });
  }
  function handleScroll() {}

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="intro" className={styles.intro_wrapper}>
        <h1 className={styles.title}>
          안녕하세요.
          <br />
          <span>고혜민</span>입니다.
        </h1>
        <p className={styles.text}>
          꼼꼼하고 정리하는 것을 좋아하고, 성실함을 바탕으로 꾸준히 성장하는
          것이 장점입니다.
        </p>
        <div className={styles.btn_down} onClick={scrollBtn}>
          <ArrowDownwardIcon />
        </div>
      </div>
      <div id="logo" className={styles.logo_wrapper}>
        <Link to="/">
          <h1 className={styles.logo}>Hyemin</h1>
        </Link>
      </div>
      <div className={styles.btn_toggle}>
        <MenuIcon />
        <p className={styles.btn_toggle_p}>메뉴</p>
      </div>
    </>
  );
}
export default Intro;
