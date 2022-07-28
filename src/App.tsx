import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WorkDetail from "./components/works/WorkDetail";
import ProfileTemplate from "./pages/ProfileTemplate";
import WorkTemplate from "./pages/WorkTemplate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/work/:id" element={<WorkDetail />}></Route>
          <Route path="/profile" element={<ProfileTemplate />}></Route>
          <Route path="/work" element={<WorkTemplate />}></Route>
          <Route path="/*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
