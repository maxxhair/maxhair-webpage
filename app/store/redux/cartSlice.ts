import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoggedUser, ProductStoreType } from "../../types";
import axios from "axios";
import { RootState } from "..";

type InitialCartState = {
  openCart: boolean;
  cartItems: ProductStoreType[];
  couponCode: string;
  discountPercentage: number;
  isLoading: boolean;
};

export const initialState: InitialCartState = {
  isLoading: true,
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

interface FetchCartInput {
  successCallback: () => void;
  errorCallback: (error: string) => void;
  value: object;
}

export const fetchCartProducts = createAsyncThunk(
  "fetchCartProducts/Async",
  async (input: FetchCartInput, thunkApi) => {
    const { successCallback, errorCallback } = input;
    const { rejectWithValue } = thunkApi;
    const state = thunkApi.getState() as RootState;
    const user = state.user.user as LoggedUser;
    const config = {
      headers: {
        Authorization: `Bearer ${user.cookie}`
      }
    };
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}cart`,
        config
      );
      successCallback();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

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
