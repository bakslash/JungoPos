// src/features/medicine/medicineSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Medicine } from '../../types/medicine';

interface MedicineState {
  inventory: Medicine[];
  transaction: {
    items: { medicine: Medicine; quantity: number }[];
    total: number;
  };
}

const initialState: MedicineState = {
  inventory: [
    { id: '1', name: 'Aspirin', category: 'Pain Relief', availableQuantity: 100, pricePerUnit: 0.5, unit: 'pill' },
    { id: '2', name: 'Cough Syrup', category: 'Cold', availableQuantity: 50, pricePerUnit: 5.0, unit: 'ml' },
  ],
  transaction: {
    items: [],
    total: 0,
  },
};

const medicineSlice = createSlice({
  name: 'medicine',
  initialState,
  reducers: {
    addToTransaction: (state, action: PayloadAction<{ medicine: Medicine; quantity: number }>) => {
      const item = action.payload;
      state.transaction.items.push(item);
      state.transaction.total += item.medicine.pricePerUnit * item.quantity;
    },
    removeFromTransaction: (state, action: PayloadAction<{ id: string }>) => {
      state.transaction.items = state.transaction.items.filter(item => item.medicine.id !== action.payload.id);
    },
    applyDiscount: (state, action: PayloadAction<number>) => {
      state.transaction.total -= action.payload;
    },
  },
});

export const { addToTransaction, removeFromTransaction, applyDiscount } = medicineSlice.actions;
export default medicineSlice.reducer;
