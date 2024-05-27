import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductStoreType } from "../../types";

type InitialWishListState = {
  wishListItems: ProductStoreType[];
};

export const initialState: InitialWishListState = {
  wishListItems: []
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<ProductStoreType>) => {
      state.wishListItems.push(action.payload);
    },
    removeFromWishList: (state, action: PayloadAction<string>) => {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== action.payload
      );
    }
  }
});
