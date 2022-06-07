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
        {/* <Nav /> */}
        <List />
      </div>
    </>
  );
};

export default Home;
