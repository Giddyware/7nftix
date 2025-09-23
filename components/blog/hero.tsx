"use client";

import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <motion.div
      className="relative bg-cover bg-center bg-no-repeat py-20 md:py-40 text-center text-white"
      style={{ backgroundImage: "url(/images/collection9.png)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold font-secondary mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          The 7NFTix Blog
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Your source for the latest news, trends, and insights in the world of
          NFTs.
        </motion.p>
      </div>
    </motion.div>
  );
}
