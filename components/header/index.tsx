"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GradientButton from "../ui/gradient-button";

type NavLink = {
  label: string;
  url: string;
  hasDropdown?: boolean;
  isActive?: boolean;
};

const navLinks: NavLink[] = [
  { label: "Marketplace", url: "#", isActive: true },
  { label: "Artwork", url: "#", hasDropdown: true },
  { label: "Create", url: "#" },
];

export default function Header() {
  const pathname = usePathname();
  return (
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
      <div className="flex items-center gap-4">
        <GradientButton className="py-4"> Connect Wallet</GradientButton>
        <Menu className="h-6 w-6 md:hidden text-white/20" />
      </div>
    </header>
  );
}
