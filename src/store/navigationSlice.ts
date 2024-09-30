// src/store/navigationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  selectedPath: string;
}

const initialState: NavigationState = {
  selectedPath: '/',
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setSelectedPath(state, action: PayloadAction<string>) {
      state.selectedPath = action.payload;
    },
  },
});

export const { setSelectedPath } = navigationSlice.actions;
export default navigationSlice.reducer;
