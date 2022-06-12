import React from "react";
import { useMediaQuery } from "react-responsive";
import List from "../components/works/List";
import Header from "../components/header/Header";

import "../components/Layout.css";

const Home = () => {
  // const isTablet = useMediaQuery({
  //   query: "(min-width:768px) and (max-width:1023px)",
  // });
  // const isMobile = useMediaQuery({
  //   query: "(max-width:767px)",
  // });
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <div
      // className={
      //   (isDesktop ? "pc_container" : "mobile_contianer") + " container"
      // }
      >
        <Header />
        <List />
        <footer>
          <div>
            <p>
              본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로
              제작되었습니다.
            </p>
            <p>
              &#169; {new Date().getFullYear()} Hyemin. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
