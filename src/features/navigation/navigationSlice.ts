// src/features/navigation/navigationSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface NavigationState {
  selectedPath: string;
}

const initialState: NavigationState = {
  selectedPath: '/', // Initial default path
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setSelectedPath: (state, action) => {
      state.selectedPath = action.payload;
    },
  },
});

export const { setSelectedPath } = navigationSlice.actions;
export default navigationSlice.reducer;
