import React from "react";
import Layout from "../components/Layout";
import MainWorkList from "../components/works/MainWorkList";

import Header2 from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Layout>
        <MainWorkList />
      </Layout>
    </>
  );
};

export default Home;
