"use client";

import circularArtLogo from "@/assets/circular-art-logo.png";
import lLogo from "@/assets/l-logo.jpg";
import openseaLogo from "@/assets/opensea-logo.png";
import optiPunksLogo from "@/assets/opti-punks-logo.jpg";
import optimisticBunniesLogo from "@/assets/optimistic-bunnies-logo.png";
import optimisticLoogiesLogo from "@/assets/optimistic-loogies-logo.png";
import oe40sLogo from "@/assets/oΞ-40s-logo.png";
import quixoticSquareLogo from "@/assets/quixotic-square-logo.png";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: circularArtLogo, alt: "Circular Art" },
  { src: lLogo, alt: "Layer Logo" },
  { src: openseaLogo, alt: "OpenSea" },
  { src: optimisticLoogiesLogo, alt: "Optimistic Loogies" },
  { src: optimisticBunniesLogo, alt: "Optimistic Bunnies" },
  { src: optiPunksLogo, alt: "Opti Punks" },
  { src: oe40sLogo, alt: "OΞ 40s" },
  { src: quixoticSquareLogo, alt: "Quixotic" },
] as const;

export default function SponsorLogos() {
  const scrolling = [...logos, ...logos];
  return (
    <section className="px-5 md:px-12 py-10 text-white">
      <div className="container overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{ translateX: "-50%" }}
          animate={{ translateX: "0" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-14"
        >
          {scrolling.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-24 w-auto rounded-[20px]"
              sizes="96px"
              priority={index < logos.length}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
