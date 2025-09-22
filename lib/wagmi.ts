import { createConfig, http } from 'wagmi'
import { base, mainnet, optimism, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected } from 'wagmi/connectors'

// Create a minimal Wagmi config with public RPCs
export const wagmiConfig = createConfig({
    chains: [mainnet, base, optimism, sepolia],
    connectors: [
        injected({ shimDisconnect: true }),
        coinbaseWallet({ appName: '7NFTix' }),
    ],
    transports: {
        [mainnet.id]: http(),
        [base.id]: http(),
        [optimism.id]: http(),
        [sepolia.id]: http(),
    },
})
