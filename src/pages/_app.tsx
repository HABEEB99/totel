import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress />
      <Toaster />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
