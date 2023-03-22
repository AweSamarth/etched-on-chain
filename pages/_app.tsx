import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  polygonMumbai,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { Inter, Cardo, IM_Fell_English } from "next/font/google";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useState } from "react";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/43422/graph-etched-on-chain/0.0.2",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cardo = Cardo({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
  variable: "--font-cardo",
});
const imfell = IM_Fell_English({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-imfell",
});

const { chains, provider } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});


export default function App({ Component, pageProps }: AppProps) {
  const [txHash, setTxHash] = useState(null);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        modalSize="compact"
        chains={chains}
        theme={darkTheme({
          accentColor: "#9e8d75",
          accentColorForeground: "white",
          borderRadius: "small",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        <ApolloProvider client={client}>
          <main
            className={`${inter.variable} ${cardo.variable} ${imfell.variable} bg-[#333333]`}
          >
            <Component {...pageProps} />
          </main>
        </ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
