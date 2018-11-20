import React from "react";
import { ICounterState } from "../modules/Counter";
import CounterContainer from "../containers/Counter";
import { Dispatch } from "redux";
import { ReduxAction } from "../store";
import { compose, pure, setStatic } from "recompose";
import { NextContext } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchFromCookie } from "../infrastructure/cookie";

interface IProps {
  actions: Dispatch<ReduxAction>;
  value: ICounterState;
  isLoggedIn: boolean;
}

export const CounterPage: React.SFC<IProps> = (props: IProps) => {
  return (
    <>
      <Navbar {...props} />
      <CounterContainer actions={props.actions} value={props.value} />
      <Footer />
    </>
  );
};

const enhance = compose(
  setStatic("getInitialProps", async (ctx: NextContext) => {
    const { err } = ctx;
    if (err != null) {
      // TODO 何らかのError処理を行う
    }

    const accessToken = fetchFromCookie(ctx, "accessToken");
    const isLoggedIn = accessToken != null;

    return {
      title: "🐱カウンター🐱",
      isLoggedIn
    };
  }),
  pure
);

export default enhance(CounterPage);
