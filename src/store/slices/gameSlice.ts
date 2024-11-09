import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type GameInstanceType = {
  currentRoll: number;
  currentPosition: number;
  tokens: number;
  time: number;
  energy: number;
  decoded_message: string;
};
const initialState: GameInstanceType = {
  currentRoll: 1,
  currentPosition: 0,
  tokens: 10,
  time: 0,
  energy: 10,
  decoded_message: "",
};
export const gameInstanceSlice = createSlice({
  name: "gameInstance",
  initialState,
  reducers: {
    updateRoll: (state, action: PayloadAction<number>) => {
      state.energy -= 1;
      state.currentPosition += action.payload
      state.currentRoll = action.payload;
    },
    updateCurrentPostion: (state, action: PayloadAction<number>) => {
      state.currentPosition = action.payload;
    },
    increaseToken: (state) => {
      state.tokens += 1;
    },
    increaseEnergy: (state) => {
      state.tokens += 1;
    },
    updateDecodedMessage: (state, action: PayloadAction<string>) => {
      state.decoded_message = action.payload;
    },
  },
});

export const {
  updateRoll,
  updateCurrentPostion,
  increaseToken,
  increaseEnergy,
  updateDecodedMessage,
} = gameInstanceSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.gameInstance;

export default gameInstanceSlice.reducer;
