"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Optimistic Bunnies", logo: "/optimistic-bunnies-logo.png" },
  { name: "Quixotic", logo: "/quixotic-square-logo.png" },
  { name: "Opti Punks", logo: "/opti-punks-logo.jpg" },
  { name: "Optimistic Loogies", logo: "/optimistic-loogies-logo.png" },
  { name: "Circular Art", logo: "/circular-art-logo.png" },
  { name: "L", logo: "/l-logo.jpg" },
  { name: "OΞ-40s", logo: "/oΞ-40s-logo.png" },
  { name: "OpenSea", logo: "/opensea-logo.png" },
];

export default function PartnersList() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="bg-black/20 p-6 rounded-2xl border border-white/10 flex justify-center items-center aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={120}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
