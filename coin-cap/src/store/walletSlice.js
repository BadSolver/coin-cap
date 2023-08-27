// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    error: null,
    wallet: 0,
  },
  reducers: {
    addToWallet(state, { payload }) {
      const sum = +payload;
      state.wallet = state.wallet + sum;
    },
  },
});

export default walletSlice.reducer;

export const { addToWallet } = walletSlice.actions;
