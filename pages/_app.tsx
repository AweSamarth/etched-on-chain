import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Inter, Cardo, IM_Fell_English } from 'next/font/google';

const inter = Inter({subsets:['latin'], variable:"--font-inter"})
const cardo = Cardo({subsets:["latin-ext"], weight:["400", "700"], variable:"--font-cardo"})
const imfell = IM_Fell_English({subsets:["latin"], weight:["400"], variable:"--font-imfell"})

const { chains, provider } = configureChains(
  [polygonMumbai],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function App({ Component, pageProps }: AppProps) {

  return (
  
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider modalSize='compact' chains={chains} theme={darkTheme({
      accentColor: '#9e8d75',
      accentColorForeground: 'white',
      borderRadius: "small",
      fontStack: 'system',
      overlayBlur: 'small',
      
    })}>  
    <main className={`${inter.variable} ${cardo.variable} ${imfell.variable} bg-[#333333] `}><Component {...pageProps} /></main>
  
  </RainbowKitProvider>
    </WagmiConfig>)
}
