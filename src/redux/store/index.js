import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducer";

const Store = configureStore({
  reducer: mainReducer,
});

export default Store;
