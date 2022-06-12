import React from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";
import Header from "./header/Header";
import styles from "./Layout.module.css";

// const isTablet = useMediaQuery({
//   query: "(min-width:768px) and (max-width:1023px)",
// });
// const isMobile = useMediaQuery({
//   query: "(max-width:767px)",
// });
const Layout = (props: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <div className={isDesktop ? "pc_container" : "mobile_container"}>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
