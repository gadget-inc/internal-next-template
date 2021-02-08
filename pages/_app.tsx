import { EditLightTheme } from "@gadgetinc/themes";
import { BaseProvider } from "baseui";
import "modern-css-reset";
import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../lib/styletron";

function GadgetApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={EditLightTheme}>
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default GadgetApp;
