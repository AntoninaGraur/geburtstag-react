import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// import "./App.css";

import Album from "./album";
import Home from "./home";

function App() {
  return (
    <Router>
      <Routes><Route path="/" exact component={Home} />
      <Route path="/album" component={Album} /></Routes>
      
    </Router>
  );
}

export default App;
