"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

type NavLink = {
  label: string;
  url: string;
  hasDropdown?: boolean;
};

const navLinks: NavLink[] = [
  { label: "Marketplace", url: "/marketplace" },
  { label: "Artwork", url: "/artwork", hasDropdown: true },
  { label: "Create", url: "/create" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between px-16 py-5 items-center">
      <div className="text-white font-extrabold text-2xl">7NFTix</div>
      <div>
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                className={`text-white ${pathname === "/" ? "" : ""} ${
                  link.url === "/marketplace"
                    ? ""
                    : "font-light text-[14px] text-[#3f4253]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Button className="text-white border border-blue-400 bg-[#002034]">
        Connect Wallet
      </Button>
    </nav>
  );
}
