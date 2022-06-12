import React from "react";
import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import List from "../components/works/List";

const Home = () => {
  return (
    <Layout>
      <List />
    </Layout>
  );
};

export default Home;
