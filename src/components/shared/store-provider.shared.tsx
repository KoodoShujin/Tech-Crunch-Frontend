"use client";

import store from "@/store/index.store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export interface IStoreProvider {
  children: ReactNode;
}

export const StoreProvider = ({ children }: IStoreProvider) => {
  return <Provider store={store}>{children}</Provider>;
};
