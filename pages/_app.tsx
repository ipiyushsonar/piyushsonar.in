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
        <meta name="cf-2fa-verify" content="ze0mfdgwgqeyjprg" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
