import React from "react";
import { Provider } from "react-redux";
import App, { AppComponentProps, Container } from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import configureStore, { IReduxState } from "../store";
import { Store } from "redux";

interface IProps extends AppComponentProps {
  store: Store<IReduxState>;
}

class MyApp extends App<IProps> {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
