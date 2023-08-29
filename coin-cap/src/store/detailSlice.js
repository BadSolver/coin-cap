const { createSlice } = require("@reduxjs/toolkit");

const detaiSlice = createSlice({
  name: "detail",
  initialState: {
    detail: [],
  },
  reducers: {
    addDetailCurrency(state, { payload }) {
      console.log(payload);
      state.detail = payload;
    },
  },
});

export default detaiSlice.reducer;

export const { addDetailCurrency } = detaiSlice.actions;
