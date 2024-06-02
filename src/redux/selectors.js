import { createSelector } from '@reduxjs/toolkit';

export const selectBaseCurrency = state => state.currency.baseCurrency;

export const selectExchangeInfo = state => state.currency.exchangeInfo;

export const selectLoading = state => state.currency.loading;

export const selectError = state => state.currency.error;

export const selectRates = state => state.currency.rates;

export const selectFilter = state => state.filter;

export const selectFilteredRates = createSelector(
  [selectBaseCurrency, selectRates, selectFilter],
  (baseCurrency, rates, filter) => {
    return rates
      .filter(
        ([key]) =>
          key !== baseCurrency &&
          key.toLowerCase().includes(filter.toLowerCase()),
      )
      .map(([key, value]) => ({ key, value: (1 / value).toFixed(2) }));
  },
);
