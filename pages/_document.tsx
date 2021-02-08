import { NextPageContext } from "next";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { Server, Sheet } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../lib/styletron";

interface ExtraProps {
  stylesheets: Sheet[];
}

/**
 * next.js custom document for styletron
 * See https://github.com/vercel/next.js/blob/canary/examples/with-styletron/pages/_document.js
 */
export default class StyledDocument extends Document<ExtraProps> {
  static async getInitialProps(ctx: NextPageContext) {
    const page = await (ctx as any).renderPage((App: any) => (props: any) => {
      return (
        <StyletronProvider value={styletron}>
          <App {...props} />
        </StyletronProvider>
      );
    });

    const stylesheets = (styletron as Server).getStylesheets() || [];
    return { ...page, stylesheets };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={i}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
