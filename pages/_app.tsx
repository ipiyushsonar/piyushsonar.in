import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen h-screen text-slate-300 ">
      <Head>
        <title>Piyush A. Sonar</title>
        <link rel="icon" type="image/ico" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
