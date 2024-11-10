import { TileType } from "./types";

//create an instance of the game
export const createGame = () => {
  const tileTypesArray:TileType[] = ["e", "q", " ", "flipbit"];
  let gameInstance = [];
  for (let i = 0; i < 30; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    gameInstance.push(tileTypesArray[randomNumber])
  }
  return gameInstance
};
