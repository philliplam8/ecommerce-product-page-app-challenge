import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavProvider } from "../context/NavContext";
import { ModalProvider } from "../context/ModalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <NavProvider>
        <Component {...pageProps} />
      </NavProvider>
    </ModalProvider>
  );
}
