import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Shoe, ShoesState } from '../../interfaces/product.types';

// Async thunk to load shoes from JSON file
export const loadShoes = createAsyncThunk(
  'shoes/loadShoes',
  async () => {
    try {
      const response = await fetch('/zapato.json');
      if (!response.ok) {
        throw new Error('Failed to fetch shoes data');
      }
      const data: Shoe[] = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error loading shoes data');
    }
  }
);

const initialState: ShoesState = {
  shoes: [],
  loading: false,
  error: null,
  selectedShoe: null,
};

export const shoesSlice = createSlice({
  name: 'shoes',
  initialState,
  reducers: {
    setSelectedShoe: (state, action: PayloadAction<Shoe | null>) => {
      state.selectedShoe = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    addShoe: (state, action: PayloadAction<Shoe>) => {
      state.shoes.push(action.payload);
    },
    removeShoe: (state, action: PayloadAction<string>) => {
      state.shoes = state.shoes.filter(shoe => shoe.referencia !== action.payload);
    },
    updateShoe: (state, action: PayloadAction<{ referencia: string; updatedShoe: Partial<Shoe> }>) => {
      const index = state.shoes.findIndex(shoe => shoe.referencia === action.payload.referencia);
      if (index !== -1) {
        state.shoes[index] = { ...state.shoes[index], ...action.payload.updatedShoe };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadShoes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadShoes.fulfilled, (state, action) => {
        state.loading = false;
        state.shoes = action.payload;
        state.error = null;
      })
      .addCase(loadShoes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error loading shoes';
      });
  },
});

export const { 
  setSelectedShoe, 
  clearError, 
  addShoe, 
  removeShoe, 
  updateShoe 
} = shoesSlice.actions;

