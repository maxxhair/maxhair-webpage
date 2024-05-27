// migrations.ts
import { initialState as cartInitialState } from "./redux/cartSlice";
import { initialState as userInitialState } from "./redux/userSlice";
import { initialState as addressInitialState } from "./redux/addressesSlice";

export const migrations = {
  0: (state: any) => {
    return {
      ...state,
      cart: cartInitialState,
      user: userInitialState,
      address: addressInitialState
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
        ...state.address
      }
    };
  }
};
