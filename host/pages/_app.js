import Head from "next/head";
import "../styles/globals.css";
import React from "react";


const SmartButton = (await import ("remoteLib/SmartButton")).default;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <SmartButton/>
    </div>
  );
}

export default MyApp;
