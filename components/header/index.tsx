"use client";

import ChainSwitcher from "@/components/web3/chain-switcher";
import ConnectWallet from "@/components/web3/connect-wallet";
import { motion } from "framer-motion";
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
      <motion.header
        className="fixed z-50"
        initial={false}
        animate={isScrolled ? "scrolled" : "top"}
        variants={{
          top: {
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            marginLeft: 0,
            marginRight: 0,
            backgroundColor: "rgba(0,0,0,0)",
            backdropFilter: "blur(0px)",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderWidth: 0,
          },
          scrolled: {
            top: 12,
            left: 12,
            right: 12,
            width: "auto",
            marginLeft: 0,
            marginRight: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(16px)",
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.1)",
          },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
        style={{
          borderStyle: "solid",
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          overflow: "hidden",
        }}
      >
        <motion.div
          className="flex justify-between px-5 md:px-12 lg:px-16 items-center"
          initial={false}
          animate={isScrolled ? "scrolled" : "top"}
          variants={{
            top: {
              paddingTop: 20,
              paddingBottom: 20,
            },
            scrolled: {
              paddingTop: 12,
              paddingBottom: 12,
            },
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
          }}
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
        </motion.div>
      </motion.header>

      {/* Spacer to offset fixed header height */}
      <motion.div
        aria-hidden
        initial={false}
        animate={isScrolled ? "scrolled" : "top"}
        variants={{
          top: { height: 80 }, // h-20
          scrolled: { height: 64 }, // h-16
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
        className="md:h-24"
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
