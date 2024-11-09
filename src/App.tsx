import { useState } from "react";
import Button from "./components/button";
import Card from "./components/Infocard";
import { images } from "./assets";
import Tile from "./components/Tile";
import Game from "./pages/Game";

function App() {

  return (
    <>
      {/* <Button color="#72D07C" label="Play" /> */}
      {/* <Card image={images.exclamation} label="take care" data="10/10" /> */}
      {/* <Tile/> */}
      <Game/>
    </>
  );
}

export default App;
