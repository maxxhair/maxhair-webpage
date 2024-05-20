"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import cartReducer from "./redux/cartSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

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

const reducer = {
  user: userReducer,
  cart: cartReducer
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
