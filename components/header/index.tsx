"use client";

import ChainSwitcher from "@/components/web3/chain-switcher";
import { Home, Image as ImageIcon, PlusSquare, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { coinbaseWallet, injected } from "wagmi/connectors";
import GradientButton from "../ui/gradient-button";

type NavLink = {
  label: string;
  url: string;
  icon?: React.ReactNode;
  hasDropdown?: boolean;
  isActive?: boolean;
};

const navLinks: NavLink[] = [
  {
    label: "Marketplace",
    url: "#",
    icon: <Home className="w-6 h-6" />,
    isActive: true,
  },
  {
    label: "Artwork",
    url: "#",
    icon: <ImageIcon className="w-6 h-6" />,
    hasDropdown: true,
  },
  { label: "Create", url: "#", icon: <PlusSquare className="w-6 h-6" /> },
];

export default function Header() {
  const pathname = usePathname();
  const { address, isConnected } = useAccount();
  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = async () => {
    try {
      if (typeof window !== "undefined" && (window as any).ethereum) {
        await connect({ connector: injected() });
      } else {
        await connect({ connector: coinbaseWallet({ appName: "7NFTix" }) });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <header className="flex justify-between px-5 md:px-12 lg:px-16 py-5 items-center">
        <div className="text-white font-extrabold text-2xl font-secondary">
          7NFTix
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className={`text-white font-primary ${
                    pathname === "#" ? "" : ""
                  } ${link.url === "#" ? "" : "text-[14px] text-[#3f4253]"} ${
                    link.isActive && "font-bold"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <ChainSwitcher />
          {isConnected ? (
            <div className="flex items-center gap-3">
              <span className="text-white/70 text-sm hidden sm:inline">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </span>
              <GradientButton className="py-4" onClick={() => disconnect()}>
                Disconnect
              </GradientButton>
            </div>
          ) : (
            <GradientButton
              className="py-4"
              onClick={handleConnect}
              disabled={isPending}
            >
              {isPending ? "Connecting..." : "Connect Wallet"}
            </GradientButton>
          )}
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 z-50">
        <ul className="flex justify-around items-center py-3 px-6">
          {navLinks.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                className={`flex flex-col items-center gap-1 ${
                  link.isActive ? "text-white" : "text-white/50"
                }`}
              >
                {link.icon}
                <span className="text-xs">{link.label}</span>
              </Link>
            </li>
          ))}
          <li>
            {isConnected ? (
              <button
                className="flex flex-col items-center gap-1 text-white"
                onClick={() => disconnect()}
              >
                <Wallet className="w-6 h-6" />
                <span className="text-xs">Disconnect</span>
              </button>
            ) : (
              <button
                className="flex flex-col items-center gap-1 text-white/50"
                onClick={handleConnect}
                disabled={isPending}
              >
                <Wallet className="w-6 h-6" />
                <span className="text-xs">Wallet</span>
              </button>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
