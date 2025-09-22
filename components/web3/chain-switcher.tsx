"use client";

import { useChainId, useSwitchChain } from "wagmi";

export default function ChainSwitcher() {
  const chainId = useChainId();
  const { chains, switchChain, isPending } = useSwitchChain();

  return (
    <select
      aria-label="Select network"
      className="bg-transparent text-white/80 text-sm border border-white/10 rounded-xl px-4 py-4 focus:outline-none"
      value={chainId}
      onChange={(e) => switchChain({ chainId: Number(e.target.value) })}
      disabled={isPending}
    >
      {chains.map((c) => (
        <option key={c.id} value={c.id} className="text-black">
          {c.name}
        </option>
      ))}
    </select>
  );
}
