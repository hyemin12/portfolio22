import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WorkDetail from "./components/WorkDetail";
import ProfileTemplate from "./pages/ProfileTemplate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/works/:id" element={<WorkDetail />}></Route>
          <Route path="/profile" element={<ProfileTemplate />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
