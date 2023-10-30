import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Album from "./pages/album";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="album" element={ <Album/>} />
      </Routes>
    </div>
  )
}

export default App;
