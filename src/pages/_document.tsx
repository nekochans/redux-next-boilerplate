import React from "react";
import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { AppComponentProps } from "next/app";

interface IProps extends AppComponentProps {
  styleTags: React.ReactElement<{}>[];
}

export default class MyDocument extends Document<IProps> {
  static async getInitialProps(ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
