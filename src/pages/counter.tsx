import React from "react";
import CounterContainer from "../containers/Counter";
import { Dispatch } from "redux";
import { IReduxState, ReduxAction } from "../store";
import { compose, pure, setStatic } from "recompose";
import { NextContext } from "next";
import Layout from "../components/Layout";
import { isLoggedIn } from "../domain/Auth";
import { rootActions } from "../modules/Root";

interface IProps {
  actions: Dispatch<ReduxAction>;
  value: IReduxState;
}

export const CounterPage: React.SFC<IProps> = (props: IProps) => {
  return (
    <Layout value={props.value}>
      <CounterContainer actions={props.actions} value={props.value} />
    </Layout>
  );
};

const enhance = compose(
  setStatic("getInitialProps", async (ctx: NextContext) => {
    const { err } = ctx;
    if (err != null) {
      // TODO 何らかのError処理を行う
    }

    const pageProps = {
      title: "🐱カウンター🐱",
      isLoggedIn: isLoggedIn(ctx)
    };

    ctx.store.dispatch(rootActions.pageTransition(pageProps));

    const containerProps = {
      actions: ctx.store.dispatch,
      value: ctx.store.getState()
    };

    return Object.assign(pageProps, containerProps);
  }),
  pure
);

export default enhance(CounterPage);
