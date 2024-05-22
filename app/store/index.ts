"use client";

import { combineReducers, compose, configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import cartReducer from "./redux/cartSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";

// Define the persist config for user and cart slices
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
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
