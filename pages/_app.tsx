import type { AppProps } from 'next/app';
// @ts-ignore
import "./globals.css";


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;