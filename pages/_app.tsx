import { EditLightTheme } from "@gadgetinc/themes";
import { BaseProvider } from "baseui";
import { HeadingLevel } from "baseui/heading";
import "modern-css-reset";
import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import React from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../lib/styletron";

function GadgetApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={EditLightTheme as any}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeadingLevel>
          <Component {...pageProps} />
        </HeadingLevel>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default GadgetApp;
