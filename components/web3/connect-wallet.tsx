"use client";

import GradientButton from "@/components/ui/gradient-button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function ConnectWallet({
  trigger = "button" as "button" | "icon",
}) {
  const { address, isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);

  // Always call hooks in the same order
  const { open } = useWeb3Modal();

  // Prevent SSR issues by only enabling interactions after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpen = (view?: any) => {
    if (!mounted || typeof window === "undefined") return;
    if (view) {
      open(view);
    } else {
      open();
    }
  };

  if (!mounted) {
    // Render loading state during SSR/hydration
    if (trigger === "icon") {
      return (
        <div className="flex flex-col items-center gap-1 text-white/90">
          <Wallet className="w-6 h-6" />
          <span className="text-xs">Wallet</span>
        </div>
      );
    }
    return (
      <GradientButton className="py-3 px-3" disabled>
        Connect Wallet
      </GradientButton>
    );
  }

  if (isConnected) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-white/70 text-sm hidden sm:inline">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </span>
        <GradientButton
          className="py-4"
          onClick={() => handleOpen({ view: "Account" })}
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
        onClick={() => handleOpen()}
      >
        <Wallet className="w-6 h-6" />
        <span className="text-xs">Wallet</span>
      </button>
    );
  }

  return (
    <GradientButton className="py-3 px-3" onClick={() => handleOpen()}>
      Connect Wallet
    </GradientButton>
  );
}
