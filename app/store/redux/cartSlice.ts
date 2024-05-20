import { createSlice } from "@reduxjs/toolkit";

type InitialCartState = {
  openCart: boolean;
};

const InitialState: InitialCartState = {
  openCart: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState: InitialState,
  reducers: {
    setOpenCart: (state) => {
      state.openCart = true;
    },
    setCloseCart: (state) => {
      state.openCart = false;
    }
  }
});

export const { setOpenCart, setCloseCart } = cartSlice.actions;
export default cartSlice.reducer;
