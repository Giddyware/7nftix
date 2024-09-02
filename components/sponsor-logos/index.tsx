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

export default function SponsorLogos() {
  return (
    <section className="px-5 md:px-12 py-10 text-white">
      <div className="container overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{ translateX: "-50%" }}
          animate={{ translateX: "0" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex gap-14"
        >
          {[
            circularArtLogo,
            lLogo,
            openseaLogo,
            optimisticLoogiesLogo,
            optimisticBunniesLogo,
            optiPunksLogo,
            oe40sLogo,
            quixoticSquareLogo,
            circularArtLogo,
            lLogo,
            openseaLogo,
            optimisticLoogiesLogo,
            optimisticBunniesLogo,
            optiPunksLogo,
            oe40sLogo,
            quixoticSquareLogo,
          ].map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.src}
              className="h-24 w-auto rounded-[20px]"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
