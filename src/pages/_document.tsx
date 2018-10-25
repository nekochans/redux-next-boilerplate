import React from "react";
import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript
} from "next/document";
import { AppComponentProps } from "next/app";
import { Store } from "redux";
import { IReduxState } from "../store";

interface IProps extends AppComponentProps {
  store: Store<IReduxState>;
}

export default class MyDocument extends Document<IProps> {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
