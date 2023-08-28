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
      state.wallet.push(payload);
    },
    deleteAllCurrency(state) {
      state.wallet = [];
    },
  },
});

export default walletSlice.reducer;

export const { addToWallet, deleteAllCurrency } = walletSlice.actions;
