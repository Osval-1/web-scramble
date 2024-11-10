import Game from "./pages/Game";
import Setup from "./pages/Setup";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Routes >
    <Route path="/" element={<Setup />} />
    <Route path="/Game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
