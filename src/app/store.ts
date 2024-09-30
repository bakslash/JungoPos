// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import medicineReducer from '../features/medicine/medicineSlice';
import navigationReducer from '../features/navigation/navigationSlice';
import authReducer from '../store/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer, 
    navigation: navigationReducer,
    medicine: medicineReducer, // Ensure that medicineReducer is correctly included
     
   // devTools: process.env.NODE_ENV !== 'production',// Adding middleware or devTools configuration
 
  },
});

export default store; // Change to default export
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
