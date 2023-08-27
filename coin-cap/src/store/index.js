import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencySlice";
import walletReducer from "./walletSlice";

export default configureStore({
  reducer: {
    currency: currencyReducer,
    wallet: walletReducer,
  },
});
