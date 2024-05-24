import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductStoreType } from "../../types";

type InitialCartState = {
  openCart: boolean;
  cartItems: ProductStoreType[];
  couponCode: string;
  discountPercentage: number;
};

export const initialState: InitialCartState = {
  openCart: false,
  cartItems: [],
  couponCode: "",
  discountPercentage: 0
};

const indexSameProduct = (
  state: InitialCartState,
  action: ProductStoreType
) => {
  const sameProduct = (product: ProductStoreType) =>
    product?.id === action.id &&
    product.color === action.color &&
    product.size === action.size &&
    product.type === action.type &&
    product.texture === action.texture;

  return state.cartItems.findIndex(sameProduct);
};

type AddProductType = {
  product: ProductStoreType;
  count: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state) => {
      state.openCart = true;
    },
    setCloseCart: (state) => {
      state.openCart = false;
    },
    addProduct: (state, action) => {
      const cartItems = state.cartItems;
      console.log(action.payload, "action.payload");

      const index = indexSameProduct(state, action.payload.product);

      if (index !== -1) {
        cartItems[index].count += action.payload.count;
        return;
      }

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.product]
      };
    },
    removeProduct(state, action: PayloadAction<ProductStoreType>) {
      state.cartItems.splice(indexSameProduct(state, action.payload), 1);
    },
    setCount(state, action: PayloadAction<AddProductType>) {
      const indexItem = indexSameProduct(state, action.payload.product);
      state.cartItems[indexItem].count = action.payload.count;
    },

    emptyCart: (state) => {
      state.cartItems = [];
    },
    addCouponCode: (state, action) => {
      state.couponCode = action.payload;
    },
    removeCouponCode: (state) => {
      state.couponCode = "";
    },
    addDiscount: (state, action) => {
      state.discountPercentage = action.payload;
    }
  }
});

export const {
  setOpenCart,
  setCloseCart,
  addProduct,
  setCount,
  removeProduct,
  emptyCart,
  addCouponCode,
  removeCouponCode,
  addDiscount
} = cartSlice.actions;
export default cartSlice.reducer;
