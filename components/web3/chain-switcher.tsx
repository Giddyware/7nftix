"use client";

import { ChevronDown } from "lucide-react";
import { useChainId, useSwitchChain } from "wagmi";

export default function ChainSwitcher() {
  const chainId = useChainId();
  const { chains, switchChain, isPending } = useSwitchChain();

  return (
    <div className="relative inline-flex items-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <select
        aria-label="Select network"
        className={`appearance-none bg-transparent text-white/90 text-sm pl-4 pr-10 py-2 md:py-3 rounded-2xl outline-none focus:ring-2 focus:ring-white/20 ${
          isPending ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
        }`}
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
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
    </div>
  );
}
