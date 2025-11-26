import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { config } from "../src/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import "../styles/style.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </WagmiConfig>
  );
}
