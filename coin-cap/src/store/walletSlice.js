// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    error: null,
    wallet: [],
  },
  reducers: {
    addToWallet(state, { payload }) {
      const findItem = state.wallet.find((item) => item.id === payload.id);
      if (!findItem) {
        state.wallet.push(payload);
      } else {
        findItem.priceUsd += payload.priceUsd;
        findItem.count = +payload.count + +findItem.count;
      }
      console.log(findItem);
    },
    deleteAllCurrency(state) {
      state.wallet = [];
    },
    deleteOneCurrency(state, { payload }) {
      state.wallet = state.wallet.filter((item) => item.id !== payload);
    },
  },
});

export default walletSlice.reducer;

export const { addToWallet, deleteAllCurrency, deleteOneCurrency } =
  walletSlice.actions;
