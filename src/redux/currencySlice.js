import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';
const initialState = {
  baseCurrency: '',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    });
  },
});
