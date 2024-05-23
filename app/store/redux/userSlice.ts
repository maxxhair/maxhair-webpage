import { createSlice } from "@reduxjs/toolkit";

export interface InitialUserState {
  name: string;
  email: string;
}

export const initialState: InitialUserState = {
  name: "",
  email: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}
});

export default userSlice.reducer;
