import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WorkDetail from "./components/works/WorkDetail";
import ProfileTemplate from "./pages/ProfileTemplate";
import Layout from "./components/Layout";
import Header from "./components/header/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<WorkDetail />}></Route>
          <Route path="/profile" element={<ProfileTemplate />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
