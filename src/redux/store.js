import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

//import thunkMiddleWare from "redux-thunk";

const store = configureStore({
  reducer: {
    authState: authSlice.reducer,
  },
  //middleware: [thunkMiddleWare],
});
export default store;
