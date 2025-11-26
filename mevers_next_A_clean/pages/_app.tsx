import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { config } from "../src/wagmi";
import "../styles/style.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
