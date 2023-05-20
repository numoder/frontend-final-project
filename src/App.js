import "bootstrap/dist/css/bootstrap.min.css";
import { useState, React } from "react";
import { Route, Routes } from "react-router-dom";
import NewPost from "./scenes/NewPost.jsx";
import Home from "./scenes/Home.jsx";
import "xp.css/dist/XP.css";
import "./components/modalStyles.css";
import "./App.css";

function App() {
  // for dark mode
  return (
    <>
      <div>
        {" "}
        {/*theme*/}
        <Routes>
          <Route path="create" element={<NewPost />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="*" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
