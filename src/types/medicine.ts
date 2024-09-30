// src/types/medicine.ts
export interface Medicine {
    id: string;
    name: string;
    category: string;
    availableQuantity: number;
    pricePerUnit: number;
    unit: 'pill' | 'ml' | 'package';
  }
  