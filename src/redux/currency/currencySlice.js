import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchLatestSymbols,
} from '../../redux/currency/operations';

const initialState = {
  baseCurrency: '',
  exchangeInfo: null,
  loading: false,
  error: null,
  rates: [],
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, { payload }) => {
        state.baseCurrency = payload;
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.exchangeInfo = payload;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        state.exchangeInfo = null;
      })
      .addCase(fetchLatestSymbols.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLatestSymbols.fulfilled, (state, {payload}) => {
        state.loading =false;
        state.rates = payload;
      })
      .addCase(fetchLatestSymbols.rejected, (state, {payload}) => {
        state.error = payload;
        state.rates = [];
        state.loading = false;
      })
});

export const { setBaseCurrency } = currencySlice.actions;

export const currencyReducer = currencySlice.reducer;
