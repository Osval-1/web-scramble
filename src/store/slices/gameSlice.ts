import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Progress, TileType } from "../../utils/types";

type GameInstanceType = {
  currentRoll: number;
  currentPosition: number;
  tokens: number;
  time: number;
  energy: number;
  decoded_message: string;
  tileType: TileType;
  gameProgress: Progress[];
};
const initialState: GameInstanceType = {
  currentRoll: 1,
  currentPosition: 0,
  tokens: 10,
  time: 0,
  energy: 10,
  decoded_message: "",
  tileType: " ",
  gameProgress: [],
};
export const gameInstanceSlice = createSlice({
  name: "gameInstance",
  initialState,
  reducers: {
    updateRoll: (state, action: PayloadAction<number>) => {
      state.currentPosition += action.payload;
      state.currentRoll = action.payload;
    },
    resetCurrentPosition: (state, action: PayloadAction<number>) => {
      state.currentPosition = action.payload;
    },
    addToken: (state) => {
      state.tokens += 1;
    },
    addEnergy: (state) => {
      if (state.energy < 10) {
        state.tokens += 1;
      }
    },
    flipBit: (state) => {
      if (state.tokens > 0) {
        state.tokens -= 1;
      }
    },
    getGameProgress: (state, action: PayloadAction<Progress[]>) => {
      state.gameProgress = action.payload;
      state.tokens = 10;
      state.energy = 10;
    },
    updateGameProgress: (state, action: PayloadAction<number>) => {
      state.gameProgress[action.payload].flipped = true;
    },
    updateDecodedMessage: (state, action: PayloadAction<string>) => {
      state.decoded_message = action.payload;
    },
  },
});

export const {
  updateRoll,
  resetCurrentPosition,
  addToken,
  addEnergy,
  updateDecodedMessage,
  updateGameProgress,
  getGameProgress,
  flipBit,
} = gameInstanceSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.gameInstance;

export default gameInstanceSlice.reducer;
