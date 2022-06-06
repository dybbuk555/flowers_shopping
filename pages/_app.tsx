import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import config from "../src/aws-exports.js";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";

Amplify.configure({
  ...config,
  ssr: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}

export default MyApp;
