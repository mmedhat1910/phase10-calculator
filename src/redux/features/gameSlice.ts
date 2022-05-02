import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Game from '../../../classes/Game';
import { Round } from '../../../classes/Round';
import type { RootState } from './../store';

interface GameState {
  value: Game | undefined;
}
const initialState: GameState = {
  value: undefined,
};

export const gameSlice = createSlice({
  name: 'game',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    start: (state, action: PayloadAction<Game>) => {
      state.value = action.payload;
    },
    stop: (state) => {
      state.value = undefined;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    addRound: (state, action: PayloadAction<Round>) => {
      state.value?.rounds.push(action.payload);
    },
    endRound: (
      state,
      action: PayloadAction<{ player: string; score: number }[]>
    ) => {
      state.value?.endRound(action.payload);
    },
  },
});

export const { start,stop, addRound, endRound } = gameSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGame = (state: RootState) => state.game.value;

export default gameSlice.reducer;
