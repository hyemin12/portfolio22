import React from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";
import Header from "./header/Header";
import "./Layout.css";

const Layout = (props: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  function movetoTop() {
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className={isDesktop ? "pc_container" : "mobile_container"}>
      <Header />
      <div className="bg"></div>
      <section className="main">
        <div>{props.children}</div>
      </section>

      <div className="btn_top" onClick={movetoTop}>
        <p>↑ Back to Top</p>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
