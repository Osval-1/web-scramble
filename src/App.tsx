import Game from "./pages/Game";
import Setup from "./pages/Setup";
import Won from "./pages/Won";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Routes >
    <Route path="/" element={<Setup />} />
    <Route path="/Game" element={<Game />} />
    <Route path="/Won" element={<Won />} />
      </Routes>
    </>
  );
}

export default App;
