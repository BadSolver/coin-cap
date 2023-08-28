// @ts-nocheck
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ky from "ky";

export const getAllCurrency = createAsyncThunk(
  "currency/getAllCurrency",
  async function () {
    const currency = await ky
      .get("https://api.coincap.io/v2/assets") //?limit=4 лимиты
      .json();
    return currency;
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currency: [],
    errors: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCurrency.fulfilled, (state, { payload }) => {
      state.currency = payload.data;
      state.errors = null;
      state.loading = false;
    });
    builder.addCase(getAllCurrency.pending, (state) => {
      state.loading = true;
      state.errors = null;
    });
    builder.addCase(getAllCurrency.rejected, (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    });
  },
});

export default currencySlice.reducer;

// export const {} = currencySlice.actions;
