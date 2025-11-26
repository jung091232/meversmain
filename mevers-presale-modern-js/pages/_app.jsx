import type { AppProps } from "next/app";
import "../styles/globals.css";
import { WagmiConfig } from "wagmi";
import { wagmiConfig } from "../src/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(()=>new QueryClient());
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </WagmiConfig>
  );
}
