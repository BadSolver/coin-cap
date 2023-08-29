import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencySlice";
import walletReducer from "./walletSlice";
import detailReducer from "./detailSlice";

export default configureStore({
  reducer: {
    currency: currencyReducer,
    wallet: walletReducer,
    detail: detailReducer,
  },
});
