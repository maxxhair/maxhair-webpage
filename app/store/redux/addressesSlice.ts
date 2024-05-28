import { createSlice } from "@reduxjs/toolkit";

type InitialAddressesState = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  landmark: string;
  zipcode: string;
};

export const initialState: InitialAddressesState = {
  _id: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  landmark: "",
  zipcode: ""
};

const addressesSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    selectAddress: (state, action) => {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.landmark = action.payload.landmark;
      state.zipcode = action.payload.zipcode;
    }
  }
});

export const { selectAddress } = addressesSlice.actions;
export default addressesSlice.reducer;
