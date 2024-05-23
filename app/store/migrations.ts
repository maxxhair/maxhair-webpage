// migrations.ts
import { initialState as cartInitialState } from "./redux/cartSlice";
import { initialState as userInitialState } from "./redux/userSlice";

export const migrations = {
  0: (state: any) => {
    return {
      ...state,
      cart: cartInitialState,
      user: userInitialState
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
  }
};
