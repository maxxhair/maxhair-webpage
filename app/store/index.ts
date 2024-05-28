"use client";

import { combineReducers, compose, configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import cartReducer from "./redux/cartSlice";
import addressesReducer from "./redux/addressesSlice";
import wishlistReducer from "./redux/wishlistSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  createMigrate
} from "redux-persist";
import { migrations } from "./migrations";

// Define the persist config for user and cart slices
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart", "address", "wishlist"],
  migrate: createMigrate(migrations, { debug: false })
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  address: addressesReducer,
  wishlist: wishlistReducer
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    });
  }
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
