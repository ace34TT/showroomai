import { createSlice } from "@reduxjs/toolkit";
import { updateTokenSvc } from "./../services/firebase.service";
const initialState = {
  isAuthenticated: false,
  user: null,
  access: null,
};

export const authSlice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.access = action.payload.access;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.access = null;
    },
    decrementToken(state) {
      console.log("decreeing");
      state.access.credits = state.access.credits - 1;
      updateTokenSvc(state.access._id, state.access.credits);
    },
  },
});
export const { login, logout, decrementToken } = authSlice.actions;
export default authSlice.reducer;
