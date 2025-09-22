"use client";

import { getWagmiConfig } from "@/lib/wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID;

if (!projectId) {
    throw new Error("NEXT_PUBLIC_WC_PROJECT_ID is not set");
}

const wagmiConfig = getWagmiConfig();

createWeb3Modal({
    wagmiConfig,
    projectId,
    themeMode: "dark",
    enableOnramp: false,
});

export { };

