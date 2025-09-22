"use client";

import ChainSwitcher from "@/components/web3/chain-switcher";
import ConnectWallet from "@/components/web3/connect-wallet";
import { Home, Image as ImageIcon, PlusSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

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
  const { isConnected, address } = useAccount();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`${
          isScrolled
            ? "top-3 sm:top-4 md:top-6 inset-x-3 sm:inset-x-4 md:inset-x-8 lg:inset-x-12 backdrop-blur-lg bg-black/40 border-b border-white/10 rounded-b-2xl md:rounded-b-3xl overflow-hidden"
            : "top-0 bg-transparent left-0 right-0 w-full"
        } fixed z-50 transition-all duration-300`}
      >
        <div
          className={`flex justify-between px-5 md:px-12 lg:px-16 items-center transition-all duration-300 ${
            isScrolled ? "py-3" : "py-5"
          }`}
        >
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
            <ConnectWallet />
          </div>
        </div>
      </header>
      {/* Spacer to offset fixed header height */}
      <div
        className={`${isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"}`}
        aria-hidden
      />

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
            <ConnectWallet trigger="icon" />
          </li>
        </ul>
      </nav>
    </>
  );
}
