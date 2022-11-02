import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "../context/CartContext";
import { ModalProvider } from "../context/ModalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ModalProvider>
  );
}
