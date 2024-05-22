"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import Next13ProgressBar from "next13-progressbar";

type Props = {
  children: React.ReactNode;
};

const Providers: React.FC<Props> = ({ children }: Props) => {
  useEffect(() => {
    const unsubscribe = persistor.subscribe(() => {
      const state = persistor.getState();
      console.log("Persistor state:", state);
    });
    return unsubscribe;
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
        <Next13ProgressBar height="4px" color="#0A2FFF" showOnShallow />
      </PersistGate>
    </Provider>
  );
};

export default Providers;
