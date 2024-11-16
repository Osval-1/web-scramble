import { TileType } from "./types";

//create an instance of the game
export const createGame = () => {
  const tileTypesArray:TileType[] = ["e", "q", " ", "flipbit"];
  const gameInstance = [];
  for (let i = 0; i < 30; i++) {
    const randomNumber = Math.floor(Math.random() * 4);
    gameInstance.push(tileTypesArray[randomNumber])
  }
  return gameInstance
};
