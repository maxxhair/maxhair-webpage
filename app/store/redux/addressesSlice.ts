import { createSlice } from "@reduxjs/toolkit";

type InitialAddressesState = {
  _id: string;
  name: string;
  phone: string;
  houseNumber: string;
  streetAddress1: string;
  state: string;
  country: string;
  landmark: string;
  zipcode: string;
};

export const initialState: InitialAddressesState = {
  _id: "",
  name: "",
  phone: "",
  houseNumber: "",
  streetAddress1: "",
  state: "",
  country: "",
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
      state.phone = action.payload.phone;
      state.houseNumber = action.payload.houseNumber;
      state.streetAddress1 = action.payload.streetAddress1;
      state.state = action.payload.state;
      state.country = action.payload.country;
      state.landmark = action.payload.landmark;
      state.zipcode = action.payload.zipcode;
    }
  }
});

export const { selectAddress } = addressesSlice.actions;
export default addressesSlice.reducer;
