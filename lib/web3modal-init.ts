"use client";

import { getWagmiConfig } from '@/lib/wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react';

// Initialize Web3Modal only on client side, after window is available
if (typeof window !== 'undefined') {
    const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID
    if (projectId) {
        const wagmiConfig = getWagmiConfig()
        createWeb3Modal({
            wagmiConfig,
            projectId,
            themeMode: 'dark',
            enableOnramp: false 
        })
    }
}

export { };

