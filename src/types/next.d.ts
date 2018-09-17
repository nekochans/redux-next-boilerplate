import { Store } from "redux";
import { NextContext } from "next";
import { IReduxState } from "../store";

declare module "next" {
  interface NextContext {
    store: Store<IReduxState>;
    isServer: boolean;
  }
}
