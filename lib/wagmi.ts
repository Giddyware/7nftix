import { createConfig, http } from 'wagmi'
import { base, mainnet, optimism, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export const chains = [mainnet, base, optimism, sepolia]

export function getWagmiConfig() {
    const wcProjectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID
    return createConfig({
        chains,
        connectors: [
            injected({ shimDisconnect: true }),
            coinbaseWallet({ appName: '7NFTix' }),
            ...(wcProjectId ? [walletConnect({ projectId: wcProjectId, showQrModal: true })] : []),
        ],
        transports: Object.fromEntries(chains.map((c) => [c.id, http()])),
    })
}
