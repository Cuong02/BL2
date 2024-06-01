import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
const NEXT_PUBLIC_TEMPLATE_CLIENT_ID="e022f97f17106f10718c0b0e2c535290"
const activeChain = {
  chainId: 80002,
  rpc: ["https://rpc-amoy.polygon.technology/"],
  shortName: "PoS Amoy",
  slug: "PolygonAmoy",
  chain: "PosAmoy",
  name: "Polygon Amoy",
  testnet: true,
  explorers: [
    {
      name: "blocksCount",
      url: "https://www.oklink.com/amoy‍/",
      standard: "EIP3091",
    },
  ],
  nativeCurrency: {
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;