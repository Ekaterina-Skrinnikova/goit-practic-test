export const selectBaseCurrency = state => state.currency.baseCurrency;

export const selectExchangeInfo = state => state.currency.exchangeInfo;

export const selectLoading = state => state.currency.loading;

export const selectError = state => state.currency.error;

export const selectRates = state => state.currency.rates;
