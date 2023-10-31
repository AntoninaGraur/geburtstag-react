import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Album from "./pages/album";
import Album2 from "./pages/album2";
import Album3 from "./pages/album3";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="album" element={<Album />} />
        <Route path="album2" element={<Album2 />} />
        <Route path="album3" element={<Album3 />} />
      </Routes>
    </div>
  );
}

export default App;
