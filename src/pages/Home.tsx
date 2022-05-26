import React from "react";
import { useMediaQuery } from "react-responsive";
import Nav from "../components/Nav";
import ListTemplate from "./ListTemplate";
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
        className={
          (isDesktop ? "pc_container" : "mobile_contianer") + " container"
        }
      >
        <Nav />
        <ListTemplate />
      </div>
    </>
  );
};

export default Home;
