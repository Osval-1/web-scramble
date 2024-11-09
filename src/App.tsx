import { useState } from "react";
import Game from "./pages/Game";
import Setup from "./pages/Setup";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";


function App() {

  return (
    <>
      <Routes >
    <Route path="/" element={<Setup />} />
    <Route path="/Game" element={<Game />} />
      {/* <Game/> */}
      </Routes>
    </>
  );
}

export default App;
