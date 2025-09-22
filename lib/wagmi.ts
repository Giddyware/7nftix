import type { Chain } from 'viem/chains'
import { createConfig, http } from 'wagmi'
import { base, mainnet, optimism, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export const chains = [mainnet, base, optimism, sepolia] as const satisfies readonly [Chain, ...Chain[]]

export function getWagmiConfig() {
    const wcProjectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID
    return createConfig({
        chains,
        connectors: [
            injected({ shimDisconnect: true }),
            coinbaseWallet({ appName: '7NFTix' }),
            ...(wcProjectId ? [walletConnect({ projectId: wcProjectId })] : []),
        ],
        transports: {
            [mainnet.id]: http(),
            [base.id]: http(),
            [optimism.id]: http(),
            [sepolia.id]: http(),
        },
    })
}
