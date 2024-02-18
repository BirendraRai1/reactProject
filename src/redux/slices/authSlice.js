// import createSlice from redux toolkit indicates that to create a slice we need a redux;
import { createSlice } from "@reduxjs/toolkit";
//CreateSlice is not a function .Everything is managed by redux
const userSlice = createSlice({
  name: "userSlice",
  // intinal state value
  initialState: {
    error: false,
    userLoading: false,
    userToken: "",
  },
  // functions to update your state
  reducers: {
    userLoading: (state) => {
      state.error = false;
      state.userloading = true;
    },
    userError: (state) => {
      state.error = true;
      state.userloading = false;
    },
    userData: (state, action) => {
      state.userloading = false;
      state.userToken = action.payload;
      localStorage.setItem("user", action.payload);
    },
    logOut: (state) => {
      window.localStorage.removeItem("user");
      state.userLoading = false;
      state.userToken = "";
    },
  },
});
export default userSlice;
