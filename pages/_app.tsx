import '@/styles/globals.css'
import '@/styles/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar"
import Head from 'next/head'
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.3/font/bootstrap-icons.min.css" integrity="sha512-YFENbnqHbCRmJt5d+9lHimyEMt8LKSNTMLSaHjvsclnZGICeY/0KYEeiHwD1Ux4Tcao0h60tdcMv+0GljvWyHg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
