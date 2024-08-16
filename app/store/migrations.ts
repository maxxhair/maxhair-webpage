// migrations.ts
import { initialState as cartInitialState } from "./redux/cartSlice";
import { initialState as userInitialState } from "./redux/userSlice";
import { initialState as addressInitialState } from "./redux/addressesSlice";
import { initialState as wishlistInitialState } from "./redux/wishlistSlice";

export const migrations = {
  0: (state: any) => {
    return {
      ...state,
      cart: cartInitialState,
      user: userInitialState,
      address: addressInitialState,
      wishlist: wishlistInitialState
    };
  },
  1: (state: any) => {
    return {
      ...state,
      user: {
        ...state.user,
        additionalProperty: "defaultValue"
      }
    };
  },
  2: (state: any) => {
    return {
      ...state,
      cart: {
        ...state.cart,
        couponCode: cartInitialState.couponCode,
        discountPercentage: cartInitialState.discountPercentage
      }
    };
  },
  3: (state: any) => {
    return {
      ...state,
      address: {
        ...state.address,
        houseNumber: addressInitialState.houseNumber,
        streetAddress1: addressInitialState.streetAddress1,
        state: addressInitialState.state,
        country: addressInitialState.country
      }
    };
  },
  4: (state: any) => {
    return {
      ...state,
      wishlist: {
        ...state.wishlist
      }
    };
  }
};
