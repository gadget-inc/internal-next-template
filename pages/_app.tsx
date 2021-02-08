import "modern-css-reset";
import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../lib/styletron";

function GadgetApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <Component {...pageProps} />
    </StyletronProvider>
  );
}

export default GadgetApp;
