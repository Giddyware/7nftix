"use client";

import GradientButton from "@/components/ui/gradient-button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Wallet } from "lucide-react";
import { useAccount } from "wagmi";

export default function ConnectWallet({
  trigger = "button" as "button" | "icon",
}) {
  const { address, isConnected } = useAccount();
  const { open, close } = useWeb3Modal();

  if (isConnected) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-white/70 text-sm hidden sm:inline">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </span>
        <GradientButton
          className="py-4"
          onClick={() => open({ view: "Account" })}
        >
          Wallet
        </GradientButton>
      </div>
    );
  }

  if (trigger === "icon") {
    return (
      <button
        aria-label="Open wallet options"
        className="flex flex-col items-center gap-1 text-white/90"
        onClick={() => open()}
      >
        <Wallet className="w-6 h-6" />
        <span className="text-xs">Wallet</span>
      </button>
    );
  }

  return (
    <GradientButton className="py-3 px-3" onClick={() => open()}>
      Connect Wallet
    </GradientButton>
  );
}
