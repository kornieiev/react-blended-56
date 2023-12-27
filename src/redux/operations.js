import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLocation } from 'service/location';

export const fetchBaseCurrency = createAsyncThunk(
  'baseCurrency/fetchBaseCurrency',
  async (location, thunkAPI) => {
    const state = thunkAPI.getState();
    const { baseCurrency } = state.currency;

    if (baseCurrency) {
      return thunkAPI.rejectWithValue(
        'Something went wrong. Try to sign in again.'
      );
    }

    try {
      const data = await getLocation(location);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {}
  }
);
