import { Heading } from "baseui/heading";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Gadget Next.js App</Heading>
    </div>
  );
}
