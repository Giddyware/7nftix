"use client";

import { getWagmiConfig } from '@/lib/wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react';

// Initialize Web3Modal immediately on client import, before hooks run
const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID
if (projectId) {
    const wagmiConfig = getWagmiConfig()
    createWeb3Modal({ wagmiConfig, projectId, themeMode: 'dark' })
}

export { };

