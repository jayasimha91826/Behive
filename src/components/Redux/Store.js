import { dataSlice } from "./dataReducer";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: dataSlice.reducer,
});

export default store;
