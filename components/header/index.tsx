"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

type NavLink = {
  label: string;
  url: string;
  hasDropdown?: boolean;
  isActive?: boolean;
};

const navLinks: NavLink[] = [
  { label: "Marketplace", url: "/marketplace", isActive: true },
  { label: "Artwork", url: "/artwork", hasDropdown: true },
  { label: "Create", url: "/create" },
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
                  pathname === "/" ? "" : ""
                } ${
                  link.url === "/marketplace"
                    ? ""
                    : "text-[14px] text-[#3f4253]"
                } ${link.isActive && "font-bold"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <Button className="text-white border border-blue-400 bg-[#002034]">
          Connect Wallet
        </Button>
        <Menu className="h-6 w-6 md:hidden text-white/20" />
      </div>
    </header>
  );
}
