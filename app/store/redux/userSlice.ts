import { createSlice } from "@reduxjs/toolkit";

export interface InitialUserState {
  user: {};
}

export const initialState: InitialUserState = {
  user: {}
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoggedin: (state, action) => {
      state.user = action.payload;
    },
    userLogout: (state) => {
      state.user = {};
    }
  }
});

export const { userLoggedin, userLogout } = userSlice.actions;

export default userSlice.reducer;
