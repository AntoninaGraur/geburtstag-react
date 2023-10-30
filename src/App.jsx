import React from "react";
import {  Route, Link, Routes } from "react-router-dom";

// import "./App.css";

import Album from "./album";
import Home from "./home";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" component={<Home/>} />
      <Route path="/album" component={<Album/>} />
      </Routes>
    </div>
  );
}

export default App;
